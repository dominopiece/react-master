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
  const Btn = styled.button`
    color: white;
    background-color: pink;
    border: 0;
    border-radius: 15px;
  `;
  const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: pink;
  `;

  return (
    <Fater>
      {/* <Box bgColor="black" /> */}
      {/* <Circle bgColor="pink" /> */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="https://www.google.com/">Log in</Btn>
      <Btn as="h1">Log in</Btn> */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Fater>
  );
}

export default App;
