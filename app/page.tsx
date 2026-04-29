import { HeaderNav } from "@/app/components/header-nav";
import { MainVisual } from "@/app/components/main-visual";
import { ConceptSection } from "@/app/components/concept-section";
import { MenuSection } from "@/app/components/menu-section";
import { StylistSection } from "@/app/components/stylist-section";
import { AccessSection } from "@/app/components/access-section";
import { ReserveSection } from "@/app/components/reserve-section";
import { SiteFooter } from "@/app/components/site-footer";
import { WaterBackground } from "@/app/components/water-background";

export default function Home() {
  return (
    <>
      <WaterBackground />
      <div className="relative z-10">
        <HeaderNav />
        <MainVisual />
        <ConceptSection />
        <MenuSection />
        <StylistSection />
        <AccessSection />
        <ReserveSection />
        <SiteFooter />
      </div>
    </>
  );
}
