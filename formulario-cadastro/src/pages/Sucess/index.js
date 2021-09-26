import { useParams } from "react-router-dom";
import { Button, styled } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import logo from "./62.png";

const Sucesso = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackPage = () => {
    console.log(history);
    history.goBack();
  };

  console.log(params);
  return (
    <>
      <Container>
        <h1>Bem Vindo, {params.user}!</h1>
        <img src={logo} alt="welcome"></img>
        <Button variant="outlined" onClick={handleBackPage}>
          Voltar
        </Button>
      </Container>
    </>
  );
};
export default Sucesso;
