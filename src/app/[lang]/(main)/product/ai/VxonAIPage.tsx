"use client";

import { ProductHero } from "@/components/shared/ProductHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { ProductCTA } from "@/components/shared/ProductCTA";
import { ValueProps } from "@/components/product/ai/ValueProps";
import { ArchitectureDiagram } from "@/components/product/ai/ArchitectureDiagram";
import { UseCases } from "@/components/product/ai/UseCases";
import { PricingConsultation } from "@/components/product/ai/PricingConsultation";
import { drawConcentricRings } from "@/animations/concentricRings";
import { Server, Users, ShieldOff, Plug, Code2, FileSearch } from "lucide-react";
import { t } from "@/lib/translations/site";
import { aiPage } from "@/lib/translations/product-ai";

const featureIcons = [Server, Users, ShieldOff, Plug, Code2, FileSearch];

export function VxonAIPage({ locale }: { locale: string }) {
  const tx = t(aiPage, locale);
  const features = tx.features.map((f, i) => ({
    icon: featureIcons[i],
    title: f.title,
    description: f.description,
  }));

  return (
    <>
      <ProductHero
        badge={tx.hero.badge}
        title={tx.hero.title}
        subtitle={tx.hero.subtitle}
        buttons={[
          { label: tx.hero.buttons[0], href: "#demo", primary: true },
          { label: tx.hero.buttons[1], href: "#pricing" },
        ]}
        draw={drawConcentricRings}
        accentColor="emerald"
      />
      <ValueProps locale={locale} />
      <FeatureGrid
        badge={tx.featureGrid.badge}
        title={tx.featureGrid.title}
        description={tx.featureGrid.description}
        features={features}
        accentColor="emerald"
      />
      <ArchitectureDiagram locale={locale} />
      <UseCases locale={locale} />
      <PricingConsultation locale={locale} />
      <ProductCTA
        title={tx.productCTA.title}
        subtitle={tx.productCTA.subtitle}
        primaryLabel={tx.productCTA.primaryLabel}
        primaryHref="#demo"
        secondaryLabel={tx.productCTA.secondaryLabel}
        secondaryHref="#whitepaper"
      />
    </>
  );
}
