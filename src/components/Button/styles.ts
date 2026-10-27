import styled from "@emotion/styled";
import {
  primary01,
  primary02,
  primary03,
  secondary01,
  white,
  WorkSans,
} from "../../styles/abstracts/variables";
import type { ButtonVariant } from "../../types/component";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  isClicked: boolean;
}>`
  display: flex;
  padding: 14px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: ${({ variant, isClicked }) =>
    isClicked ? primary03 : getVariantStyles(variant)?.backgroundColor};
  color: ${({ variant, isClicked }) =>
    isClicked ? white : getVariantStyles(variant)?.color};
  font-family: ${WorkSans};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  border: ${({ variant }) => variant === "outlined" ? getVariantStyles(variant)?.border : "none"};

  &:disabled {
    background-color: ${primary02};
    border: none;
    color: ${white};
    cursor: not-allowed;
  }
`;

function getVariantStyles(variant: ButtonVariant) {
  const defaultStyles: {
    backgroundColor: string;
    color: string;
    border?: string;
  } = {
    backgroundColor: primary01,
    color: white,
  };
  switch (variant) {
    case "primary":
      return defaultStyles;
    case "secondary":
      defaultStyles.backgroundColor = secondary01;
      defaultStyles.color = primary01;
      return defaultStyles;
    case "outlined":
      defaultStyles["border"] = `1px solid ${primary01}`;
      defaultStyles.color = primary01;
      defaultStyles.backgroundColor = "transparent";
      return defaultStyles;
  }
}
