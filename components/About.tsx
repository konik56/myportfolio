"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/constext/active-section-contex";

const About = () => {
  const { setActiveSection, setColorForLite,timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView(({
    threshold: 0.75
  }));
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
      setColorForLite((num) => -num);
    }
  }, [inView, timeOfLastClick]);
  return (
    <motion.section
      ref={ref}
      className=" dark:text-white max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
function setActiveSection(arg0: string) {
  throw new Error("Function not implemented.");
}
