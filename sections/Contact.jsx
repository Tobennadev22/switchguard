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
import FadeBox from "../src/app/utils/FadeBox";

export default function Contact() {
  const toast = useToast();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    situation: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Inputs
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Reset Form
  const resetForm = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      situation: "",
      message: "",
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      // console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast({
        title: "Message Sent",
        description: data.message || "We’ll get back to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      resetForm();
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="#f8f9fb" minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="2xl">
        <FadeBox>
          <VStack spacing={10} align="stretch">
            {/* HEADER */}
            <VStack spacing={4} textAlign="center">
              <Heading
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="medium"
                color="gray.700"
              >
                Let's Talk About Your{" "}
                <span className="line-decor">Payment</span> Infrastructure
              </Heading>

              <Text fontSize="14px" color="gray.600" maxW="600px">
                Not sure where to start? Book a free 30-minute discovery call
                and we will tell you exactly which product fits your situation.
              </Text>
            </VStack>

            {/* FORM */}
            <Box bg="white" p={{ base: 6, md: 10 }} borderRadius="xl">
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
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

                  <Button
                    type="submit"
                    size="lg"
                    bg="primaryColor.700"
                    color="white"
                    _hover={{ bg: "primaryColor.500" }}
                    isLoading={loading}
                    loadingText="Sending..."
                    borderRadius="full"
                    w="full"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </FadeBox>
      </Container>
    </Box>
  );
}
