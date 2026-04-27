import { Box, Button, Text, Link } from "@chakra-ui/react";
import HeroWhoWeAre from "../sections/HeroWhoWeAre";
import CoreValues from "../sections/CoreValues";

export default function Home() {
  return (
    <Box>
      <HeroWhoWeAre />
      <CoreValues />
    </Box>
  );
}
