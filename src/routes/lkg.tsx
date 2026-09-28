import { createFileRoute } from "@tanstack/react-router";
import { SyllabusPage } from "@/components/site/syllabus-page";
import { lkgSyllabus } from "@/data/syllabi";

export const Route = createFileRoute("/lkg")({
  head: () => ({
    meta: [
      { title: "LKG Syllabus | Magic Nest" },
      {
        name: "description",
        content:
          "Explore the Magic Nest LKG syllabus for ages 4-5, with 114 live sessions across three confidence-building terms.",
      },
    ],
  }),
  component: () => <SyllabusPage syllabus={lkgSyllabus} />,
});
