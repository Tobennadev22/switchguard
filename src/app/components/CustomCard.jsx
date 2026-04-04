import { Box, Text } from "@chakra-ui/react";

function CustomCard({ title, description }) {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Box>
  );
}

export default CustomCard;
