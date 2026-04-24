"use client";

import { ProductHero } from "@/components/shared/ProductHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { PricingPreview } from "@/components/shared/PricingPreview";
import { ProductCTA } from "@/components/shared/ProductCTA";
import { SupportedModels } from "@/components/product/api/SupportedModels";
import { GettingStarted } from "@/components/product/api/GettingStarted";
import { drawApiConvergence } from "@/animations/apiConvergence";
import { Layers, Wallet, Zap, Signal, ArrowLeftRight, FileText, Globe, Clock, Users } from "lucide-react";
import { t } from "@/lib/translations/site";
import { apiPage } from "@/lib/translations/product-api";

const featureIcons = [Layers, Wallet, Zap, Signal, ArrowLeftRight, FileText];
const statIcons = [Globe, Wallet, Clock, Users];

export function VxonAPIPage({ locale }: { locale: string }) {
  const s = t(apiPage, locale);

  const apiStats = s.heroStats.map((stat, i) => ({
    icon: statIcons[i],
    value: stat.value,
    label: stat.label,
  }));

  const features = s.features.map((f, i) => ({
    icon: featureIcons[i],
    title: f.title,
    description: f.description,
  }));

  const pricingPlans = s.pricingPlans.map((p) => ({
    name: p.name,
    price: p.price,
    description: p.description,
    features: [...p.features],
    cta: p.cta,
    ctaHref: p.name === s.pricingPlans[2].name ? "#contact" : "#signup",
    ...("badge" in p && p.badge ? { highlight: true, badge: p.badge } : {}),
  }));

  return (
    <>
      <ProductHero
        badge={s.hero.badge}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
        buttons={[
          { label: s.hero.buttons[0], href: "#signup", primary: true },
          { label: s.hero.buttons[1], href: "#pricing" },
        ]}
        draw={drawApiConvergence}
        stats={apiStats}
      />
      <FeatureGrid
        badge={s.featureGrid.badge}
        title={s.featureGrid.title}
        description={s.featureGrid.description}
        features={features}
      />
      <SupportedModels locale={locale} />
      <PricingPreview
        badge={s.pricingPreview.badge}
        title={s.pricingPreview.title}
        description={s.pricingPreview.description}
        plans={pricingPlans}
      />
      <GettingStarted locale={locale} />
      <ProductCTA
        title={s.productCTA.title}
        subtitle={s.productCTA.subtitle}
        primaryLabel={s.productCTA.primaryLabel}
        primaryHref="#signup"
      />
    </>
  );
}
