import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/insights/ouvir-antes-de-propor")({
  head: () => siteMeta("/insights/ouvir-antes-de-propor"),
  component: () => <BrandPage path="/insights/ouvir-antes-de-propor" />,
});
