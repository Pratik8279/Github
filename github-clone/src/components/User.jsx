import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

function User({ name, img }) {
  const navigate = useNavigate();
  return (
    <Flex
      bg={"lavender"}
      w="500px"
      m="1rem auto"
      alignItems={"center"}
      p="1rem"
      justifyContent={"space-between"}
    >
      <Text fontSize={"1.35rem"}>Username: {name}</Text>
      <Button
        bg={"Orange"}
        onClick={() => {
          navigate("/follower");
        }}
      >
        Followers
      </Button>

      <Box>
        <Img w="100px" src={img} />
      </Box>
    </Flex>
  );
}

export default User;
