import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Img, Text } from "@chakra-ui/react";

function Details({data}) {
    const {id} = useParams()

    let repo;

    data?.forEach((ele) => {
      if (ele.id === +id) {
        repo = ele;
      }
    });
  
    console.log(repo);
  return (
    <div>
              <Text fontSize={'2rem'} textAlign='center' mb='2rem'>Description</Text>
      {repo && (
        <Flex gap={'25px'} flexDirection={'column'} alignItems='center' w='400px' m='auto'>
          <Text>Name : {repo.name}</Text>
          <Text>Created At :{repo.created_at}</Text>
          <Text>Language Used :  {repo.language || "Javascipt"}</Text>
          {/* <Img w='100px' src={repo.owner.avatar_url}/> */}
        </Flex>
       
      )}
    </div>
  )
}

export default Details