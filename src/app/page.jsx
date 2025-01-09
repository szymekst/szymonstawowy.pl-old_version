import { metadata } from "./layout";
import PortfolioSection from "@components/PortfolioSection";
import SkillSection from "@components/SkillsSection";
import HeroSection from "@components/HeroSection";
import AboutMeSection from "@components/AboutMeSection";

export async function generateMetadata() {
    return {
        title: `${"Strona główna" + " | " + metadata.title}`,
    };
}

export default function Home() {
    return (
        <>
            <div className="dark:bg-black-200">
                {/* Hero section */}
                <HeroSection />

                {/* Skill-set section */}
                <SkillSection />

                {/* About me section */}
                <AboutMeSection />
            </div>
            <div className="bg-black-200 text-white relative z-10">
                {/* Portofio section */}
                <PortfolioSection />
            </div>
        </>
    );
}
