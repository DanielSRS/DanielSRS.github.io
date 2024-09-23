import { AboutMe } from "./components/AboutMe/AboutMe";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { createStyledView } from "./components/StyledBuilder";

export const App = () => {
  return (
    <AppContainer>
      <Sections>
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About me */}
        <AboutMe />
      </Sections>
    </AppContainer>
  )
};

const AppContainer = createStyledView({
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#000',
});

const Sections = createStyledView({
  maxWidth: 960,
  flex: 1,
  width: '100%',
  backgroundColor: '#FFFFFF',
});