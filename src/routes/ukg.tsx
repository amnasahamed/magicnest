import { createFileRoute } from "@tanstack/react-router";
import { SyllabusPage } from "@/components/site/syllabus-page";
import { ukgSyllabus } from "@/data/syllabi";

export const Route = createFileRoute("/ukg")({
  head: () => ({
    meta: [
      { title: "UKG Syllabus | Magic Nest" },
      {
        name: "description",
        content:
          "Explore the Magic Nest UKG syllabus for ages 5-6, with 144 live sessions designed for confident school readiness.",
      },
    ],
  }),
  component: () => <SyllabusPage syllabus={ukgSyllabus} />,
});
