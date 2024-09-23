import { Navbar } from "./components/Navbar/Navbar";
import { createStyledView } from "./components/StyledBuilder";

export const App = () => {
  return (
    <AppContainer>
      <Navbar />
      {/*  */}
    </AppContainer>
  )
};

const AppContainer = createStyledView({ flex: 1 });