import React from 'react';
import { createStyledView } from '../StyledBuilder';
import { createStyledText } from '../StyledBuilder';
import { DoingCard } from './components/DoingCard/DoingCard';

export const AboutMe = () => {
  return (
    <Container>
      {/*  */}
      <AboutArea>
        {/*  */}
        <Circle />

        {/*  */}
        <TextGroup>
          {/*  */}
          <SectionTitle>Sobre mim</SectionTitle>
          {/*  */}
          <InfoGroup>
            <Info>
              Sou Daniel Santa Rosa, engenheiro de computação com 6 anos de
              experiência em diversos segmentos, incluindo front-end, mobile,
              desktop, back-end, sistemas embarcados, IoT e microcontroladores.
              Especialista em desenvolvimento mobile com React Native, com 4
              anos de atividade.
            </Info>
            <Info> </Info>
            <Info>
              Atualmente, estou focado em Programação Funcional, Compiladores e
              Programação de Kernel (sistemas operacionais) que em breve
              pretendo compartilhar com a comunidade
            </Info>
            <Info> </Info>
            <Info>
              No meu tempo livre, adoro explorar novas tecnologias, projetos
              open source, ler diferentes livros{' '}
              <InfoLineThrough>(as vezes ao mesmo tempo)</InfoLineThrough>
            </Info>
            <Info> </Info>
          </InfoGroup>
        </TextGroup>
      </AboutArea>

      {/*  */}
      <DoingGroup>
        {/*  */}
        <DoingCard description="O que estou lendo" />
        <DoingCard description="O que estou estudando" />
        <DoingCard description="O que estou ouvindo" squared />
      </DoingGroup>
    </Container>
  );
};

const SectionTitle = createStyledText({
  fontSize: 48,
});

const InfoGroup = createStyledView({});

const DoingGroup = createStyledView({
  columnGap: 30,
  flexDirection: 'row',
});

const Info = createStyledText({
  fontSize: 14,
});
const InfoLineThrough = createStyledText({
  fontSize: 14,
  textDecorationLine: 'line-through',
});

const Container = createStyledView({
  rowGap: 57,
  paddingVertical: 75,
  paddingHorizontal: 46,
});

const TextGroup = createStyledView({
  rowGap: 57,
  flex: 1,
  maxWidth: 463,
});

const AboutArea = createStyledView({
  flexDirection: 'row',
  columnGap: 90,
});

const Circle = createStyledView({
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: '#B1B2B5',
});
