import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

export const LogoTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.PURPLE_700};
  margin-left: 10px;
`;

export const LogoImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Form = styled.View`
  margin-bottom: 24px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.PURPLE_500,
  // change border color when focus
}))`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.PURPLE_300};
  border-radius: 50%;
  margin-top: 10px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.PURPLE_900};
  font-size: 16px;
`;
