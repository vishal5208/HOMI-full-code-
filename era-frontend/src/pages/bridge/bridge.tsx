import Header from "components/layout/header";
import {
  BNBSign,
  BridgeContainer,
  BtnDown,
  BtnFrom,
  BtnSent,
  Col,
  Container,
  DataBox,
  Diagram,
  EtherSign,
  FromTo,
  FullDiv,
  H_24,
  H_24_hid,
  H_32,
  H_40,
  H_magneta,
  H_magneta_small,
  Hr,
  Line,
  MenuBox,
  MenuItem,
  PlusBox,
  PlusBtn,
  SignBox,
  Space,
  SpanSec,
  SpanWithMargin,
  TextBoxMain,
  TextUp,
  YouSend,
} from "./index.style";

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="2"
    viewBox="0 0 40 2"
    fill="none"
  >
    <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
    <defs>
      <linearGradient
        id="paint0_linear_644_287"
        x1="0"
        y1="0.5"
        x2="40"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111012" />
        <stop offset="0.395833" stopColor="#AF50BD" />
        <stop offset="0.583333" stopColor="#AF50BD" />
        <stop offset="1" stopColor="#121013" />
      </linearGradient>
    </defs>
  </svg>
);

const downArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17 12L15.2527 13.763C13.8592 15.1689 13.1625 15.8719 12.3133 15.9801C12.1053 16.0066 11.8947 16.0066 11.6867 15.9801C10.8375 15.8719 10.1408 15.1689 8.74731 13.763L7 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Bridge() {
  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={50} />
        <Header isProfilePage={true} />
        <Space $height={50} $mdH={30} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>BRIDGE</MenuItem>
        </MenuBox>
        <Space $height={60} $mdH={30} />
        <H_40>BRIDGE</H_40>
        <Space $height={20} $mdH={10} />

        <BridgeContainer>
          <DataBox>
            <FromTo>
              {/* <SpanFlex> */}
              <SpanSec>
                <H_24>From Network</H_24>
                <Space $height={8} />
                <SignBox>
                  <EtherSign />
                  <SpanWithMargin>ETHEREUM</SpanWithMargin>
                  {downArrow}
                </SignBox>
              </SpanSec>
              <PlusBox>
                <Hr />
                <PlusBtn>+</PlusBtn>
                <Hr />
              </PlusBox>
              <SpanSec>
                <H_24>To Network</H_24>
                <Space $height={8} />
                <SignBox>
                  <BNBSign />
                  <SpanWithMargin>BNB CHAIN</SpanWithMargin>
                  {downArrow}
                </SignBox>
              </SpanSec>
              {/* </SpanFlex> */}
            </FromTo>
            <Space $height={20} $mdH={10} />
            <Line />
            <YouSend>
              <TextUp>
                <H_24>You send</H_24>
                <H_24_hid>{"(max: 0.00)"}</H_24_hid>
              </TextUp>
              <BtnSent>
                <BtnFrom>
                  <SignBox>
                    <EtherSign />
                    <Col>
                      <SpanWithMargin>From ETH</SpanWithMargin>
                      <H_magneta>Balance: 0.00</H_magneta>
                    </Col>
                    {downArrow}
                  </SignBox>
                </BtnFrom>
              </BtnSent>
            </YouSend>
            <Space $height={10} $mdH={10} />
            <BtnDown>
              <TextBoxMain>
                <H_32>Slippage limit: 0.1%</H_32>
                <H_magneta_small>
                  Slippage limit and liquidity sources
                </H_magneta_small>
              </TextBoxMain>
              {downArrow}
            </BtnDown>
          </DataBox>
          <Diagram
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
          >
            <path
              d="M194.25 222.75L191.25 225C184.804 229.838 175.196 229.841 168.75 225L165.75 222.75C156.724 215.974 143.272 215.978 134.25 222.75L131.25 225C124.804 229.838 115.196 229.841 108.75 225L105.75 222.75C96.7238 215.974 83.2725 215.978 74.25 222.75L71.25 225C64.8038 229.838 55.1963 229.841 48.75 225L45.75 222.75C36.7238 215.974 23.2763 215.974 14.25 222.75L5.25 229.5L9.75 235.5L18.75 228.75C25.1962 223.913 34.8038 223.909 41.25 228.75L44.25 231C53.2763 237.776 66.7275 237.773 75.75 231L78.75 228.75C85.1963 223.913 94.8037 223.909 101.25 228.75L104.25 231C113.276 237.776 126.728 237.773 135.75 231L138.75 228.75C145.196 223.913 154.804 223.909 161.25 228.75L164.25 231C168.765 234.386 174.356 236.25 180 236.25C185.644 236.25 191.239 234.386 195.75 231L198.75 228.75C205.196 223.913 214.804 223.913 221.25 228.75L230.25 235.5L234.75 229.5L225.75 222.75C216.724 215.978 203.276 215.978 194.25 222.75Z"
              fill="#5D3068"
            />
            <path
              d="M194.25 196.5L191.25 198.75C184.804 203.588 175.196 203.591 168.75 198.75L165.75 196.5C156.724 189.724 143.272 189.728 134.25 196.5L131.25 198.75C124.804 203.588 115.196 203.591 108.75 198.75L105.75 196.5C96.7238 189.724 83.2725 189.728 74.25 196.5L71.25 198.75C64.8038 203.588 55.1963 203.591 48.75 198.75L45.75 196.5C36.7238 189.724 23.2763 189.724 14.25 196.5L5.25 203.25L9.75 209.25L18.75 202.5C25.1962 197.663 34.8038 197.659 41.25 202.5L44.25 204.75C53.2763 211.526 66.7275 211.523 75.75 204.75L78.75 202.5C85.1963 197.663 94.8037 197.659 101.25 202.5L104.25 204.75C113.276 211.526 126.728 211.523 135.75 204.75L138.75 202.5C145.196 197.663 154.804 197.659 161.25 202.5L164.25 204.75C168.765 208.136 174.356 210 180 210C185.644 210 191.239 208.136 195.75 204.75L198.75 202.5C205.196 197.663 214.804 197.663 221.25 202.5L230.25 209.25L234.75 203.25L225.75 196.5C216.724 189.728 203.276 189.728 194.25 196.5Z"
              fill="#5D3068"
            />
            <path
              d="M236.25 60V52.5C226.327 52.5 217.264 46.6613 213.154 37.6275L202.395 13.9575C201.859 8.24625 197.096 3.75 191.25 3.75H183.75C177.548 3.75 172.5 8.7975 172.5 15V17.31L154.766 37.0163C145.909 46.8563 133.238 52.5 120 52.5C106.762 52.5 94.0912 46.8563 85.2337 37.0163L67.5 17.31V15C67.5 8.7975 62.4525 3.75 56.25 3.75H48.75C42.9038 3.75 38.1413 8.24625 37.605 13.9575L26.8463 37.6312C22.7362 46.6613 13.6725 52.5 3.75 52.5V60C5.0175 60 6.25875 59.8688 7.5 59.7262V86.25C5.43 86.25 3.75 87.93 3.75 90V105C3.75 107.07 5.43 108.75 7.5 108.75H37.5V135.69C33.1462 137.242 30 141.367 30 146.25V165.169C24.3825 165.169 18.7612 166.864 14.25 170.25L5.25 177L9.75 183L18.75 176.25C25.1962 171.413 34.8038 171.409 41.25 176.25L44.25 178.5C53.2763 185.276 66.7275 185.272 75.75 178.5L78.75 176.25C85.1963 171.413 94.8037 171.409 101.25 176.25L104.25 178.5C113.276 185.276 126.728 185.272 135.75 178.5L138.75 176.25C145.196 171.413 154.804 171.409 161.25 176.25L164.25 178.5C168.765 181.886 174.356 183.75 180 183.75C185.644 183.75 191.239 181.886 195.75 178.5L198.75 176.25C205.196 171.413 214.804 171.413 221.25 176.25L230.25 183L234.75 177L225.75 170.25C221.235 166.864 215.617 165.169 210 165.169V146.25C210 141.367 206.854 137.242 202.5 135.69V108.75H232.5C234.57 108.75 236.25 107.07 236.25 105V90C236.25 87.93 234.57 86.25 232.5 86.25V59.7262C233.741 59.8688 234.982 60 236.25 60ZM210 46.7663V86.25H202.5V32.31L206.329 40.7325C207.319 42.9113 208.598 44.895 210 46.7663ZM183.75 11.25H191.25C193.316 11.25 195 12.9338 195 15V86.25H180V15C180 12.9338 181.684 11.25 183.75 11.25ZM172.5 86.25H161.25V41.0213L172.5 28.5225V86.25ZM131.25 86.25V58.8112C133.811 58.2675 136.301 57.48 138.75 56.5762V86.25H131.25ZM146.25 53.175C148.886 51.72 151.38 50.0175 153.75 48.1312V86.25H146.25V53.175ZM123.75 59.8012V86.25H116.25V59.8012C117.499 59.8875 118.74 60 120 60C121.26 60 122.501 59.8875 123.75 59.8012ZM86.25 48.1312C88.62 50.0175 91.1137 51.7163 93.75 53.175V86.25H86.25V48.1312ZM101.25 56.5762C103.699 57.48 106.189 58.2675 108.75 58.8112V86.25H101.25V56.5762ZM78.75 41.0213V86.25H67.5V28.5225L78.75 41.0213ZM48.75 11.25H56.25C58.3162 11.25 60 12.9338 60 15V86.25H45V15C45 12.9338 46.6838 11.25 48.75 11.25ZM37.5 32.31V86.25H30V46.7663C31.4025 44.895 32.6812 42.915 33.6712 40.7325L37.5 32.31ZM15 57.9187C17.6663 56.94 20.1825 55.65 22.5 54.0338V86.25H15V57.9187ZM60 108.75V135H45V108.75H60ZM48.75 172.5L45.75 170.25C43.275 168.394 40.455 167.096 37.5 166.256V146.25C37.5 144.184 39.1838 142.5 41.25 142.5H63.75C65.8162 142.5 67.5 144.184 67.5 146.25V174.577C61.4437 177.128 54.045 176.475 48.75 172.5ZM134.25 170.25L131.25 172.5C124.804 177.337 115.196 177.341 108.75 172.5L105.75 170.25C96.96 163.654 84.0075 163.534 75 169.781V146.25C75 141.367 71.8538 137.242 67.5 135.69V108.75H172.5V135.69C168.146 137.242 165 141.367 165 146.25V169.785C155.989 163.534 143.036 163.658 134.25 170.25ZM194.25 170.25L191.25 172.5C185.959 176.471 178.556 177.128 172.5 174.577V146.25C172.5 144.184 174.184 142.5 176.25 142.5H198.75C200.816 142.5 202.5 144.184 202.5 146.25V166.256C199.545 167.096 196.725 168.394 194.25 170.25ZM195 135H180V108.75H195V135ZM228.75 101.25H11.25V93.75H228.75V101.25ZM225 86.25H217.5V54.0338C219.818 55.65 222.334 56.94 225 57.9187V86.25Z"
              fill="#5D3068"
            />
            <path
              d="M120 41.25C130.339 41.25 138.75 32.8387 138.75 22.5C138.75 12.1613 130.339 3.75 120 3.75C109.661 3.75 101.25 12.1613 101.25 22.5C101.25 32.8387 109.661 41.25 120 41.25ZM120 11.25C126.202 11.25 131.25 16.2975 131.25 22.5C131.25 28.7025 126.202 33.75 120 33.75C113.797 33.75 108.75 28.7025 108.75 22.5C108.75 16.2975 113.797 11.25 120 11.25Z"
              fill="#5D3068"
            />
          </Diagram>
        </BridgeContainer>
      </Container>
    </FullDiv>
  );
}
