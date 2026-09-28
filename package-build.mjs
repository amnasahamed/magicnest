import { execSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, ".output");
const publicOutputDir = path.join(outputDir, "public");
const zipFile = path.join(rootDir, "build.zip");

console.log("🔨 Building application with Vite...");
execSync("npm run build", { stdio: "inherit" });

// Start local server to prerender full static HTML pages
console.log("🌐 Prerendering static HTML for all routes...");
const serverProcess = spawn("node", [path.join(outputDir, "server", "index.mjs")], {
  env: { ...process.env, PORT: "3899", HOST: "127.0.0.1" },
  stdio: "pipe",
});

await new Promise((resolve) => setTimeout(resolve, 1500));

const routes = [
  { path: "/", output: "index.html" },
  { path: "/lkg", output: "lkg/index.html", altOutput: "lkg.html" },
  { path: "/pre-kg", output: "pre-kg/index.html", altOutput: "pre-kg.html" },
  { path: "/ukg", output: "ukg/index.html", altOutput: "ukg.html" },
  { path: "/404-fallback-not-found", output: "404.html" },
];

for (const route of routes) {
  try {
    const res = await fetch(`http://127.0.0.1:3899${route.path}`);
    const html = await res.text();
    const targetPath = path.join(outputDir, route.output);
    const targetPublicPath = path.join(publicOutputDir, route.output);

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, html, "utf8");

    fs.mkdirSync(path.dirname(targetPublicPath), { recursive: true });
    fs.writeFileSync(targetPublicPath, html, "utf8");

    if (route.altOutput) {
      fs.writeFileSync(path.join(outputDir, route.altOutput), html, "utf8");
      fs.writeFileSync(path.join(publicOutputDir, route.altOutput), html, "utf8");
    }
    console.log(`  ✓ Prerendered ${route.path} -> ${route.output}`);
  } catch (err) {
    console.error(`  ✗ Failed to prerender ${route.path}:`, err.message);
  }
}

serverProcess.kill();

console.log("⚙️  Configuring DirectAdmin files (.htaccess, .env, entrypoints)...");

// Write DirectAdmin / Apache .htaccess for public_html routing & performance
const htaccessContent = `# DirectAdmin / Apache Configuration for public_html
DirectoryIndex index.html index.htm

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # HTTPS Redirect (Uncomment below if SSL is active and desired)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Serve existing static files or folders directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Check if a direct .html file exists for the path (e.g. /lkg -> /lkg.html)
  RewriteCond %{REQUEST_FILENAME}.html -f [OR]
  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^([^/]+)/?$ $1.html [L]

  # Check if a folder with index.html exists (e.g. /lkg/index.html)
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^([^/]+)/?$ $1/index.html [L]

  # Do not rewrite static asset/media files to index.html if missing (prevents MIME type errors)
  RewriteCond %{REQUEST_URI} !\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot|pdf|json|xml|map)$ [NC]

  # Single Page Application (SPA) fallback
  RewriteRule ^ index.html [L]
</IfModule>

# Prevent directory listing
Options -Indexes

# Custom 404 handler
ErrorDocument 404 /404.html

# Caching optimization for assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>
`;

fs.writeFileSync(path.join(outputDir, ".htaccess"), htaccessContent);
fs.writeFileSync(path.join(publicOutputDir, ".htaccess"), htaccessContent);

// Prepare .env files
const rootEnvPath = path.join(rootDir, ".env");
const envContent = fs.existsSync(rootEnvPath)
  ? fs.readFileSync(rootEnvPath, "utf8")
  : `PORT=3000\nHOST=0.0.0.0\nNODE_ENV=production\n`;

fs.writeFileSync(path.join(outputDir, ".env"), envContent);
fs.writeFileSync(path.join(outputDir, ".env.production"), envContent);
fs.writeFileSync(path.join(outputDir, ".env.example"), envContent);

fs.writeFileSync(path.join(publicOutputDir, ".env"), envContent);
fs.writeFileSync(path.join(publicOutputDir, ".env.production"), envContent);
fs.writeFileSync(path.join(publicOutputDir, ".env.example"), envContent);

// App entry files for Node.js Selector (if deployed as a Node app)
fs.writeFileSync(
  path.join(outputDir, "app.js"),
  `import("./server/index.mjs");\n`
);

fs.writeFileSync(
  path.join(outputDir, "package.json"),
  JSON.stringify(
    {
      name: "magic-nest",
      version: "1.0.0",
      private: true,
      type: "module",
      main: "app.js",
      scripts: {
        start: "node server/index.mjs",
      },
    },
    null,
    2
  ) + "\n"
);

// 1. Generate clean public_html.zip (pure static hosting for DirectAdmin public_html)
const publicHtmlZip = path.join(rootDir, "public_html.zip");
if (fs.existsSync(publicHtmlZip)) {
  fs.unlinkSync(publicHtmlZip);
}
console.log("🗜️  Generating public_html.zip (clean static package for DirectAdmin public_html)...");
execSync(
  `cd "${publicOutputDir}" && zip -r "${publicHtmlZip}" . .htaccess .env .env.production .env.example -x "*.DS_Store"`,
  { stdio: "inherit" }
);
const publicStats = fs.statSync(publicHtmlZip);
const publicSizeMB = (publicStats.size / (1024 * 1024)).toFixed(2);
console.log(`  ✓ Created public_html.zip: ${publicHtmlZip} (${publicSizeMB} MB)`);

// 2. Generate universal build.zip (includes both root static files and Node.js server runtime)
console.log("📂 Aligning folder structure for universal build.zip...");
execSync(`cp -R "${publicOutputDir}/"* "${outputDir}/"`, { stdio: "inherit" });

if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

console.log("🗜️  Generating build.zip (universal package with Node SSR + static files)...");
execSync(
  `cd "${outputDir}" && zip -r "${zipFile}" . .htaccess .env .env.production .env.example -x "*.DS_Store"`,
  { stdio: "inherit" }
);

const stats = fs.statSync(zipFile);
const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`\n🎉 Success!`);
console.log(`  1. public_html.zip (${publicSizeMB} MB) -> Recommended for DirectAdmin public_html`);
console.log(`  2. build.zip (${sizeMB} MB) -> Universal bundle (Static + Node.js SSR)`);

