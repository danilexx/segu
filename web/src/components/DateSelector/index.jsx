import React, { useEffect } from "react";
import { useField } from "@unform/core";
import Select from "react-select";
import { StyledLabel, Container, ErrorMessage, Selects } from "./styles";

const getDayOptions = (max) => {
  const array = [...Array(max)];
  return array.map((_, index) => ({
    label: index + 1,
    value: index + 1,
  }));
};

const monthOptions = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
].map((e) => ({ label: e, value: e }));

const getMonthDays = (month) => {
  const club31 = [
    "janeiro",
    "março",
    "maio",
    "julho",
    "agosto",
    "outubro",
    "dezembro",
  ];
  if (club31.some((e) => e === month)) {
    return 31;
  }
  if (month === "fevereiro") {
    return 29;
  }
  return 30;
};

const yearOptions = [...Array(new Date().getFullYear() - 1900)]
  .map((_, e) => ({
    label: e + 1901,
    value: e + 1901,
  }))
  .reverse();

const DateSelector = ({ name, label, width = "100%" }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [day, setDay] = React.useState(defaultValue || "");
  const [month, setMonth] = React.useState(defaultValue || "");
  const [year, setYear] = React.useState(defaultValue || "");
  const date = React.useMemo(
    () =>
      day !== "" && month !== "" && year !== ""
        ? `${day}/${month}/${year}`
        : "",
    [day, month, year]
  );
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "date",
      ref: { date },
      setValue: () => {},
      getValue: () => {
        return date;
      },
    });
  }, [fieldName, registerField, date]);
  const handleDayChange = ({ value }) => {
    setDay(value);
  };
  const handleMonthChange = ({ value }) => {
    if (day > getMonthDays(value)) {
      setDay(getMonthDays(value));
    }
    setMonth(value);
  };
  const handleYearChange = ({ value }) => {
    setYear(value);
  };
  return (
    <Container
      style={{
        width,
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <Selects>
        <Select
          className="react-select"
          classNamePrefix="react-select"
          value={getDayOptions(getMonthDays(month)).find(
            (e) => e.value === day
          )}
          options={getDayOptions(getMonthDays(month))}
          placeholder="dia"
          onChange={handleDayChange}
        />
        <Select
          className="react-select"
          classNamePrefix="react-select"
          value={monthOptions.find((e) => e.value === month)}
          options={monthOptions}
          placeholder="mês"
          onChange={handleMonthChange}
        />
        <Select
          className="react-select"
          classNamePrefix="react-select"
          value={yearOptions.find((e) => e.value === year)}
          options={yearOptions}
          placeholder="ano"
          onChange={handleYearChange}
        />
      </Selects>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default DateSelector;
