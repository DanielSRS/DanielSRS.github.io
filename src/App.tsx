import React from 'react';
import { createStyledView } from './components/StyledBuilder';
import { ScrollView } from 'react-native';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';

export const App = () => {
  return (
    <AppContainer>
      <FixedContainer>
        {/* Navbar */}
        <Navbar />
      </FixedContainer>
      <ScrollView contentContainerStyle={alignItems}>
        <Sections>
          {/* Hero */}
          <Hero />

          {/* About me */}
          <AboutMe />

          {/* Projects */}
          <Projects />

          {/* Skills */}
          <Skills />

          {/* Contact */}
          <Contact />
        </Sections>
      </ScrollView>
    </AppContainer>
  );
};

const AppContainer = createStyledView({
  flex: 1,
  backgroundColor: '#000',
});

const FixedContainer = createStyledView({
  // maxWidth: 960,
  // flex: 1,
  // alignSelf: 'center',
  // width: '100%',
  backgroundColor: '#FFFFFF',
});

const Sections = createStyledView({
  maxWidth: 960,
  flex: 1,
  width: '100%',
  backgroundColor: '#FFFFFF',
});

const alignItems = { alignItems: 'center' } as const;
