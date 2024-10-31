import React from 'react';
import { createStyledView } from '../StyledBuilder';
import { createStyledText } from '../StyledBuilder';
import { Linking, Pressable } from 'react-native';

export const Contact = () => {
  return (
    <Container>
      {/* T */}
      <TitleGroup>
        <Title>Contato</Title>
      </TitleGroup>

      {/* B */}
      <ProjectsBoard>
        <Pressable
          onPress={() => Linking.openURL('mailto:Daniel_srs_@hotmail.com')}>
          <ContactTag>
            <ContactTagText>Mail: Daniel_srs_@hotmail.com</ContactTagText>
          </ContactTag>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL('https://github.com/DanielSRS')}>
          <ContactTag>
            <ContactTagText>Github: DanielSRS</ContactTagText>
          </ContactTag>
        </Pressable>
      </ProjectsBoard>
    </Container>
  );
};

const Container = createStyledView({
  rowGap: 64,
  paddingVertical: 76,
  paddingHorizontal: 72,
});

const TitleGroup = createStyledView({
  rowGap: 8,
});

const Title = createStyledText({
  fontSize: 48,
});

const ContactTag = createStyledView({
  paddingHorizontal: 8,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
});

const ContactTagText = createStyledText({
  fontSize: 14,
});

const ProjectsBoard = createStyledView({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  paddingVertical: 92,
});
