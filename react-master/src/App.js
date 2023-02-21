import styled, { keyframes } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
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
  const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: pink;
    animation: ${rotatioAnimation} 9s linear infinite;
    border: 0;
  `;

  const Test1 = styled.span`
    font-size: 38px;
  `;

  return (
    <Wrapper>
      <Box>
        {/* <span>🤺🤺🤺🤺</span> */}
        <Test1>🤺🤺🤺🤺</Test1>
      </Box>
    </Wrapper>
  );
}

export default App;
