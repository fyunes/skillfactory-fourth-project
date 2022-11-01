import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react';

const App = () => {
  return (
    <Box className="App">
      <Grid
        templateAreas={`'navbar'
                        'main'
                        'footer'`}
        gridTemplateRows={{ base: '100px auto 100px',
                            sm:   '150px auto 150px'}}
        gridTemplateColumns={'1fr'}
        bg='grey'        
      >
        <GridItem area={'navbar'}>
          <NavBar />
        </GridItem>
        <GridItem bg='maroon.100' area={'main'}>
          Main
        </GridItem>
        <GridItem bg='red.100' area={'footer'}>
          <Footer />
        </GridItem>        
      </Grid>
    </Box>
  );
};

export default App;
