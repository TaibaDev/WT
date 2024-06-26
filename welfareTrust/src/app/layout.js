import { Inter, Roboto, Lora } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/topHeader";
import PracticeNavbar from "@/components/practiceNavbar";
import RightDrawer from "@/components/rightDrawer";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: "300" });
const lora = Lora({ subsets: ['latin', 'cyrillic'], weight: "400" });

export const metadata = {
  title: "WCA",
  description: "Generated by create next app",
};
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />


export default function RootLayout({ children }) {


  return (

    <html lang="en">
      <body className={lora.className}>
        <TopHeader />
        <PracticeNavbar />
        <RightDrawer />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
