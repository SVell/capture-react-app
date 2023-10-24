import React from "react";
import AboutSection from "../components/AboutSection";
import SevicesSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <SevicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
