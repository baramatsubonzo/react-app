import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>ボタン</Button>
      <p>aaaaa</p>
    </ChakraProvider>
  );
}