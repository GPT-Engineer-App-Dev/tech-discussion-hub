import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Heading, Text, VStack, Textarea } from "@chakra-ui/react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: new Date(),
      });
      setSuccess("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxW="md" mt={8}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading mb={6} textAlign="center">Create Post</Heading>
        <form onSubmit={handleCreatePost}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            {success && <Text color="green.500">{success}</Text>}
            <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;