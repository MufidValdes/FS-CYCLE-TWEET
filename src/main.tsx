import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/chakra-theme.ts";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store/store.ts";
// Membuat instance QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
