import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@chakra-ui/react";
import Hero from "./sections/Hero";
import CoreValues from "./sections/CoreValues";
import SwitchguardPartners from "./sections/SwitchguardPartners";
import TheProblem from "./sections/TheProblem";
import Services from "./sections/Services";
import Result from "./sections/Result";
import Project from "./sections/Project";
import Final from "./sections/Final";
export default function Home() {
  return (
    <Box>
      <Hero />
      <SwitchguardPartners />
      <CoreValues />
      <TheProblem />
      <Services />
      <Result />
      <Project />
      <Final />
    </Box>
  );
}
