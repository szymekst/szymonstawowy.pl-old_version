//Import React, NextJS and other Stuff
import { Inter } from "next/font/google";

//Import CSS
import "@/assets/styles/globals.css";

//Import components and context
import Header from "@components/Header";
import Footer from "@components/Footer";
import { AOSProvider } from "@/context/AOSProvider";

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
                <AOSProvider>{children}</AOSProvider>
                <Footer />
            </body>
        </html>
    );
}
