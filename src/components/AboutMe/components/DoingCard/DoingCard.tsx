import React from 'react';
import { createStyledView } from '../../../StyledBuilder';
import { createStyledText } from '../../../StyledBuilder';

interface DoingCardProps {
  description: string;
  squared?: boolean;
}
export const DoingCard = (props: DoingCardProps) => {
  const { description, squared } = props;

  return (
    <Container>
      {/*  */}
      <Description>{description}</Description>
      <Row>
        {/*  */}
        <InfoGroup>
          {/*  */}
          <Info>Titulo do livro</Info>
          <Info>Autor do livro</Info>
        </InfoGroup>

        {/*  */}
        <CoverContainer>
          {!squared && <Retangle />}
          {!!squared && <Square />}
        </CoverContainer>
      </Row>
    </Container>
  );
};

const Container = createStyledView({
  borderWidth: 1,
  rowGap: 23,
  padding: 19,
  height: 228,
  overflow: 'hidden',
});

const Description = createStyledText({
  fontSize: 14,
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderWidth: 1,
  alignSelf: 'flex-start',
});

const Row = createStyledView({
  flexDirection: 'row',
  columnGap: 36,
});

const InfoGroup = createStyledView({
  rowGap: 3,
});

const Info = createStyledText({
  fontSize: 14,
});

const CoverContainer = createStyledView({
  paddingTop: 23,
});

const Retangle = createStyledView({
  width: 97,
  height: 144,
  backgroundColor: '#B1B2B5',
});

const Square = createStyledView({
  width: 116,
  aspectRatio: 1,
  backgroundColor: '#B1B2B5',
});
