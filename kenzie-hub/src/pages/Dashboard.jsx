import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { TextButton } from "../styles/buttons";
import { Headline, Title1, Title2 } from "../styles/typography";
import { Header, Main } from "./dashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const getToken = localStorage.getItem("token");
  const getId = localStorage.getItem("userId");

  const verifyToken = () => {
    return getToken ? true : false;
  };

  useEffect(() => {
    api
      .get(`/users/${getId}`)
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const backToLogin = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Main>
      <Header>
        <div>
          <Title1 primary>Kenzie Hub</Title1>
          <TextButton onClick={backToLogin}>Sair</TextButton>
        </div>
      </Header>

      <section>
        <Title1>Olá, {allUsers.name}</Title1>
        <Headline>{allUsers.course_module}</Headline>
      </section>

      <div>
        <Title2>
          Que pena! Estamos em desenvolvimento xD <br /> Volte semana que vem,
          teremos muitas novidade por aqui 😉{" "}
        </Title2>
      </div>
    </Main>
  );
};

export default Dashboard;
