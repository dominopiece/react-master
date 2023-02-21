import styled from "styled-components";

function App() {
  const Fater = styled.div`
    display: flex;
  `;
  const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
  `;

  const Circle = styled(Box)`
    border-radius: 50px;
  `;

  return (
    <Fater>
      <Box bgColor="black" />
      <Circle bgColor="pink" />
    </Fater>
  );
}

export default App;
