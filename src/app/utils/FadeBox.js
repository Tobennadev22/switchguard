"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function FadeBox({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
}
