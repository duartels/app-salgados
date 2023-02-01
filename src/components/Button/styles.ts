import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStylesProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.colors.PURPLE_700 : theme.colors.PURPLE_500};

  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    color: ${theme.colors.WHITE};
    font-family: ${theme.font_family.BOLD};
  `}
`;
