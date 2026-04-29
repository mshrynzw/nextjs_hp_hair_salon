import { HeaderNav } from "./components/header-nav";
import { MainVisual } from "./components/main-visual";
import { ConceptSection } from "./components/concept-section";
import { MenuSection } from "./components/menu-section";
import { StylistSection } from "./components/stylist-section";
import { AccessSection } from "./components/access-section";
import { ReserveSection } from "./components/reserve-section";
import { SiteFooter } from "./components/site-footer";

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
