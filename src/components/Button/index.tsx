import { useState, type ReactNode } from "react";
import { StyledButton } from "./styles";
import type { ButtonType, ButtonVariant } from "../../types/component";
import { StyledLoader } from "../Loader/styles";

interface ButtonProps {
  label?: string;
  variant: ButtonVariant;
  type: ButtonType;
  buttonStyles?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  handleClick?: () => void;
  children?: ReactNode | string;
}

export const Button = ({
  variant = "primary",
  loading,
  type = "button",
  handleClick,
  disabled,
  label,
  children,
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyledButton
      variant={variant}
      isClicked={isClicked}
      type={type}
      onClick={(e) => {
        e.stopPropagation();
        setIsClicked(true);
        handleClick?.();
      }}
      disabled={disabled}
    >
      {label || children}
      {loading && <StyledLoader />}
    </StyledButton>
  );
};
