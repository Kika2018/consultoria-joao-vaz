import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/insights/empreender-reduzir-incerteza")({
  head: () => siteMeta("/insights/empreender-reduzir-incerteza"),
  component: () => <BrandPage path="/insights/empreender-reduzir-incerteza" />,
});
