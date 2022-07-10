import { useState } from "react";
import styled from "@emotion/styled";
import ImageCripto from "./img/imagen-criptos.png";
import Form from "./components/Form";
import { useEffect } from "react";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto;
  }
`;
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const quotationCripto = async () => {
        setLoading(true);
        setResult({});
        const endpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.coin}&tsyms=${coins.cripto}`;
        const response = await fetch(endpoint);
        const result = await response.json();
        setResult(result.DISPLAY[coins.coin][coins.cripto]);
        setLoading(false);
      };
      quotationCripto();
    }
  }, [coins]);
  return (
    <>
      <Container>
        <Image src={ImageCripto} alt="imagen criptomonedas"></Image>

        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Form setCoins={setCoins}></Form>

          {loading && <Spinner />}
          {result.PRICE && <Result result={result} />}
        </div>
      </Container>
    </>
  );
}

export default App;
