import "./App.css";
import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { fetchStarWarsFacts } from "./APICalls";
import NameCard from "./components/StarCards/NameCard";
import HeightCard from "./components/StarCards/HeightCard";
import MassCard from "./components/StarCards/MassCard";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [starWarsFacts, setStarWarsFacts] = useState([]);

  useEffect(() => {
    fetchStarWarsFacts().then((res) => {
      let newStarWarsFacts = [...starWarsFacts, ...res];
      setStarWarsFacts(newStarWarsFacts);
    });
  }, []);

  console.log(starWarsFacts);

  return (
    <ChakraProvider>
      <div className="App">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={1}
          margin="50px"
        >
          {starWarsFacts.map((ele) => {
            return (
              <GridItem borderWidth="thick" backgroundColor="lightgrey">
                <Flex flexDir="column" alignItems="center">
                  <NameCard name={ele.name} />
                  <MassCard mass={ele.mass} />
                  <HeightCard height={ele.height} />
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </div>
      ;
    </ChakraProvider>
  );
}

export default App;
