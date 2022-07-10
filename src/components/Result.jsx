import styled from "@emotion/styled";
import React from "react";
const Container = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 30px;
`;
const Image = styled.img`
    display: block;
    max-width: 100px;
`
const Price = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Result = ({ result }) => {
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="image" />
      <div>
        <Price>
          El precio es de: <span>{result.PRICE}</span>
        </Price>
        <Text>
          El precio más alto del día: <span>{result.HIGHDAY}</span>
        </Text>
        <Text>
          El precio más bajo del día: <span>{result.LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Última actualización: <span>{result.LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
