import { createStyledView } from "../StyledBuilder";
import { createStyledText } from "../StyledBuilder";

export const Hero = () => {
  return (
    <CoverContainer>
      <PresentationGroup>
        <MyName>Daniel Santa Rosa</MyName>
        <Abstract>6 anos criando coisas legais no front-end, mobile, desktop, back-end, sistemas embarcados, IoT e em microcontroladores.
        </Abstract>
      </PresentationGroup>
      <Circle />
    </CoverContainer>
  );
};

const PresentationGroup = createStyledView({
  rowGap: 12,
  justifyContent: 'center',
});

const MyName = createStyledText({
  fontSize: 48,
});

const Abstract = createStyledText({
  fontSize: 12,
  maxWidth: 364,
});

const CoverContainer = createStyledView({
  flexDirection: 'row',
  paddingVertical: 260,
  paddingHorizontal: 72,
  columnGap: 182,
});

const Circle = createStyledView({
  width: 300,
  height: 300,
  borderRadius: 150,
  backgroundColor: '#B1B2B5',
});