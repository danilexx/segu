import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { useList } from "react-use";
import {
  StyledLabel,
  Container,
  ErrorMessage,
  LabelSection,
  Checkbox,
  Label,
  CheckboxIcon,
  CheckBoxesContainer,
  DiscreteInput,
} from "./styles";

const CheckBoxes = ({ name, label, width = "100%", options }) => {
  const inputRef = useRef(null);
  const [other, setOther] = React.useState("");
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [checkeds, { push, set, removeAt }] = useList(defaultValue || []);
  const allCheckedOptionsAndOther = React.useMemo(
    () => [...checkeds, ...(other !== "" ? [other] : [])],
    [checkeds, other]
  );
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "checkeds",
      ref: { checkeds: allCheckedOptionsAndOther },
      getValue: () => {
        return allCheckedOptionsAndOther;
      },
      setValue: (value) => {
        set(value);
      },
      clearValue: () => {
        set([]);
      },
    });
  }, [
    fieldName,
    registerField,
    checkeds,
    set,
    other,
    allCheckedOptionsAndOther,
  ]);
  const toggle = (value) => {
    const findElement = (e) => e === value;
    const isChecked = checkeds.some(findElement);
    if (isChecked) {
      const index = checkeds.findIndex(findElement);
      removeAt(index);
    } else {
      push(value);
    }
  };
  const discreteInputRef = React.useRef(null);
  const handleOther = () => {
    if (discreteInputRef.current) {
      discreteInputRef.current.focus();
    }
  };
  return (
    <Container
      style={{
        width,
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <CheckBoxesContainer ref={inputRef}>
        {options.map((src, index) => (
          <LabelSection onClick={() => toggle(src.value)} key={index}>
            <Checkbox>
              {checkeds.some((e) => e === src.value) && <CheckboxIcon />}
            </Checkbox>
            <Label>{src.label}</Label>
          </LabelSection>
        ))}
        <LabelSection onClick={handleOther}>
          <Checkbox>{other !== "" && <CheckboxIcon />}</Checkbox>
          <Label>
            Outro:{" "}
            <DiscreteInput
              ref={discreteInputRef}
              onChange={(e) => {
                setOther(e.target.value);
              }}
              value={other}
            />
          </Label>
        </LabelSection>
      </CheckBoxesContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default CheckBoxes;
