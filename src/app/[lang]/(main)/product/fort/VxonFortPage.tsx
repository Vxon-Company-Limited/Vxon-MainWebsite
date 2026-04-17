"use client";

import { ProductHero } from "@/components/shared/ProductHero";
import { ComingSoon } from "@/components/product/fort/ComingSoon";
import { CoreCapabilities } from "@/components/product/fort/CoreCapabilities";
import { Comparison } from "@/components/product/fort/Comparison";
import { IndustryCards } from "@/components/product/fort/IndustryCards";
import { ReservationForm } from "@/components/product/fort/ReservationForm";
import { drawShieldLayers } from "@/animations/shieldLayers";
import { t } from "@/lib/translations/site";
import { fortPage } from "@/lib/translations/product-fort";

export function VxonFortPage({ locale }: { locale: string }) {
  const p = t(fortPage, locale);

  return (
    <>
      <ProductHero
        badge={p.hero.badge}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        buttons={[
          { label: p.hero.buttons[0], href: "#demo", primary: true },
        ]}
        draw={drawShieldLayers}
      />
      <ComingSoon locale={locale} />
      <CoreCapabilities locale={locale} />
      <Comparison locale={locale} />
      <IndustryCards locale={locale} />
      <ReservationForm locale={locale} />
    </>
  );
}
