import styled, { keyframes } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;
  const rotatioAnimation = keyframes`
  /* from {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  } */
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
    background-color: black;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
  `;

  const Emoji = styled.span`
    font-size: 50px;
  `;

  const Box = styled.div`
    width: 200px;
    height: 200px;
    /* background-color: pink; */
    background-color: ${(props) => props.bgColor};
    animation: ${rotatioAnimation} 9s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    ${Emoji} {
      /* span { */
      /* font-size: 50px; */
      &:hover {
        font-size: 100px;
      }
      &:active {
        opacity: 0;
      }
    }
  `;

  // const Circle = styled(Box)`
  //   border-radius: 50px;
  // `;

  // const Test1 = styled.span`
  //   font-size: 38px;
  // `;

  const Btn = styled.button`
    background-color: pink;
    color: white;
    width: 90px;
    height: 20px;
  `;
  const Input = styled.input.attrs({ required: true })`
    background-color: pink;
  `;
  const WrapperH1 = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.backgroundColor};
  `;
  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <WrapperH1>
      <Title>textColor</Title>
    </WrapperH1>
    // <Wrapper>
    //   <Box bgColor="pink">
    //     {/* <Test1>🤺</Test1> */}
    //     {/* <span>🤺</span> */}
    //     <Emoji as="p">🤺</Emoji>
    //     <Emoji>🤺</Emoji>
    //   </Box>
    //   <Box bgColor="black" />
    //   <Emoji>🤺</Emoji>
    //   {/* <Circle bgColor="pink"/> */}
    //   <Btn href="https://www.google.com">test</Btn>
    //   <Btn as="a" href="https://www.google.com">google</Btn>
    // </Wrapper>
    // <Wrapper>
    //   {/* <Input />
    //   <Input />
    //   <Input />
    // <Input /> */}
    // <Box bgColor="pink">

    // </Box>
    // </Wrapper>
  );
}

export default App;
