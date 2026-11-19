import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/insights/ia-primeiros-passos")({
  head: () => siteMeta("/insights/ia-primeiros-passos"),
  component: () => <BrandPage path="/insights/ia-primeiros-passos" />,
});
