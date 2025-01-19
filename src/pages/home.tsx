import { Image } from "@nextui-org/react";
import MaxWidthContainer from "../components/max-width-container";
import Benefits from "../components/redesigned-components/components/benefits";
import Hero from "../components/redesigned-components/components/hero";
import ServiceCards from "../components/redesigned-components/components/service-cards";
import JoinToday from "../components/redesigned-components/components/join-today";
import FAQs from "../components/redesigned-components/components/faqs";
import { reactNow } from "../data";
import ShinyButton from "../components/redesigned-components/components/shiny-button";

const HomePage = () => {
  return (
    <div>
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>
      <div className="bg-[#073B4C] py-20 text-white">
        <MaxWidthContainer>
          <div className="text-center px-2 md:max-w-[80%] mx-auto">
            <h2 className="text-5xl font-semibold text-white mb-2">
              Making Your Move Effortless!
            </h2>
            <p className="text-[#9ba1a6] font-bold text-md my-6 leading-relaxed">
              Relocating can be stressful, but AFS Services Group Limited turns
              every move into a seamless experience. We take the hassle out of
              moving, empowering you to focus on new beginnings while we handle
              the rest with care and precision.
            </p>
          </div>

          <h2 className="text-4xl mt-20 text-center font-semibold text-white mb-2">
            Why Choose Afs Removals?
          </h2>
          <ServiceCards services={reactNow} />

          <div className="text-center px-2 md:max-w-[80%] mx-auto">
            <p className="text-[#9ba1a6] font-bold text-md my-6 leading-relaxed">
              AFS Services Group Limited was established with a passion for
              providing exceptional moving services. Our dedicated team strives
              to make every relocation smooth and efficient.
            </p>
            <ShinyButton
              href="/contact-us"
              className="w-fit mx-auto rounded-full px-7 py-2"
            >
              Get Started
            </ShinyButton>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer className="p-4 px-4 md:px-10">
        <div className="flex flex-col items-center justify-center md:flex-row my-20 gap-10">
          <div className="md:max-w-[50%] md:hidden lg:block ">
            <Image className="w-full h-[300px]" src="/assets/brand/start.png" />
          </div>
          <Benefits
            hideList
            heading="Start Your Stress-Free Move with AFS Today!
"
            content={`Experience a seamless relocation with AFS Services Group Limited. Our expert team makes moving easy, efficient, and tailored to your needs. From packing to setup, we handle it all with care and precision. With transparent pricing and no hidden fees, you can trust us to make your move hassle-free. Contact AFS today and take the first step towards your smooth and stress-free relocation!
`}
          />
        </div>
      </MaxWidthContainer>
      <JoinToday />
      <div className="w-full ">
        <MaxWidthContainer className="">
          <FAQs />
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default HomePage;
