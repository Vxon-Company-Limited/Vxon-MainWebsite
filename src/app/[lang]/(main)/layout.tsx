import { BackgroundGrid } from "@/components/shared/BackgroundGrid";
import { ParticleField } from "@/components/shared/ParticleField";
import { GlobalEffects } from "@/components/shared/GlobalEffects";
import { ZenBackground } from "@/components/zen/ZenBackground";
import { ZenAtmosphere } from "@/components/zen/ZenAtmosphere";
import { DarkAtmosphere } from "@/components/dark/DarkAtmosphere";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ZenBackground />
      <BackgroundGrid />
      <ParticleField />
      <GlobalEffects />
      <DarkAtmosphere />
      <ZenAtmosphere />
      {children}
    </>
  );
}
