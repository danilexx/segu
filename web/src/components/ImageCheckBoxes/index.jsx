import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { useList } from "react-use";
import {
  StyledLabel,
  Container,
  ErrorMessage,
  Images,
  Image,
  ImageContainer,
  LabelSection,
  Checkbox,
  Label,
  CheckboxIcon,
} from "./styles";

const prefix = "/assets/imgs";
const srcs = [
  {
    image: `${prefix}/undraw_dua_lipa_ixam.svg`,
    label: "Sou solteiro",
    value: "haveNobody",
  },
  {
    image: `${prefix}/undraw_staying_in_i80u.svg`,
    label: "Relacionamento sério",
    value: "haveRelationship",
  },
  {
    image: `${prefix}/undraw_wedding_t1yl.svg`,
    label: "Sou casado",
    value: "married",
  },
  {
    image: `${prefix}/undraw_exams_g4ow.svg`,
    label: "Estou estudando",
    value: "imStudent",
  },
  {
    image: `${prefix}/undraw_shared_workspace_hwky.svg`,
    label: "Estou trabalhando",
    value: "imWorking",
  },
  {
    image: `${prefix}/undraw_build_your__home_csh6.svg`,
    label: "Tenho casa própria",
    value: "haveHome",
  },
  {
    image: `${prefix}/undraw_back_home_nl5c.svg`,
    label: "Tenho apê próprio",
    value: "haveApartment",
  },
  {
    image: `${prefix}/undraw_good_doggy_4wfq.svg`,
    label: "Tenho pets",
    value: "havePets",
  },
  {
    image: `${prefix}/undraw_baby_ja7a.svg`,
    label: "Tenho filhos",
    value: "haveKids",
  },
  {
    image: `${prefix}/undraw_order_confirmed_aaw7.svg`,
    label: "Tenho celular",
    value: "haveCellphone",
  },
  {
    image: `${prefix}/undraw_off_road_9oae.svg`,
    label: "Tenho carro",
    value: "haveCar",
  },
  {
    image: `${prefix}/undraw_Ride_a_bicycle_2yok.svg`,
    label: "Tenho bike ou moto",
    value: "haveMotorcicle",
  },
  {
    image: `${prefix}/undraw_journey_lwlj.svg`,
    label: "Amo viajar",
    value: "havePets",
  },
  {
    image: `${prefix}/undraw_gaming_6oy3.svg`,
    label: "Amo tecnologia",
    value: "haveTecnology",
  },
  {
    image: `${prefix}/undraw_gradma_wanr.svg`,
    label: "Sou bem família",
    value: "familyBias",
  },
  {
    image: `${prefix}/undraw_having_fun_iais.svg`,
    label: "Adoro uma festa",
    value: "partyPeople",
  },
  {
    image: `${prefix}/undraw_into_the_night_vumi.svg`,
    label: "Amo a natureza",
    value: "earthLoving",
  },
  {
    image: `${prefix}/undraw_quite_town_mg2q.svg`,
    label: "Sou mais a cidade",
    value: "cityLoving",
  },
  {
    image: `${prefix}/undraw_working_out_6psf.svg`,
    label: "Pratico esportes",
    value: "sportsLoving",
  },
  {
    image: `${prefix}/undraw_medicine_b1ol.svg`,
    label: "Tenho plano de saúde",
    value: "healthPlan",
  },
  {
    image: `${prefix}/undraw_Savings_dwkw.svg`,
    label: "Tenho previdência privada",
    value: "previdenciaPlan",
  },
  {
    image: `${prefix}/undraw_invest_88iw.svg`,
    label: "Já contratei seguros",
    value: "insurancePlan",
  },
];

const ImageCheckBoxes = ({ name, label, width = "100%" }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [checkeds, { push, set, removeAt }] = useList(defaultValue || []);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "checkeds",
      ref: { checkeds },
      getValue: () => {
        return checkeds;
      },
      setValue: (value) => {
        set(value);
      },
      clearValue: () => {
        set([]);
      },
    });
  }, [fieldName, registerField, checkeds, set]);
  const toggleImage = (value) => {
    const findElement = (e) => e === value;
    const isChecked = checkeds.some(findElement);
    if (isChecked) {
      const index = checkeds.findIndex(findElement);
      removeAt(index);
    } else {
      push(value);
    }
  };
  return (
    <Container
      style={{
        width,
      }}
    >
      {label && <StyledLabel htmlFor={fieldName}>{label}</StyledLabel>}
      <Images ref={inputRef}>
        {srcs.map((src, index) => (
          <ImageContainer onClick={() => toggleImage(src.value)} key={index}>
            <Image src={src.image} />
            <LabelSection>
              <Checkbox>
                {checkeds.some((e) => e === src.value) && <CheckboxIcon />}
              </Checkbox>
              <Label>{src.label}</Label>
            </LabelSection>
          </ImageContainer>
        ))}
      </Images>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
export default ImageCheckBoxes;
