import { InputDefault } from "../styles/inputs";
import { DivCadastro, DivMainCadastro } from "./cadastro";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Headline, Title1 } from "../styles/typography";
import { ButtonBackToLogin as Link } from "./cadastro";
import api from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import { ButtonPrimary } from "../styles/buttons";

const Cadastro = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post(`/users`, data)
      .then(
        (response) =>
          response.data.id &&
          toast.success(
            "Cadastro feito com sucesso!",
            {
              position: "top-right",
              autoClose: 700,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            }
            // console.log(response)
          )
      )
      .catch((err) => {
        err.response.data.message === "Email already exists"
          ? toast.error("Email existente!", {
              position: "top-right",
              autoClose: 700,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            })
          : toast.error("Email ou senha incorretos!", {
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

      <DivMainCadastro>
        <Title1 primary>Kenzie Hub</Title1>
        <Link to="/login">Voltar</Link>
      </DivMainCadastro>

      <DivCadastro>
        <Title1>Crie sua conta</Title1>

        <Headline>Rapido e grátis, vamos nessa</Headline>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="inputName">Nome</label>
          <InputDefault
            type={"text"}
            name={"inputEmail"}
            placeholder="Digite seu nome"
            required
            {...register("name")}
          />

          <label htmlFor="inputEmail">Email</label>
          <InputDefault
            type={"text"}
            name={"inputEmail"}
            placeholder="Digite seu Email"
            required
            {...register("email")}
          />

          <label htmlFor="inputPass">Senha</label>
          <InputDefault
            type={"password"}
            name={"inputPass"}
            placeholder="Digite sua senha"
            required
            {...register("password")}
          />
          <label htmlFor="confirmPass">Confirmar senha</label>
          <InputDefault
            type={"password"}
            name={"confirmPass"}
            placeholder="Confirme a sua senha"
            current-password
            required
            // {...register("confirmPassword")}
          />
          <label htmlFor="inputBio">Bio</label>
          <InputDefault
            type={"text"}
            name={"inputBio"}
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <label htmlFor="inputContact">Contato</label>
          <InputDefault
            type={"number"}
            name={"inputContact"}
            placeholder="Opção de contato "
            required
            {...register("contact")}
          />
          <label htmlFor="inputName">Selecionar módulo</label>
          <select name="inputName" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <ButtonPrimary>Cadastrar</ButtonPrimary>
        </form>
      </DivCadastro>
    </>
  );
};
export default Cadastro;
