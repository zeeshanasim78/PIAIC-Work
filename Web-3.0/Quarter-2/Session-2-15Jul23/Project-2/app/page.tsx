import Image from "next/image";
import Hero from "./components/Hero";
import Promotions from "./components/Promotions";
import Carousel from "./components/Carousel";

export const generateMetadata = () => {
  return {
    title: "Dine Market | Home",
  };
};

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Carousel />
      {/* Carousel  */}
    </>
  );
}
