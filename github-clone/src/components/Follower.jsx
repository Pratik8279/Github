import React, { useEffect, useState } from "react";
import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function Follower({ data }) {
  const [people, setPeople] = useState([]);
  let url = data[0]?.owner?.followers_url;
  const navigate= useNavigate()
  const get_data = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_data();
  }, []);
  return (
    <div>
      {people.map((ele) => (
        <Box key={ele.login}>
          <Link href={ele.html_url}>
            <Flex
              w="400px"
              m="auto"
              mt="20px"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>{ele.login}</Text>
              <Img w="100px" src={ele.avatar_url} />
            </Flex>
          </Link>
        </Box>
      ))}
     <Button onClick= {() => navigate("/")} colorScheme='blue'>Back</Button>
    </div>
  );
}

export default Follower;
