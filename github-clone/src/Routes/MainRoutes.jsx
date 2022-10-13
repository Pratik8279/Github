import React from "react";
import { useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import Details from "../components/Details";

export function MainRoutes() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    try {
      if (e.code === "Enter" && user) {
        localStorage.setItem("username",user)
        let res = await fetch(`https://api.github.com/users/${user}/repos`);
        let info = await res.json();
        setData(info)
      }
    } catch (error) {
      console.log(error);
    }
  };
  const get_data = async(username) =>{
     try {
      let res = await fetch(`https://api.github.com/users/${username}/repos`);
      let info = await res.json();
      setData(info)
      console.log(data)
     } catch (error) {
      console.log(error)
     }
  }
  useEffect(() => {
    const username = localStorage.getItem("username")
    if(username){
       get_data(username)
    }
  },[]);
  return (
    <>
      <Box w="fit-content" m="auto">
        <Input
          placeholder="Enter some name..."
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => handleChange(e)}
          w="300px"
          border={"2px solid pink"}
          type={"text"}
        />
      </Box>
      <Routes>
        <Route path="/" element={<Home data= {data}/>} />
        <Route path="/:id" element={<Details data= {data}/>} />
      </Routes>
    </>
  );
}


