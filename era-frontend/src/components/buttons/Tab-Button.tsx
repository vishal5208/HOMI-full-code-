import { styled } from "styled-components";

interface ButtonProps {
  $hover: boolean;
  $active: boolean;
}

export const StyleMain = styled.div<ButtonProps>`
  display: flex;
  width: 144px;
  height: 62px;
  padding: 28px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 40px;
  background: ${(props) => props.$active? '#af50bd': 'rgba(18, 16, 19, 0.6)'};
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hover?'#af50bd50': ''};
    /* background-color: #af50bd50; */
  }
`;

export const TabButton = ({
  text,
  hover,
  active,
}: {
  text: string;
  hover: boolean;
  active: boolean;
}) => {
  return (
    <StyleMain $hover={hover} $active={active}>
      {text}
    </StyleMain>
  );
};
