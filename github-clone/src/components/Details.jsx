import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from "./Details.Module.css"

function Details({ data }) {
  const { id } = useParams();
 const navigate= useNavigate()
  let repo;

  data?.forEach((ele) => {
    if (ele.id === +id) {
      repo = ele;
    }
  });

  return (
    <div>
      <Text fontSize={"2rem"} textAlign="center" mb="2rem">
        Description
      </Text>
      {repo && (
        <Flex
          gap={"25px"}
          flexDirection={"column"}
          alignItems="center"
          w="400px"
          m="auto"
        >
          <Text>Name : {repo.name}</Text>
          <Text>Created At :{repo.created_at}</Text>
          <Text>Description : {repo.description}</Text>
          <Text>Language Used : {repo.language || "Javascipt"}</Text>
          <Text>Topics : {repo.topics.join(" ,")}</Text>
          <Text>Website URL : {repo.homepage}</Text>
        </Flex>
      )}
      <Button marginTop={'30px'} onClick= {() => navigate("/")} colorScheme='blue'>Back</Button>

    </div>
  );
}

export default Details;
