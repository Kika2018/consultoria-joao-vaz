import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/comunicacao-lideranca")({
  head: () => siteMeta("/comunicacao-lideranca"),
  component: () => <BrandPage path="/comunicacao-lideranca" />,
});
