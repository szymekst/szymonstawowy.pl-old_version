//Import React and NextJS Stuff
import { Inter } from "next/font/google";

//Import CSS
import "@/assets/styles/globals.css";

//Import components
import Header from "@components/Header";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "szymonstawowy.pl",
    description: "Junior Frontend Developer, zapraszam, rozejrzyj się!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
