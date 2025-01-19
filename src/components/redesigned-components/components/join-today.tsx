import MaxWidthContainer from "../../max-width-container";
import ShinyButton from "./shiny-button";

const JoinToday = ({
  title = "Ready to Move?",
  content = "Contact us today to explore how we can make your relocation experience seamless and stress-free.",
}: {
  title?: string;
  content?: string;
}) => {
  return (
    <div className="bg-[#073B4C] py-20 text-white">
      <MaxWidthContainer>
        <div className="text-center md:max-w-[80%] mx-auto">
          <h2 className="text-5xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-[#9ba1a6] text-md my-6 leading-relaxed">
            {content}
          </p>
          <ShinyButton
            href="/contact-us"
            className="w-fit mx-auto rounded-full px-7 py-2"
          >
            Get Quote
          </ShinyButton>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default JoinToday;
