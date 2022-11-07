import { extendTheme} from "@chakra-ui/react";


const theme = extendTheme({
  
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors:{
    blue: {
      shop:'#199DBF'
    }
  }
});

export default theme;
