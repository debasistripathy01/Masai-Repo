import React, { useEffect } from "react";
import { useState } from "react";
import { Text, Image, Box, Heading, Tag,Stack, TagLabel } from "@chakra-ui/react";
import axios from "axios";


const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((res)=>{
      setData(res.data);
    })
  },[])

  console.log(data);
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
