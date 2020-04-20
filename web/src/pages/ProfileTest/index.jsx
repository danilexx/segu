import React from "react";

import { Container, PageIndicator } from "./styles";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { ClientService } from "-/services";

const ProfileTest = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState({});
  const handleNext = async (newData) => {
    if (page === 3) {
      const toServerData = { ...data, ...newData };
      console.log("fetching");
      const response = await ClientService.create(toServerData);
      console.log(response.data);
      return;
    }
    setData((state) => ({ ...state, ...newData }));
    setPage((currentPage) => currentPage + 1);
  };
  return (
    <Container>
      {page === 1 && <Form1 handleNext={handleNext} />}
      {page === 2 && <Form2 handleNext={handleNext} />}
      {page === 3 && <Form3 handleNext={handleNext} />}
      <PageIndicator>{page}/3</PageIndicator>
    </Container>
  );
};

export default ProfileTest;
