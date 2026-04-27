"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ContactPage() {
  const toast = useToast();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    situation: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 Replace this with your API endpoint
      console.log("Form Data:", form);

      toast({
        title: "Message sent!",
        description: "We’ll get back to you shortly.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setForm({
        name: "",
        company: "",
        email: "",
        situation: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <Box bg="#f8f9fb" minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="2xl">
        <VStack spacing={10} align="stretch">
          {/* HEADER */}
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="medium"
              color="gray.700"
            >
              Let's Talk About Your <span className="line-decor">Payment</span>{" "}
              Infrastructure
            </Heading>

            <Text fontSize="14px" color="gray.600" maxW="600px">
              Not sure where to start? Book a free 30-minute discovery call and
              we will tell you exactly which product fits your situation.
            </Text>
          </VStack>

          {/* FORM CARD */}
          <Box bg="white" p={{ base: 6, md: 10 }} borderRadius="xl">
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                {/* FULL NAME */}
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    size="lg"
                  />
                </FormControl>

                {/* COMPANY */}
                <FormControl isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    size="lg"
                  />
                </FormControl>

                {/* EMAIL */}
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    size="lg"
                  />
                </FormControl>

                {/* DROPDOWN */}
                <FormControl isRequired>
                  <FormLabel>What best describes your situation?</FormLabel>
                  <Select
                    name="situation"
                    value={form.situation}
                    onChange={handleChange}
                    placeholder="Select an option"
                    size="lg"
                  >
                    <option>I have unexplained transaction failures</option>
                    <option>I want to improve success rates</option>
                    <option>I need ongoing infrastructure support</option>
                    <option>I am interested in a Playbook</option>
                    <option>Other</option>
                  </Select>
                </FormControl>

                {/* MESSAGE */}
                <FormControl>
                  <FormLabel>Message (optional)</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={5}
                  />
                </FormControl>

                {/* BUTTON */}
                <Button
                  type="submit"
                  //   width="full"
                  alignItems={{ base: "center", md: "left" }}
                  size="lg"
                  bg="primaryColor.700"
                  color="white"
                  _hover={{ bg: "primaryColor.500" }}
                  isLoading={loading}
                  borderRadius="full"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
