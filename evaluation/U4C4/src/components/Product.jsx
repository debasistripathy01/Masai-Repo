import React, { useEffect } from "react";
import { useState } from "react";
import { Text, Image, Box, Heading, Tag,Stack, TagLabel } from "@chakra-ui/react";



const Product = ({ data }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">{Image}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{Text}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{Heading}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
