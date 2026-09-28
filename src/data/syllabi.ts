import preKgHero from "@/assets/pre-kg-hero.webp";
import lkgHero from "@/assets/lkg-hero.webp";
import ukgHero from "@/assets/ukg-hero.webp";

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

export type SyllabusTerm = {
  term: string;
  range: string;
  topics: string[];
};

export type SyllabusBook = {
  name: string;
  subtitle: string;
  image: string;
  tag: string;
  format: string;
  description: string;
  features: string[];
};

export type Syllabus = {
  name: string;
  ages: string;
  headline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  schedule: string;
  stats: string[];
  terms: SyllabusTerm[];
  explored: string[];
  optionalLanguages?: string[];
  bundleImage: string;
  books: SyllabusBook[];
  nextLevel?: { name: string; href: string; copy: string };
};

export const preKgSyllabus: Syllabus = {
  name: "Pre-KG",
  ages: "Ages 3-4",
  headline: "Small steps, thoughtfully sequenced.",
  summary:
    "A gentle first learning journey from early strokes and sounds to alphabet confidence, numbers to 20, and everyday awareness.",
  heroImage: preKgHero,
  heroAlt: "A Pre-KG child tracing curved lines with a crayon during a live Magic Nest class",
  schedule: "3 live classes each week",
  stats: ["2 terms", "6 months", "76 sessions", "4 assessments"],
  bundleImage: preKgBundle,
  books: [
    {
      name: "Pre-KG All-in-One Textbook",
      subtitle: "Early Concepts & Discovery",
      image: preKgTextbook,
      tag: "Core Course Book",
      format: "Full Colour Illustrated",
      description:
        "Vibrant full-colour pages introducing early letters, numbers 1-20, colours, shapes, animals, and everyday world awareness.",
      features: [
        "Large, high-contrast visual illustrations",
        "Letters Aa to Zz introduction with picture cues",
        "Numbers 1-20 with real-world object counting",
        "Everyday themes: family, fruits, vehicles, and nature",
      ],
    },
    {
      name: "Pre-KG Activity & Tracing Book",
      subtitle: "Hands-on Motor Skills & Play",
      image: preKgActivityBook,
      tag: "Activity Workbook",
      format: "Activity & Tracing",
      description:
        "Fun-filled motor-skill exercises with pre-writing line tracing, colour matching, sticker activities, and creative doodle sheets.",
      features: [
        "Pre-writing curves, zigzags, and strokes",
        "Colouring and shape-matching exercises",
        "Fine motor coordination development",
        "Interactive parent-and-child activity prompts",
      ],
    },
  ],
  terms: [
    {
      term: "Term 1",
      range: "Build familiarity",
      topics: [
        "Pre-writing lines and curves",
        "Letters Aa-Ll",
        "Counting from 1-7",
        "Size and comparison concepts",
        "Self, family, and body awareness",
        "Stories, songs, and theme days",
      ],
    },
    {
      term: "Term 2",
      range: "Connect and extend",
      topics: [
        "Letters Mm-Zz and alphabet revision",
        "Number recognition and counting to 20",
        "Position and spatial concepts",
        "Shapes and visual learning",
        "Healthy eating and food awareness",
        "Animals, colours, stories, and songs",
      ],
    },
  ],
  explored: [
    "Phonics",
    "Measurement",
    "Comparison and classification",
    "Positional concepts",
    "Animals and birds",
    "Fruits and vegetables",
    "Vehicles and transportation",
    "Healthy habits",
  ],
  nextLevel: {
    name: "LKG",
    href: "/lkg",
    copy: "Continue into stronger communication, early literacy, and number sense.",
  },
};

export const lkgSyllabus: Syllabus = {
  name: "LKG",
  ages: "Ages 4-5",
  headline: "Three terms of visible growth.",
  summary:
    "English, Maths, EVS, and Malayalam foundations grow alongside numbers, communication, creativity, and confidence — with Hindi and Arabic available as optional languages.",
  heroImage: lkgHero,
  heroAlt: "An LKG child learning letters and early counting during a live Magic Nest class",
  schedule: "3 live classes each week",
  stats: ["3 terms", "9 months", "114 sessions", "6 assessments"],
  bundleImage: lkgBundle,
  books: [
    {
      name: "LKG English & Literacy",
      subtitle: "Alphabet, Phonics & First Words",
      image: lkgEnglish,
      tag: "Language",
      format: "Full Colour Illustrated",
      description:
        "Structured literacy curriculum teaching alphabet recognition, letter formation, phonics sounds, two-letter words, and vocabulary building.",
      features: [
        "Alphabet tracing and handwriting guides",
        "Phonic sound association with every letter",
        "Sight words, action words, and early vocabulary",
        "Rhymes, story comprehension, and oral conversation",
      ],
    },
    {
      name: "LKG Mathematics",
      subtitle: "Numbers, Shapes & Logical Concepts",
      image: lkgMaths,
      tag: "Numeracy",
      format: "Full Colour Illustrated",
      description:
        "Concrete number sense from 0 to 50, spatial concepts, size comparisons, basic patterns, and simple counting games.",
      features: [
        "Numbers 0 to 50 counting and sequence writing",
        "Before, after, and between number practice",
        "Big/small, long/short, heavy/light comparisons",
        "Basic 2D shapes and geometric patterns",
      ],
    },
    {
      name: "LKG Environmental Studies (EVS)",
      subtitle: "World Awareness & Life Skills",
      image: lkgEvs,
      tag: "Discovery",
      format: "Full Colour Illustrated",
      description:
        "Interactive exploration of our body, family, community helpers, plants, animals, safety rules, and good daily habits.",
      features: [
        "Human body parts and 5 sensory organs",
        "Animals, birds, insects, and habitats",
        "Healthy habits, hygiene, and basic safety",
        "Community helpers, transport, and seasons",
      ],
    },
    {
      name: "LKG Malayalam",
      subtitle: "Foundational Mother-Tongue Learning",
      image: lkgMalayalam,
      tag: "Literacy",
      format: "Full Colour Illustrated",
      description:
        "Gentle introduction to Malayalam letters, swaraksharangal, phonetics, cultural rhymes, and bilingual conversational skills.",
      features: [
        "First Malayalam letters and clear strokes",
        "Authentic Malayalam rhymes and folklore",
        "Everyday object vocabulary in Malayalam",
        "Bilingual storytelling and oral speaking",
      ],
    },
  ],
  terms: [
    {
      term: "Term 1",
      range: "Find their voice",
      topics: [
        "English letters A-H and pre-writing strokes",
        "Early communication and self-introduction",
        "Malayalam swaraksharangal",
        "Numbers from 0-10",
        "Size, sameness, and position concepts",
        "Home, family, body, colours, and nature",
      ],
    },
    {
      term: "Term 2",
      range: "Build connections",
      topics: [
        "English letters I-R and action words",
        "Level 2 communication skills",
        "Numbers 11-20, shapes, before and after",
        "Long, short, many, few, top, and bottom",
        "Swaraksharangal, vyanjanaksharangal and songs",
        "Safety, animals, painting, cutting, and craft",
      ],
    },
    {
      term: "Term 3",
      range: "Grow in confidence",
      topics: [
        "English letters S-Z, vowels, and consonants",
        "Two-letter words and simple prepositions",
        "Numbers 21-50, missing numbers, and tens",
        "Full, empty, heavy, light, and comparison",
        "Days, months, helpers, insects, and our country",
        "Vyanjanaksharangal, stories, and songs",
      ],
    },
  ],
  explored: [
    "Phonics and handwriting",
    "Communication",
    "Malayalam",
    "Hindi (Optional)",
    "Arabic (Optional)",
    "Shapes and patterns",
    "Basic safety",
    "Art and creativity",
    "Music and movement",
    "Games and storytelling",
  ],
  optionalLanguages: ["Hindi", "Arabic"],
  nextLevel: {
    name: "UKG",
    href: "/ukg",
    copy: "See how the next level turns those foundations into school readiness.",
  },
};

export const ukgSyllabus: Syllabus = {
  name: "UKG",
  ages: "Ages 5-6",
  headline: "Ready for the next classroom.",
  summary:
    "Language, numeracy, world awareness, and independent thinking connect into a confident school-readiness journey — with Hindi and Arabic available as optional languages.",
  heroImage: ukgHero,
  heroAlt: "A UKG child reading and solving a number pattern during a live Magic Nest class",
  schedule: "4 live classes each week with daily activities",
  stats: ["3 terms", "9 months", "144 sessions", "6 assessments"],
  bundleImage: ukgBundle,
  books: [
    {
      name: "UKG English & Reading",
      subtitle: "Phonics, Sentences & Fluency",
      image: ukgEnglish,
      tag: "Language",
      format: "Full Colour Illustrated",
      description:
        "Advanced kindergarten English developing sentence reading, sight words, digraphs, simple grammar, comprehension, and expressive writing.",
      features: [
        "Three- and four-letter phonetic word blending",
        "Sentence formation, pronouns, and action words",
        "Story reading comprehension with questions",
        "Dictation, spelling practice, and creative expression",
      ],
    },
    {
      name: "UKG Mathematics",
      subtitle: "Numbers to 100, Addition & Logic",
      image: ukgMaths,
      tag: "Numeracy",
      format: "Full Colour Illustrated",
      description:
        "Complete school-readiness maths covering numbers 1-100, place value (tens and ones), single-digit addition, subtraction, time, and money.",
      features: [
        "Numbers and number names up to 100",
        "Place value: tens and units concept",
        "Single-digit addition and subtraction",
        "Introduction to time and money",
      ],
    },
    {
      name: "UKG Environmental Studies (EVS)",
      subtitle: "Science, Nature & Social Living",
      image: ukgEvs,
      tag: "Discovery",
      format: "Full Colour Illustrated",
      description:
        "Rich scientific concepts including plant life cycles, animal classifications, weather, festivals, and environment conservation.",
      features: [
        "Living vs non-living things & plant parts",
        "Water cycle, weather, and four seasons",
        "Our country, national symbols, and festivals",
        "Environmental care and healthy lifestyle",
      ],
    },
    {
      name: "UKG Malayalam",
      subtitle: "Swarangal, Vyanjanangal & Reading",
      image: ukgMalayalam,
      tag: "Literacy",
      format: "Full Colour Illustrated",
      description:
        "Complete Malayalam script readiness with swaraksharangal, chinnangal, vyanjanaksharangal, word reading, and interactive songs.",
      features: [
        "Swaraksharangal and Chinnangal mastery",
        "Vyanjanaksharangal letter identification",
        "Word building and simple sentence reading",
        "Traditional rhymes, stories, and cultural dialogues",
      ],
    },
  ],
  terms: [
    {
      term: "Term 1",
      range: "Strengthen foundations",
      topics: [
        "Alphabet and phonics revision with rhyming words",
        "Basic communication and bilingual storytelling",
        "Malayalam swaraksharangal and chinnangal",
        "Numbers and counting from 1-25",
        "Shapes, patterns, and number sequences",
        "Family, body, living things, and community",
      ],
    },
    {
      term: "Term 2",
      range: "Build understanding",
      topics: [
        "Grammar, word building, and spatial concepts",
        "Communication, stories, and songs in two languages",
        "Malayalam chinnangal and vyanjanaksharangal",
        "Number revision from 1-50",
        "Place value, tens and ones, and addition",
        "Measurement, culture, sport, health, and transport",
      ],
    },
    {
      term: "Term 3",
      range: "Prepare for school",
      topics: [
        "Phonics, word building, and sentence structure",
        "Action words, pronouns, and conversation",
        "Malayalam letters, symbols, stories, and songs",
        "Number revision from 51-100",
        "Addition, subtraction, patterns, and logic",
        "Time, money, nature, festivals, music, and art",
      ],
    },
  ],
  explored: [
    "Phonics and grammar",
    "English and Malayalam communication",
    "Hindi (Optional)",
    "Arabic (Optional)",
    "Numbers to 100",
    "Place value",
    "Addition and subtraction",
    "Logical patterns",
    "Time and money",
    "Nature, culture, sport, and the arts",
  ],
  optionalLanguages: ["Hindi", "Arabic"],
};
