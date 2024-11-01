import React from 'react';
import { createStyledView } from '../StyledBuilder';
import { createStyledText } from '../StyledBuilder';

interface Proportions {
  height: number;
  width?: number;
  aspectRatio?: number;
}

const R1 = {
  height: 138,
  aspectRatio: 149 / 138,
} satisfies Proportions;
const R2 = {
  height: 138,
  aspectRatio: 643 / 138,
} satisfies Proportions;
const R3 = {
  height: 276,
  aspectRatio: 286 / 276,
} satisfies Proportions;
const R4 = {
  height: 276,
  aspectRatio: 167 / 276,
} satisfies Proportions;
const R5 = {
  height: 126,
  aspectRatio: 311 / 126,
} satisfies Proportions;

export const Skills = () => {
  return (
    <Container id="skills">
      {/* T */}
      <TitleGroup>
        <Title>Habilidades</Title>
      </TitleGroup>

      {/* Skills */}
      <SkillsGroup>
        <Row>
          <Rectangle style={R1} />
          <Rectangle style={R2} />
        </Row>
        <Row>
          <Rectangle style={R3} />
          <Rectangle style={R4} />
          <Column>
            <Rectangle style={R5} />
            <Rectangle style={R5} />
          </Column>
        </Row>
      </SkillsGroup>
    </Container>
  );
};

const GAP = 22;

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

const Row = createStyledView({
  flexDirection: 'row',
  columnGap: GAP,
});

const Column = createStyledView({
  rowGap: GAP,
});
const SkillsGroup = createStyledView({
  rowGap: GAP,
});

const Rectangle = createStyledView({
  backgroundColor: '#B1B2B5',
});
