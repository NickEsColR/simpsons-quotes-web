import styled from "styled-components";

export const Character = ({ dataCharacter }) => {
  const { quote, character, image } = dataCharacter;

  return (
    <ContentCharacter>
      <Title>{character}</Title>
      <ContainerImage>
        <Image src={image} alt={character} />
      </ContainerImage>
      <PhraseText>{quote}</PhraseText>
    </ContentCharacter>
  );
};

const ContentCharacter = styled.div`
  padding: 20px;
  border: 1px solid #294fa0d2;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;
  background-color: #e9c46a;
  box-shadow: -5px -5px 10px #294fa0c5;

  &:hover {
    filter: brightness(40%);
  }
`;

const Title = styled.h2`
  color: #264653;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

const ContainerImage = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 130px;
  height: auto;
`;

const PhraseText = styled.h4`
  color: #294fa0d2;
  height: 100px;
`;
