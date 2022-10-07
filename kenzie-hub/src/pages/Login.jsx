import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputDefault } from "../styles/inputs";
import { Title1, Title2 } from "../styles/typography";
import { ButtonCadastre as Link, MainLogin } from "./login";
import api from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../styles/buttons";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState("password");
  console.log(isPassword);

  const alterPass = () => {
    isPassword === "password"
      ? setIsPassword("text")
      : setIsPassword("password");
  };
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    localStorage.clear();
    api
      .post(`/sessions`, data)
      .then(
        (response) =>
          response.data.token &&
          toast.success(
            "Login feito com sucesso!",
            {
              position: "top-right",
              autoClose: 700,
              autoClose: 700,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            },
            localStorage.setItem("token", response.data.token),
            localStorage.setItem("userId", response.data.user.id),
            navigate("/dashboard")
          )
      )
      .catch((err) => {
        toast.error("Email ou senha incorretos!", {
          position: "top-right",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <Title1 primary>Breno Hub</Title1>
      <MainLogin>
        <Title2 secondary>Login</Title2>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="inputEmail">Email</label>
          <InputDefault
            type={"text"}
            name={"inputEmail"}
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="inputPassword">Senha</label>
          <InputDefault
            type={isPassword}
            name={"inputPassword"}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span onClick={alterPass}>Mostrar senha</span>
          {errors.password?.message}

          {/* <NavLink to="/cadastro">Entrar</NavLink> */}
          <ButtonPrimary>Entrar</ButtonPrimary>

          <span>Ainda não possui conta?</span>

          <Link to={"/cadastro"} relative="path">
            Cadastre-se
          </Link>

          <span>
            Esqueceu sua senha? <strong>Clique aqui.</strong>
          </span>
        </form>
      </MainLogin>
    </>
  );
};

export default Login;
