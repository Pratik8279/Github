import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function DetailsTable({data}) {
    console.log(data)
  return (
    <div>
      {data.length>0 && <Box marginTop={"2rem"} border={"2px solid #777"}>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Github Repositories</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Created At</Th>
        <Th>Public</Th>
        <Th>Description</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((ele)=>(
        <Tr key = {ele.id}>
         <Link to= {`/${ele.id}`}><Td _hover={{color:'blue'}}>{ele.name}</Td></Link>
         <Td>{ele.created_at}</Td>
         <Td>{ele.private === false ? "True" : "False"} </Td>
         <Td>{ele.description}</Td>
      </Tr>
      ))}
    </Tbody>

  </Table>
</TableContainer>
</Box>}
</div>
  )
}

export default DetailsTable