import React, { useEffect, useState } from 'react';
import { validateCurrentData } from '../../utils/schemes/currentDataScheme';
import { createStyledView } from '../StyledBuilder';
import { createStyledText } from '../StyledBuilder';
import { DoingCard } from './components/DoingCard/DoingCard';
import { ENV } from '../../utils/env';
import type { CurrentData } from '../../utils/schemes/currentDataScheme';

export const AboutMe = () => {
  const [doing, setDoing] = useState<CurrentData>();
  useEffect(() => {
    fetch(ENV.EXPO_PUBLIC_CurrentData + '?' + Date.now() + '')
      .then(v => v.json())
      .then(v => validateCurrentData(v))
      .then(v => {
        if (v[1].length > 0) {
          // console.error(v[1]);
          return;
        }
        setDoing(v[0]);
      });
  }, []);
  return (
    <Container id={'about'}>
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
        <DoingCard
          description="O que estou lendo"
          imageUrl={doing?.doing[0].bookCover ?? ''}
          artist={doing?.doing[0].bookAuthor ?? ''}
          work={doing?.doing[0].bookTitle ?? ''}
        />
        <DoingCard
          description="O que estou estudando"
          imageUrl={doing?.doing[1].bookCover ?? ''}
          artist={doing?.doing[1].bookAuthor ?? ''}
          work={doing?.doing[1].bookTitle ?? ''}
        />
        <DoingCard
          description="O que estou ouvindo"
          squared
          imageUrl={doing?.doing[2].albumCover ?? ''}
          artist={doing?.doing[2].songArtist ?? ''}
          work={doing?.doing[2].songTitle ?? ''}
        />
      </DoingGroup>
    </Container>
  );
};

const SectionTitle = createStyledText({
  fontSize: 48,
});

const InfoGroup = createStyledView({});

const DoingGroup = createStyledView({
  justifyContent: 'space-between',
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
