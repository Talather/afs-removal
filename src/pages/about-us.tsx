import MaxWidthContainer from "../components/max-width-container";
import JoinToday from "../components/redesigned-components/components/join-today";
import PaddingContainer from "../components/redesigned-components/components/padding-container";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import ServiceCards from "../components/redesigned-components/components/service-cards";
import { commitmentsArr } from "../data";

import ChooseCard from "../components/redesigned-components/components/cards/choose-card";
import { Image } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <div>
      <MaxWidthContainer className="pt-10 md:pt-20 pb-20 px-10">
        <div className="text-center w-full  flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[90%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            A Reliable Way to Move, A Stress-Free Experience
          </h1>
          <p className="text-secondary-text md:max-w-[90%] font-semibold md:text-lg mb-8">
            At AFS Services Group, we believe moving should be simple,
            efficient, and hassle-free. The AFS Experience ensures your
            belongings are handled with care, from packing to final placement.
            With our professional expertise, transparent pricing, and
            eco-friendly practices, we provide a moving service you can trust—no
            surprises, no stress, just exceptional service.
            <br /> Contact AFS today to make your move seamless and worry-free.
          </p>

          <ShinyButton
            href={"/contact-us"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Get Started
          </ShinyButton>
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Why Choose Afs Removals?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ChooseCard
                title="Professional Expertise"
                description="We prioritize the safe handling of your belongings, ensuring even the most delicate items like pianos and antiques are treated with care and precision."
              />
              <ChooseCard
                title="Transparent Pricing"
                description="Our transparent pricing model ensures an honest and straightforward moving experience, with no hidden fees or surprises."
              />
              <ChooseCard
                title="Customer-Centric Approach"
                description="AFS Services Group is committed to sustainability, employing eco-friendly practices to reduce our carbon footprint and provide responsible moving solutions."
              />
            </div>
          </div>
        </section>
      </MaxWidthContainer>
      <div className="bg-[#073B4C] py-20 mb-20 text-white">
        <MaxWidthContainer>
          <div className="text-center md:max-w-[80%] mx-auto">
            <h2 className="text-5xl font-semibold text-white mb-2">
              Our Mission
            </h2>
            <p className="text-[#9ba1a6] max-w-[70%] mx-auto text-md my-6 leading-relaxed">
              Our mission is to transform everyday payments into powerful
              savings opportunities. Whether you pay 5 or 15 days early, Vuior
              rewards your forward-thinking approach.
            </p>
            <ShinyButton
              href="/create-account"
              className="w-fit mx-auto rounded-full px-7 py-2"
            >
              Join Us
            </ShinyButton>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-10 md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold mb-4">Our Journey</h2>
                <p className="text-xl mb-6">
                  With years of experience in the moving industry, AFS Services
                  Group Limited has honed its expertise in providing smooth and
                  efficient removals. Our tailored services accommodate both
                  residential and commercial needs, ensuring that every move is
                  handled with precision and care.
                </p>
                <p className="text-xl mb-6">
                  Our dedicated team consists of trained professionals who are
                  committed to delivering exceptional service. Each member
                  brings a wealth of knowledge and a passion for helping clients
                  transition seamlessly to their new spaces.
                </p>
                {/* <ShinyButton className="w-fit">Learn More About Us</ShinyButton> */}
              </div>
              <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
                <Image
                  src="/assets/brand/ourJourney.jpg"
                  alt="Our Journey"
                  width={450}
                  className="rounded-lg lg:h-[400px] h-[300px] md:object-contain lg:object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-10 md:items-center md:justify-between">
              <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
                <Image
                  src="/assets/brand/ourMission.jpg"
                  alt="Our Mission"
                  width={450}
                  className="rounded-lg lg:h-[400px] h-[300px] md:object-contain lg:object-cover shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
                <p className="text-xl mb-6">
                  At AFS Services Group Limited, our mission is to provide
                  seamless, stress-free moving solutions that exceed
                  expectations. From packing and transportation to setup in your
                  new space, we are dedicated to delivering a moving experience
                  that is efficient, transparent, and customer-focused.
                </p>
                <p className="text-xl mb-6">
                  With sustainability and precision at the core of our
                  operations, we strive to be the trusted partner for all your
                  relocation needs, ensuring a smooth journey to your next
                  chapter.
                </p>
                {/* <ShinyButton className="w-fit">Learn More About Us</ShinyButton> */}
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>

      <MaxWidthContainer className="">
        <div className="bg-[#073B4C] py-20 text-white">
          <div className="text-center px-2 md:max-w-[80%] mx-auto">
            <h2 className="text-5xl  font-semibold text-white mb-7">
              Our Commitments
            </h2>
          </div>
          <MaxWidthContainer>
            <ServiceCards
              className="lg:grid-cols-2"
              services={commitmentsArr}
            />
          </MaxWidthContainer>
        </div>
      </MaxWidthContainer>
      <PaddingContainer className=" rounded-2xl py-8 my-10 md:max-w-[60%] mx-auto">
        <h2 className="text-5xl font-semibold text-center">
          The AFS Experience
        </h2>
        <p className="text-[#9ba1a6] text-md my-6 leading-relaxed text-center">
          Is about making every move a seamless and stress-free journey. Join
          us, and let our expert team handle your relocation with care,
          precision, and a commitment to excellence—one step at a time.
        </p>
      </PaddingContainer>
      <JoinToday />
    </div>
  );
};

export default AboutPage;
