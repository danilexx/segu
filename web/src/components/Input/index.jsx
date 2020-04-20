import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { StyledInput, StyledLabel, Container, ErrorMessage } from "./styles";

const Input = ({ name, label, width = "100%", ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <Container
      style={{
        width,
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <StyledInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default Input;
