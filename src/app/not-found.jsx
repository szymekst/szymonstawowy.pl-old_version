//Import React and NextJS Stuff
import Link from "next/link";

//Import components
import TitleSection from "@components/TitleSection";

const notFound = () => {
    return (
        <div className="dark:bg-black-200 ">
            <TitleSection title="404" />
            <div className="container flex justify-center">
                <Link href="/" className="dark:text-white">
                    Strona główna
                </Link>
            </div>
        </div>
    );
};

export default notFound;
