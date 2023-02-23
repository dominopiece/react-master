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
    background-color: pink;
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

  // const Test1 = styled.span`
  //   font-size: 38px;
  // `;

  return (
    <Wrapper>
      <Box>
        {/* <Test1>🤺</Test1> */}
        {/* <span>🤺</span> */}
        <Emoji as="p">🤺</Emoji>
        <Emoji>🤺</Emoji>
      </Box>
      <Emoji>🤺</Emoji>
    </Wrapper>
  );
}

export default App;
