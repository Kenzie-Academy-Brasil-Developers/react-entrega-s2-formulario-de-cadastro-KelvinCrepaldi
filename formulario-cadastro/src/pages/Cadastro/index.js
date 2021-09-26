import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { FormStyled } from "./styled";

const Cadastro = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^([a-zA-Zà-úÀ-Ú ]|\\s+)+$/, "O nome deve conter apenas letras"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email(
        "Email inválido, o campo deve possuir um formato de email valido."
      ),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha deve conter pelo menos 8 caracteres.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Necessário ter letras, números e ao menos um símbolo"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha invalida, os campos devem ser iguais."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);

  const handlerForm = (data) => {
    console.log(data.name);
    history.push("/sucess/" + data.name);
  };
  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit(handlerForm)}>
          <TextField
            className="input"
            variant="outlined"
            label="Nome"
            helperText={errors.name?.message}
            error={!!errors.name}
            {...register("name")}
          />
          <TextField
            className="input"
            variant="outlined"
            label="Email"
            helperText={errors.email?.message}
            error={!!errors.email}
            {...register("email")}
          />
          <TextField
            className="input"
            variant="outlined"
            label="Senha"
            helperText={errors.password?.message}
            error={!!errors.password}
            {...register("password")}
          />
          <TextField
            className="input"
            variant="outlined"
            label="Confirmar senha"
            helperText={errors.confirmPassword?.message}
            error={!!errors.confirmPassword}
            {...register("confirmPassword")}
          />
          <div>
            <Button className="button" type="submit" variant="contained">
              Cadastrar
            </Button>
          </div>
        </FormStyled>
      </div>
    </>
  );
};
export default Cadastro;
