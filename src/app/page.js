import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@chakra-ui/react";
import Hero from "./sections/Hero";
import SwitchguardPartners from "./sections/SwitchguardPartners";
import TheProblem from "./sections/TheProblem";
import Result from "./sections/Result";
import Project from "./sections/Product";
import Final from "./sections/Final";
import WhoWeAre from "./sections/WhoWeAre";
import TrustNote from "./sections/TrustNote";
import WhoWeServe from "./sections/WhoWeServe";
import Testimonials from "./sections/Testimonials";
export default function Home() {
  return (
    <Box mx="auto">
      <Hero />
      <SwitchguardPartners />
      <TheProblem />
      <WhoWeAre />
      <WhoWeServe />
      <TrustNote />
      {/* <Testimonials /> */}
      <Project />
      <Final />
    </Box>
  );
}
