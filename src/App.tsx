import React from 'react';
import { createStyledView } from './components/StyledBuilder';
import { ScrollView } from 'react-native';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

export const App = () => {
  return (
    <AppContainer>
      <ScrollView contentContainerStyle={alignItems}>
        <Sections>
          {/* Navbar */}
          <Navbar />

          {/* Hero */}
          <Hero />

          {/* About me */}
          <AboutMe />

          {/* Projects */}
          <Projects />

          {/* Skills */}
          <Skills />
        </Sections>
      </ScrollView>
    </AppContainer>
  );
};

const AppContainer = createStyledView({
  flex: 1,
  backgroundColor: '#000',
});

const Sections = createStyledView({
  maxWidth: 960,
  flex: 1,
  width: '100%',
  backgroundColor: '#FFFFFF',
});

const alignItems = { alignItems: 'center' } as const;
