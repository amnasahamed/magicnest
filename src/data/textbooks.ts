import preKgTextbook from "@/assets/textbooks/pre-kg-textbook.webp";
import preKgActivityBook from "@/assets/textbooks/pre-kg-activity-book.webp";
import preKgBundle from "@/assets/textbooks/pre-kg-bundle.webp";

import lkgEnglish from "@/assets/textbooks/lkg-english.webp";
import lkgMaths from "@/assets/textbooks/lkg-maths.webp";
import lkgMalayalam from "@/assets/textbooks/lkg-malayalam.webp";
import lkgEvs from "@/assets/textbooks/lkg-evs.webp";
import lkgBundle from "@/assets/textbooks/lkg-bundle.webp";

import ukgEnglish from "@/assets/textbooks/ukg-english.webp";
import ukgMaths from "@/assets/textbooks/ukg-maths.webp";
import ukgMalayalam from "@/assets/textbooks/ukg-malayalam.webp";
import ukgEvs from "@/assets/textbooks/ukg-evs.webp";
import ukgBundle from "@/assets/textbooks/ukg-bundle.webp";

import phonicsTextbook from "@/assets/textbooks/phonics-textbook.webp";
import allProgramsBundle from "@/assets/textbooks/all-programs-bundle.webp";

export type TextbookItem = {
  id: string;
  title: string;
  subtitle: string;
  program: "Pre-KG" | "LKG" | "UKG" | "Phonics";
  programSlug: "pre-kg" | "lkg" | "ukg" | "phonics";
  subject: "English" | "Maths" | "EVS" | "Malayalam" | "General" | "Phonics" | "Activity";
  coverImage: string;
  badge: string;
  description: string;
  features: string[];
  pages?: string;
  format: "Full Colour Illustrated" | "Activity & Tracing" | "Phonics Handbook";
};

export type ProgramKit = {
  program: "Pre-KG" | "LKG" | "UKG" | "Phonics";
  programSlug: "pre-kg" | "lkg" | "ukg" | "phonics";
  headline: string;
  summary: string;
  bundleImage: string;
  bookCount: number;
  books: TextbookItem[];
};

export const allTextbooks: TextbookItem[] = [
  // Pre-KG
  {
    id: "pre-kg-textbook",
    title: "Pre-KG All-in-One Textbook",
    subtitle: "Early Concepts & Discovery",
    program: "Pre-KG",
    programSlug: "pre-kg",
    subject: "General",
    coverImage: preKgTextbook,
    badge: "Core Textbook",
    description:
      "Vibrant full-colour pages introducing early letters, numbers 1-20, colours, shapes, animals, and everyday world awareness.",
    features: [
      "Large, high-contrast visual illustrations",
      "Letters Aa to Zz introduction with picture cues",
      "Numbers 1-20 with real-world object counting",
      "Everyday themes: family, fruits, vehicles, and nature",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "pre-kg-activity-book",
    title: "Pre-KG Activity & Tracing Book",
    subtitle: "Hands-on Motor Skills & Play",
    program: "Pre-KG",
    programSlug: "pre-kg",
    subject: "Activity",
    coverImage: preKgActivityBook,
    badge: "Workbook",
    description:
      "Fun-filled motor-skill exercises with pre-writing line tracing, colour matching, sticker activities, and creative doodle sheets.",
    features: [
      "Pre-writing curves, zigzags, and strokes",
      "Colouring and shape-matching exercises",
      "Fine motor coordination development",
      "Interactive parent-and-child activity prompts",
    ],
    format: "Activity & Tracing",
  },

  // LKG
  {
    id: "lkg-english",
    title: "LKG English & Literacy",
    subtitle: "Alphabet, Phonics & First Words",
    program: "LKG",
    programSlug: "lkg",
    subject: "English",
    coverImage: lkgEnglish,
    badge: "Language",
    description:
      "Structured literacy curriculum teaching alphabet recognition, letter formation, phonics sounds, two-letter words, and vocabulary building.",
    features: [
      "Alphabet tracing and handwriting guides",
      "Phonic sound association with every letter",
      "Sight words, action words, and early vocabulary",
      "Rhymes, story comprehension, and oral conversation",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "lkg-maths",
    title: "LKG Mathematics",
    subtitle: "Numbers, Shapes & Logical Concepts",
    program: "LKG",
    programSlug: "lkg",
    subject: "Maths",
    coverImage: lkgMaths,
    badge: "Numeracy",
    description:
      "Concrete number sense from 0 to 50, spatial concepts, size comparisons, basic patterns, and simple counting games.",
    features: [
      "Numbers 0 to 50 counting and sequence writing",
      "Before, after, and between number practice",
      "Big/small, long/short, heavy/light comparisons",
      "Basic 2D shapes and geometric patterns",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "lkg-evs",
    title: "LKG Environmental Studies (EVS)",
    subtitle: "World Awareness & Life Skills",
    program: "LKG",
    programSlug: "lkg",
    subject: "EVS",
    coverImage: lkgEvs,
    badge: "Discovery",
    description:
      "Interactive exploration of our body, family, community helpers, plants, animals, safety rules, and good daily habits.",
    features: [
      "Human body parts and 5 sensory organs",
      "Animals, birds, insects, and habitats",
      "Healthy habits, hygiene, and basic safety",
      "Community helpers, transport, and seasons",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "lkg-malayalam",
    title: "LKG Malayalam",
    subtitle: "Foundational Mother-Tongue Learning",
    program: "LKG",
    programSlug: "lkg",
    subject: "Malayalam",
    coverImage: lkgMalayalam,
    badge: "Language",
    description:
      "Gentle introduction to Malayalam letters, swaraksharangal, phonetics, cultural rhymes, and bilingual conversational skills.",
    features: [
      "First Malayalam letters and clear strokes",
      "Authentic Malayalam rhymes and folklore",
      "Everyday object vocabulary in Malayalam",
      "Bilingual storytelling and oral speaking",
    ],
    format: "Full Colour Illustrated",
  },

  // UKG
  {
    id: "ukg-english",
    title: "UKG English & Reading",
    subtitle: "Phonics, Sentences & Fluency",
    program: "UKG",
    programSlug: "ukg",
    subject: "English",
    coverImage: ukgEnglish,
    badge: "Language",
    description:
      "Advanced kindergarten English developing sentence reading, sight words, digraphs, simple grammar, comprehension, and expressive writing.",
    features: [
      "Three- and four-letter phonetic word blending",
      "Sentence formation, pronouns, and action words",
      "Story reading comprehension with questions",
      "Dictation, spelling practice, and creative expression",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "ukg-maths",
    title: "UKG Mathematics",
    subtitle: "Numbers to 100, Addition & Logic",
    program: "UKG",
    programSlug: "ukg",
    subject: "Maths",
    coverImage: ukgMaths,
    badge: "Numeracy",
    description:
      "Complete school-readiness maths covering numbers 1-100, place value (tens and ones), single-digit addition, subtraction, time, and money.",
    features: [
      "Numbers and number names up to 100",
      "Place value: tens and units concept",
      "Single-digit addition and subtraction",
      "Introduction to time and money",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "ukg-evs",
    title: "UKG Environmental Studies (EVS)",
    subtitle: "Science, Nature & Social Living",
    program: "UKG",
    programSlug: "ukg",
    subject: "EVS",
    coverImage: ukgEvs,
    badge: "Discovery",
    description:
      "Rich scientific concepts including plant life cycles, animal classifications, weather, festivals, and environment conservation.",
    features: [
      "Living vs non-living things & plant parts",
      "Water cycle, weather, and four seasons",
      "Our country, national symbols, and festivals",
      "Environmental care and healthy lifestyle",
    ],
    format: "Full Colour Illustrated",
  },
  {
    id: "ukg-malayalam",
    title: "UKG Malayalam",
    subtitle: "Swarangal, Vyanjanangal & Reading",
    program: "UKG",
    programSlug: "ukg",
    subject: "Malayalam",
    coverImage: ukgMalayalam,
    badge: "Language",
    description:
      "Complete Malayalam script readiness with swaraksharangal, chinnangal, vyanjanaksharangal, word reading, and interactive songs.",
    features: [
      "Swaraksharangal and Chinnangal mastery",
      "Vyanjanaksharangal letter identification",
      "Word building and simple sentence reading",
      "Traditional rhymes, stories, and cultural dialogues",
    ],
    format: "Full Colour Illustrated",
  },

  // Phonics
  {
    id: "phonics-textbook",
    title: "Phonics for Kids Comprehensive Textbook",
    subtitle: "The Complete Synthetic Phonics Guide",
    program: "Phonics",
    programSlug: "phonics",
    subject: "Phonics",
    coverImage: phonicsTextbook,
    badge: "Specialized Course",
    description:
      "Systematic step-by-step phonics textbook taking young learners from individual 44 sounds, blends, and digraphs to fluent independent reading.",
    features: [
      "Complete 44 phonemes with visual action cues",
      "Consonant blends (bl, cr, st, nk, etc.)",
      "Consonant & vowel digraphs (ch, sh, th, ee, oa, ai)",
      "Decodable stories and graduated reading passages",
    ],
    format: "Phonics Handbook",
  },
];

export const programKits: ProgramKit[] = [
  {
    program: "Pre-KG",
    programSlug: "pre-kg",
    headline: "Pre-KG Complete Learning Kit (2 Books)",
    summary:
      "Includes both the full-colour core textbook and the hands-on activity workbook, delivered straight to your home upon enrollment.",
    bundleImage: preKgBundle,
    bookCount: 2,
    books: allTextbooks.filter((b) => b.programSlug === "pre-kg"),
  },
  {
    program: "LKG",
    programSlug: "lkg",
    headline: "LKG 4-Subject Curriculum Kit (4 Books)",
    summary:
      "Complete physical curriculum kit comprising English Literacy, Mathematics, EVS World Discovery, and Malayalam Language.",
    bundleImage: lkgBundle,
    bookCount: 4,
    books: allTextbooks.filter((b) => b.programSlug === "lkg"),
  },
  {
    program: "UKG",
    programSlug: "ukg",
    headline: "UKG School Readiness Kit (4 Books)",
    summary:
      "Comprehensive 4-book printed set designed to transition children smoothly into Grade 1 primary school classrooms.",
    bundleImage: ukgBundle,
    bookCount: 4,
    books: allTextbooks.filter((b) => b.programSlug === "ukg"),
  },
  {
    program: "Phonics",
    programSlug: "phonics",
    headline: "Phonics for Kids Specialized Book",
    summary:
      "The official textbook companion for the Magic Nest Phonics & Reading Mastery program.",
    bundleImage: phonicsTextbook,
    bookCount: 1,
    books: allTextbooks.filter((b) => b.programSlug === "phonics"),
  },
];

export const showcaseBundleImage = allProgramsBundle;

export function getTextbooksByProgram(slug: "pre-kg" | "lkg" | "ukg" | "phonics"): TextbookItem[] {
  return allTextbooks.filter((b) => b.programSlug === slug);
}

export function getProgramKit(slug: "pre-kg" | "lkg" | "ukg" | "phonics"): ProgramKit | undefined {
  return programKits.find((k) => k.programSlug === slug);
}
