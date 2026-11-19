import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/empreendedorismo")({
  head: () => siteMeta("/empreendedorismo"),
  component: () => <BrandPage path="/empreendedorismo" />,
});
