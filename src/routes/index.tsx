import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/")({
  head: () => siteMeta("/"),
  component: () => <BrandPage path="/" />,
});
