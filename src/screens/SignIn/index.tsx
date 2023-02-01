import {
  Container,
  Logo,
  LogoTitle,
  LogoImage,
  Input,
  Form,
  Content,
} from "./styles";
import LogoPng from "../../assets/logo.png";
import { Button } from "../../components/Button";

export const SignIn = () => (
  <Container>
    <Content>
      <Logo>
        <LogoImage source={LogoPng} />
        <LogoTitle>
          {" "}
          Zé{"\n"} Ratinho{"\n"} Salgados
        </LogoTitle>
      </Logo>

      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry />
      </Form>

      <Button title="LOGIN" />
    </Content>
  </Container>
);
