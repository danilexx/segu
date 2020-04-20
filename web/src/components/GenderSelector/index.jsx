import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import {
  StyledLabel,
  Container,
  ErrorMessage,
  GenderCards,
  GenderCard,
} from "./styles";

const GenderSelector = ({ name, label, width = "100%" }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [gender, setGender] = React.useState(defaultValue || "");
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "gender",
      ref: { gender },
      setValue: () => {
        inputRef.current.value = gender;
      },
      getValue: () => {
        return gender;
      },
    });
  }, [fieldName, registerField, gender]);
  const handleGender = (value) => {
    setGender(value);
  };
  return (
    <Container
      style={{
        width,
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <GenderCards ref={inputRef}>
        <GenderCard
          onClick={() => handleGender("male")}
          selected={gender === "male"}
        >
          Masculino
        </GenderCard>
        <GenderCard
          onClick={() => handleGender("female")}
          selected={gender === "female"}
        >
          Feminino
        </GenderCard>
        <GenderCard
          onClick={() => handleGender("other")}
          selected={gender === "other"}
        >
          Outro
        </GenderCard>
      </GenderCards>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default GenderSelector;
