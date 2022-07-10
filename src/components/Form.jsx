import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMoney from "../hooks/useSelectMoney";
import { coins } from "../data/coins";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #7a7dfe;
  }
`;

const Form = ({ setCoins }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const consultApi = async () => {
      const endpoint =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await fetch(endpoint);
      const result = await response.json();

      const arrayCriptos = result.Data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
      });

      setCriptos(arrayCriptos);
    };
    consultApi();
  }, []);

  const [selectedCoin, SelectCoin] = useSelectMoney("Elige tu Moneda", coins);
  const [selectedCripto, SelectCripto] = useSelectMoney(
    "Elige tu Criptomoneda",
    criptos
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([selectedCoin, selectedCripto].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({
      coin: selectedCoin,
      cripto: selectedCripto,
    });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoin />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
