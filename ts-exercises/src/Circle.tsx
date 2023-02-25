import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "text string" }: CircleProps) {
  const [counter, setCounter] = useState<number|string>(1)
  setCounter("2")
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
      {text}
    </Container>
  );
}

export default Circle;

// interface PlayerShape {
//   name: string;
//   age: number;
// }

// const sayHello = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name} you are ${playerObj.age} old`;

// sayHello({ name: "babo", age: 17 });

// sayHello({ name: "babo", age: 17, text:1});
