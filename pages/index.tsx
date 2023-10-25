import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Homepage from "@/components/Home";
import Content from "@/components/Content";
import Completed from "@/components/Completed";
import Blog from "@/components/Blog";
import Contributors from "@/components/Contributors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import ja from "@/components/locale/ja";
import en from "@/components/locale/en";
import vn from "@/components/locale/vn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [t, setT] = useState(en);
  const changeLanguage = (e) => {
    setLanguage(e);
    if (e === "ja") {
      setT(ja);
    } else {
      if (e === "en") {
        setT(en);
      } else {
        setT(vn);
      }
    }
  };
  return (
    <div className="bg-white">
      <Header language={language} setLanguage={changeLanguage} t={t} />
      <Homepage />
      <Content />
      <Completed />
      <Blog />
      <Contributors />
      <Contact />
      <Footer />
    </div>
  );
}
