import styled from "styled-components";

export const FormStyled = styled.form`
  width: 300px;
  min-height: 350px;
  margin: 30px;
  padding: 30px;
  background-color: rgba(100, 100, 100, 0.1);
  box-shadow: 2px 2px 4px rgba(100, 100, 100, 0.7),
    1px 1px 1px inset rgba(100, 100, 100, 0.2);
  border-radius: 20px;

  .input {
    margin: 3px;
  }

  .button {
    color: white;
    margin: 20px;
    background-color: green;
  }
  .button:hover {
    background-color: rgba(100, 100, 100);
  }
`;
