import { createFileRoute } from "@tanstack/react-router";
import { SyllabusPage } from "@/components/site/syllabus-page";
import { preKgSyllabus } from "@/data/syllabi";

export const Route = createFileRoute("/pre-kg")({
  head: () => ({
    meta: [
      { title: "Pre-KG Syllabus | Magic Nest" },
      {
        name: "description",
        content:
          "Explore the Magic Nest Pre-KG syllabus for ages 3-4, with 76 live sessions across two playful learning terms.",
      },
    ],
  }),
  component: () => <SyllabusPage syllabus={preKgSyllabus} />,
});
