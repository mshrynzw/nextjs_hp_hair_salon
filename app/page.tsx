import { HeaderNav } from "@/app/components/header-nav";
import { MainVisual } from "@/app/components/main-visual";
import { ConceptSection } from "@/app/components/concept-section";
import { MenuSection } from "@/app/components/menu-section";
import { StylistSection } from "@/app/components/stylist-section";
import { AccessSection } from "@/app/components/access-section";
import { ReserveSection } from "@/app/components/reserve-section";
import { SiteFooter } from "@/app/components/site-footer";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <MainVisual />
      <ConceptSection />
      <MenuSection />
      <StylistSection />
      <AccessSection />
      <ReserveSection />
      <SiteFooter />
    </>
  );
}
