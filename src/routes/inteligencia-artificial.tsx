import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/inteligencia-artificial")({
  head: () => siteMeta("/inteligencia-artificial"),
  component: () => <BrandPage path="/inteligencia-artificial" />,
});
