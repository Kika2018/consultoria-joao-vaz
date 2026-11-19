import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { BrandPage, siteMeta } from "@/site-v2/Site";

export const Route = createFileRoute("/insights")({
  head: () => siteMeta("/insights"),
  component: InsightsLayout,
});

function InsightsLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return pathname === "/insights" || pathname === "/insights/"
    ? <BrandPage path="/insights" />
    : <Outlet />;
}
