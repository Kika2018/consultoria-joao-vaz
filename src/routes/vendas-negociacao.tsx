import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/vendas-negociacao")({
  head: () => siteMeta("/vendas-negociacao"),
  component: () => <BrandPage path="/vendas-negociacao" />,
});
