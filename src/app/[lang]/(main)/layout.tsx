import { BackgroundGrid } from "@/components/shared/BackgroundGrid";
import { ParticleField } from "@/components/shared/ParticleField";
import { GlobalEffects } from "@/components/shared/GlobalEffects";
import { ZenBackground } from "@/components/zen/ZenBackground";
import { ZenAtmosphere } from "@/components/zen/ZenAtmosphere";

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
      <ZenAtmosphere />
      {children}
    </>
  );
}
