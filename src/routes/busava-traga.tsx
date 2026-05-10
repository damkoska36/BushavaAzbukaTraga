import { createFileRoute } from "@tanstack/react-router";
import { BusavaTragaPage } from "@/components/BusavaTragaPage";

export const Route = createFileRoute("/busava-traga")({
  head: () => ({
    meta: [
      { title: "Бушава Трага | Бушава Азбука" },
      {
        name: "description",
        content: "Следи ја трагата и научи да пишуваш букви со новата игра Бушава Трага.",
      },
    ],
  }),
  component: BusavaTragaRoute,
});

function BusavaTragaRoute() {
  return <BusavaTragaPage />;
}
