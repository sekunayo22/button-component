import styled from "@emotion/styled";
import { primary01, white } from "../../styles/abstracts/variables";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${white};
  border-top-color: ${primary01};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
