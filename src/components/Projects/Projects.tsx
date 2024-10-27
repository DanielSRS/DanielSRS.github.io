import React from 'react';
import { createStyledView } from '../StyledBuilder';
import { createStyledText } from '../StyledBuilder';
import { Image } from 'react-native';

export const Projects = () => {
  return (
    <Container>
      {/* T */}
      <TitleGroup>
        <Title>Projetos</Title>
        <TagsGroup>
          <Tag>
            <TagText>Mobile</TagText>
          </Tag>
          <Tag>
            <TagText>Web</TagText>
          </Tag>
          <Tag>
            <TagText>Desktop</TagText>
          </Tag>
          <Tag>
            <TagText>Iot</TagText>
          </Tag>
          <Tag>
            <TagText>Embedded</TagText>
          </Tag>
        </TagsGroup>
      </TitleGroup>

      {/* B */}
      <ProjectsBoard>
        <ProjectCard name="DoA" />
        <ProjectCard name="Clinical Management" />
        <ProjectCard name="Udchat" />
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

const TagsGroup = createStyledView({
  flexDirection: 'row',
  columnGap: 8,
});

const Tag = createStyledView({
  paddingHorizontal: 8,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
});

const TagText = createStyledText({
  fontSize: 14,
});

const ProjectsBoard = createStyledView({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  paddingVertical: 92,
});

const ProjectCardContainer = createStyledView({
  rowGap: 8,
});

const ProjectCardImageContainer = createStyledView({
  rowGap: 8,
  width: 177,
  height: 210,
  borderWidth: 1,
  backgroundColor: '#B1B2B5',
});

const ProjectCardText = createStyledText({
  fontSize: 14,
});

interface ProjectCardProps {
  name: string;
}
const ProjectCard = (props: ProjectCardProps) => {
  const { name } = props;

  const img = { flex: 1 } as const;
  return (
    <ProjectCardContainer>
      <ProjectCardImageContainer>
        <Image style={img} />
      </ProjectCardImageContainer>
      <ProjectCardText>{name}</ProjectCardText>
    </ProjectCardContainer>
  );
};
