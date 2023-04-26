import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ContainerFlex,
  MediaImg,
  Text,
} from "@luis.axovia/libreria_ui";
import { getCharacter } from "./service";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [character, setCharacter] = useState("");

  const gettingCharacter = async (character) => {
    const response = await getCharacter(character);
    console.log(
      "🚀 ~ file: App.js:13 ~ gettingCharacter ~ response:",
      response
    );
    setCharacter(response);
  };

  const handleDecrement = () => {
    setNumber((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setNumber((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    gettingCharacter(number);
  }, [number]);

  return (
    <div className="App">
      <ContainerFlex
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        height="100vh"
        gap="8px"
      >
        <MediaImg
          src={character.image}
          alt={character.name}
          width="200px"
          height="200px"
        />
        <Text component="h3" fontSize="18px" lineHeight="10px">
          {character.name}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.id}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.species}
        </Text>
        <Text component="p" fontSize="18px" lineHeight="10px">
          {character.status}
        </Text>
        <ContainerFlex
          flexDirection="row"
          justifyContent="center"
          alignContent="center"
          height="40px"
          gap="8px"
        >
          <Button
            onClick={handleDecrement}
            width="150px"
            height="40px"
            bgColor="lighsteelblue"
            bgColorHover="lightcoral"
          >
            {"< Before"}
          </Button>
          <Button
            onClick={handleIncrement}
            width="150px"
            height="40px"
            bgColor="lighsteelblue"
            bgColorHover="lightgreen"
          >
            {"Next >"}
          </Button>
        </ContainerFlex>
      </ContainerFlex>
    </div>
  );
}

export default App;
