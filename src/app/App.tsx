import "./App.css";
import { AppRouter } from "./AppRouter";
import { AppProvider } from "./AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
