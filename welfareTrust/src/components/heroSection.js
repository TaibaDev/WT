'use client'
import Card from "./card";
import { cardData } from "../utils/data";
import DonationCard from "./donationCard";
import Testimonial from "./testimonial";
import HomeSection from "./home";
import Sponsors from "./sponsor";

const HeroSection = () => {
  return (
    <div className="px-10 md:px-32">

      <HomeSection />
      <div className="flex flex-row flex-wrap  gap-1 border lg:mt-28 ">
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} description={card.description} count={card.count} />
        ))}
      </div>
      <Sponsors/>
      <DonationCard />
      <Testimonial />
     
    </div>
  );
};

export default HeroSection;
