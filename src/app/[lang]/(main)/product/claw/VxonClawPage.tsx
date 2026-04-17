"use client";

import { ProductHero } from "@/components/shared/ProductHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { PricingPreview } from "@/components/shared/PricingPreview";
import { ProductCTA } from "@/components/shared/ProductCTA";
import { BeforeAfter } from "@/components/product/claw/BeforeAfter";
import { DepartmentCoverage } from "@/components/product/claw/DepartmentCoverage";
import { IntegrationLogos } from "@/components/product/claw/IntegrationLogos";
import { drawConnectedNodes } from "@/animations/connectedNodes";
import { t } from "@/lib/translations/site";
import { clawPage } from "@/lib/translations/product-claw";
import { BarChart3, Users, FileCheck, Wallet, Cog, TrendingUp } from "lucide-react";

const featureIcons = [BarChart3, Users, FileCheck, Wallet, Cog, TrendingUp];

export function VxonClawPage({ locale }: { locale: string }) {
  const p = t(clawPage, locale);

  const features = p.features.map((f, i) => ({
    icon: featureIcons[i],
    title: f.title,
    description: f.description,
  }));

  const pricingPlans = p.pricingPlans.map((plan, i) => ({
    name: plan.name,
    price: plan.price,
    description: plan.description,
    features: [...plan.features],
    cta: plan.cta,
    ctaHref: i === 2 ? "#contact" : "#signup",
    ...(i === 1 ? { highlight: true, badge: 'badge' in plan ? (plan as { badge: string }).badge : undefined } : {}),
  }));

  return (
    <>
      <ProductHero
        badge={p.hero.badge}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        buttons={[
          { label: p.hero.buttons[0], href: "#signup", primary: true },
          { label: p.hero.buttons[1], href: "#demo" },
        ]}
        draw={drawConnectedNodes}
      />
      <BeforeAfter locale={locale} />
      <FeatureGrid
        badge={p.featureGrid.badge}
        title={p.featureGrid.title}
        description={p.featureGrid.description}
        features={features}
      />
      <DepartmentCoverage locale={locale} />
      <IntegrationLogos locale={locale} />
      <PricingPreview
        badge={p.pricingPreview.badge}
        title={p.pricingPreview.title}
        plans={pricingPlans}
      />
      <ProductCTA
        title={p.productCTA.title}
        subtitle={p.productCTA.subtitle}
        primaryLabel={p.productCTA.primaryLabel}
        primaryHref="#signup"
        secondaryLabel={p.productCTA.secondaryLabel}
        secondaryHref="#demo"
      />
    </>
  );
}
