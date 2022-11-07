import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button, Modal, ModalBody, Input, Select, RadioGroup, Radio } from "@chakra-ui/react";
const AddProduct = ({handleAddProd}) => {

  const [prod, setProd]= useState({
    title: "",
    category: "",
    gender: "",
    price: ""
  });

  const handleChange=(e)=>{
    const {title, category, gender, price} = e.target;
    const val =type ==="number"? Number(price) : price;
    setProd({...prod, [title]: val});
  }

  const handleSubmit=(e)=>{

    console.log(prod);
    handleAddProd(prod);
    setProd({
      title: "",
      category: "",
    gender: "",
    price: ""
    })
  }
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;


  return (
    <Box>
      <Button my={4} data-cy="add-product-button"></Button>
      <Modal>
        <ModalBody pb={6}>
          <Input name="title" data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button"></Button>
        </ModalBody>
      </Modal>
    </Box>
  );
};

export default AddProduct;
