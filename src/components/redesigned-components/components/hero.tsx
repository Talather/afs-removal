import ShinyButton from "./shiny-button";
import { SiComma } from "react-icons/si";
import { motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {
    x: "-100%", // Start off-screen to the left
    opacity: 0, // Fully transparent
  },
  visible: {
    x: "0", // Slide to its original position
    opacity: 1, // Fully visible
  },
};
const variants2 = {
  hidden: {
    x: "100%", // Start off-screen to the left
    opacity: 0, // Fully transparent
  },
  visible: {
    x: "0", // Slide to its original position
    opacity: 1, // Fully visible
  },
};

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C7C7C7",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80%",
          opacity: "2",
          backgroundImage: "url('/assets/brand/hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="card-div"
      >
        <motion.div
          className="card-content  md:max-w-[70%]  mb-12 z-100"
          initial="hidden"
          animate="visible"
          transition={transition}
          variants={variants}
          style={{
            width: "30%",
            backgroundColor: "#fff",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 2,
          }}
        >
          <div>
            <h2
              style={{
                textTransform: "uppercase",
                fontSize: ".8rem",
                fontWeight: "bold",
              }}
              className="mb-4"
            >
              Prefix describing what your business does will be here
            </h2>
            <p
              className="font-bold"
              style={{
                fontSize: "2.2rem",
                letterSpacing: ".02rem",
                lineHeight: "2.5rem",
              }}
            >
              Reliable Moving
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: "2.2rem",
                letterSpacing: ".02rem",
                lineHeight: "2.5rem",
              }}
            >
              and Storage
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: "2.2rem",
                letterSpacing: ".02rem",
                lineHeight: "2.5rem",
              }}
            >
              Solutions
            </p>
            <p className="mt-2" style={{ fontSize: 13 }}>
              We will write a persuasive introduction for you or your company.
              This can be about your products, offerings, or simply why you
              exist.
            </p>
            <div
              className="flex mt-4"
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ShinyButton
                href="/contact-us"
                className="w-fit rounded-full px-7 py-2 "
              >
                Call to Action
              </ShinyButton>
              <p className="font-bold text-center">Call: 03337723714</p>
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          style={{
            width: "30%",
            backgroundColor: "#91DDF4",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 2,
          }}
          className="card-testimonial  md:max-w-[70%]  z-100 mt-24"
          initial="hidden"
          animate="visible"
          transition={transition}
          variants={variants2}
        >
          <div>
            <span
              style={{ color: "#0E8EB1", fontSize: 20 }}
              className="flex mb-6"
            >
              <SiComma />
              <SiComma />
            </span>
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              "We will write a testimonial from a satisfied customer. You can
              replace this with actual testimonials from your clients.
              Testimonials are a great way to inspire potential customers to
              trust you."
            </p>
            <p
              className="mt-6"
              style={{ fontSize: ".8rem", fontStyle: "italic" }}
            >
              — Testimonial Author Name
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
