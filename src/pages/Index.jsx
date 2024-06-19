import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaLaptopCode, FaDatabase, FaCloud, FaMobileAlt } from "react-icons/fa";

const NavBar = () => (
  <Flex as="nav" bg="brand.700" color="white" padding={4} justifyContent="space-between" alignItems="center">
    <Heading size="md">Tech Forum</Heading>
    <HStack spacing={4}>
      <Link as={RouterLink} to="/" display="flex" alignItems="center">
        <FaHome />
        <Text ml={2}>Home</Text>
      </Link>
      <Link as={RouterLink} to="/register" display="flex" alignItems="center">
        <Text ml={2}>Register</Text>
      </Link>
      <Link as={RouterLink} to="/create-post" display="flex" alignItems="center">
        <Text ml={2}>Create Post</Text>
      </Link>
      <Link href="#database" display="flex" alignItems="center">
        <FaDatabase />
        <Text ml={2}>Database</Text>
      </Link>
      <Link href="#cloud" display="flex" alignItems="center">
        <FaCloud />
        <Text ml={2}>Cloud Computing</Text>
      </Link>
      <Link href="#mobile" display="flex" alignItems="center">
        <FaMobileAlt />
        <Text ml={2}>Mobile Development</Text>
      </Link>
    </HStack>
  </Flex>
);

const Footer = () => (
  <Box as="footer" bg="brand.700" color="white" padding={4} textAlign="center">
    <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
  </Box>
);

const Section = ({ id, title, children }) => (
  <Box id={id} padding={4}>
    <Heading size="lg" mb={4}>{title}</Heading>
    {children}
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl">
      <NavBar />
      <VStack spacing={8} mt={8}>
        <Section id="home" title="Welcome to Tech Forum">
          <Text>Discuss the latest in technology, share knowledge, and connect with other tech enthusiasts.</Text>
        </Section>
        <Divider />
        <Section id="webdev" title="Web Development">
          <Text>Topics related to HTML, CSS, JavaScript, frameworks, and more.</Text>
        </Section>
        <Divider />
        <Section id="database" title="Database">
          <Text>Discuss database design, SQL, NoSQL, and related technologies.</Text>
        </Section>
        <Divider />
        <Section id="cloud" title="Cloud Computing">
          <Text>Topics on cloud services, architecture, and best practices.</Text>
        </Section>
        <Divider />
        <Section id="mobile" title="Mobile Development">
          <Text>Discuss mobile app development for iOS, Android, and other platforms.</Text>
        </Section>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;