// import React from "react";
import ShinyButton from "./shiny-button";
import { SiComma } from "react-icons/si";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "93vh",
        overflow: "hidden",
        backgroundColor: "#C7C7C7",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 15,
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
      >
        <div
          style={{
            width: "30%",
            transform: "translateY(-20%)",
            backgroundColor: "#fff",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              textTransform: "uppercase",
              fontSize: 12,
              fontWeight: "bold",
            }}
            className="mb-4"
          >
            Prefix describing what your business does will be here
          </h2>
          <p
            className="font-bold"
            style={{
              fontSize: 38,
              letterSpacing: ".02rem",
              lineHeight: "2.5rem",
            }}
          >
            Reliable Moving
          </p>
          <p
            className="font-bold"
            style={{
              fontSize: 38,
              letterSpacing: ".02rem",
              lineHeight: "2.5rem",
            }}
          >
            and Storage
          </p>
          <p
            className="font-bold"
            style={{
              fontSize: 38,
              letterSpacing: ".02rem",

              lineHeight: "2.5rem",
            }}
          >
            Solutions
          </p>
          <p className="mt-2" style={{ fontSize: 13 }}>
            We will write a persuasive introduction for you or your company.
            This can be about your products, offerings, or simply why you exist.
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

        {/* Right Card */}
        <div
          style={{
            width: "30%",
            transform: "translateY(20%)",
            backgroundColor: "#91DDF4",
            padding: "2.5rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 2,
          }}
        >
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
            Testimonials are a great way to inspire potential customers to trust
            you."
          </p>
          <p
            className="mt-6"
            style={{ fontSize: ".8rem", fontStyle: "italic" }}
          >
            — Testimonial Author Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
