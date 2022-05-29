import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  Link,
  FormErrorMessage
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { chainOptions, platformOptions, serviceOptions } from "./docs/data";

const SelectNetwork =() => {

  function shouldSwap()
  {
    
  }

  return(
  <Container mb={16}>
    <FormControl p={4}>
      <FormLabel>
        Select your chain ✨
      </FormLabel>
      <Select
        name="chain"
        options={chainOptions}
        placeholder="What chain will it be, stranger?"
        closeMenuOnSelect={true}
        size="sm"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
      Select the platform 🍛
      </FormLabel>
      <Select
        name="platform"
        options={platformOptions}
        placeholder="Where will you be rugpulled?"
        closeMenuOnSelect={true}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select the action 🌊
      </FormLabel>
      <Select
        name="action"
        options={serviceOptions}
        placeholder="Where will you be rugpulled?"
        closeMenuOnSelect={true}
      />
    </FormControl>
  </Container>
  )

}

export default SelectNetwork;