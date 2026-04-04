import { Box, Text, Flex } from "@chakra-ui/react";
import { FeaturesData } from "../data/data";

import CustomCard from "../components/CustomCard";

function Features() {
  return (
    <Box>
      <Flex>
        <Text>Features</Text>
        {FeaturesData.map((feature, index) => (
          <CustomCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default Features;
