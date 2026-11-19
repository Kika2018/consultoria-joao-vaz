import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/insights/formacao-da-teoria-a-pratica")({
  head: () => siteMeta("/insights/formacao-da-teoria-a-pratica"),
  component: () => <BrandPage path="/insights/formacao-da-teoria-a-pratica" />,
});
