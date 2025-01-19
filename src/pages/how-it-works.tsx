import MaxWidthContainer from "../components/max-width-container";
import JoinToday from "../components/redesigned-components/components/join-today";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import { FeatureSection } from "../components/redesigned-components/components/cards/feature-card";

const HowItWorks = () => {
  return (
    <div className=" md:pt-14">
      <MaxWidthContainer className="pt-10 pb-20 px-3 md:px-10">
        <div className="text-center w-full  flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            Services
          </h1>
          <p className="text-secondary-text md:max-w-[70%] font-bold md:text-lg mb-8">
            AFS is the heartbeat of seamless relocations, where every step you
            take toward your move is handled with precision and care. It’s
            simple, efficient, and designed to make your transition stress-free.
            Here's how we make it happen.
          </p>
          {/* <ShinyButton
            href={"/consultation"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Start
Saving Now
          </ShinyButton> */}
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer className="">
        <FeatureSection
          title="Residential Removals"
          description="Our residential removals service is tailored to meet the unique needs of homeowners. We handle every aspect, from packing your belongings with care to unpacking them in your new home, allowing you to focus on settling in comfortably."
          imageSrc="assets/brand/service1.jpeg"
          imageAlt="Join for Free"
          className="bg-muted"
        />
        <FeatureSection
          title="Commercial Relocations"
          description="AFS Services Group Limited provides comprehensive commercial relocation services designed to minimise downtime and disruption. Our team manages everything from office furniture to sensitive equipment, ensuring a seamless transition that keeps your business running smoothly."
          imageSrc="assets/brand/service2.jpeg"
          imageAlt="Add Bills"
          buttonHref="#"
          imagePosition="left"
          className="bg-background"
        />

        <FeatureSection
          title="Packing and Unpacking"
          description="Our professional packing and unpacking services ensure that your items are securely wrapped and ready for transport. We use high-quality materials and techniques to safeguard fragile and valuable possessions, giving you peace of mind throughout the moving process."
          imageSrc="assets/brand/service3.jpeg"
          imageAlt="Pay Early"
          buttonHref="#"
          className="bg-muted"
        />

        <FeatureSection
          title="Secure Storage Solutions"
          description="AFS offers secure and flexible storage options for your belongings. Our facilities are equipped with the latest security features, providing a safe haven for your items whether you need short-term or long-term storage solutions."
          imageSrc="assets/brand/service4.jpeg"
          imageAlt="Alerts"
          buttonHref="#"
          imagePosition="left"
        />
      </MaxWidthContainer>

      <MaxWidthContainer className="py-28 px-10">
        <h3 className="text-button-gpt text-xl w-full text-center mb-4 font-semibold">
          Experience a Seamless Move
        </h3>
        <div className="text-center w-full flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            AFS is built on trust and expertise.
          </h1>
          <p className="text-secondary-text md:max-w-[70%] font-bold md:text-lg mb-8">
            At AFS, it's all about providing a stress-free experience. Act today
            with AFS and let us handle the heavy lifting for you! The sooner you
            plan, the smoother your move. Now is the time to RELAX, MOVE, and
            ENJOY your seamless transition with AFS.
          </p>
          <ShinyButton
            href={"/consultation"}
            className="relative w-fit px-16 z-10 h-14 shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Get Started
          </ShinyButton>
        </div>
      </MaxWidthContainer>
      <JoinToday />
    </div>
  );
};

export default HowItWorks;
