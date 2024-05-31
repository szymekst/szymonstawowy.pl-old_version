//Import components
import TitleSection from "@components/TitleSection";
import Image from "next/image";

import computerImage from "@assets/img/computer.jpg";

export default function Home() {
    return (
        <div className="dark:bg-black-200">
            <TitleSection title="Home" />
            <div className="container text-black-200 dark:text-white flex flex-col gap-2 md:gap-4">
                <h2>
                    Cześć, jestem Szymek!{" "}
                    <span className="animate-[wave_2.5s_linear_infinite] origin-[70%_70%] inline-block">
                        👋
                    </span>
                </h2>
                {/* <Image
                    src={computerImage}
                    width={1360}
                    height={560}
                    alt="Laptop with code"
                    className="max-h-[360px] md:max-h-[420px] lg:max-h-[560px] w-full h-full object-cover"
                /> */}

                <div>
                    <div>
                        <p>
                            Programowanie to moje głowna pasja, którą rozwijam
                            hobbystycznie, poszerzając swoje umiejętności i
                            zdobywając cenne doświadczenie. W wolnym czasie
                            oddaję się bieganiu, które pozwala mi zbudować dobrą
                            kondycję fizyczną i wyciszyć umysł po dniu pełnym
                            wyzwać i obowiązków, a także sporo czytam, co
                            nieustannie poszerza moje horyzonty i inspiruje do
                            dalszego rozwoju.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
