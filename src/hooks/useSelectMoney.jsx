import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: white;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 10px;
`;

const useSelectMoney = (label, options) => {
  const [state, setState] = useState("");

  const SelectMoney = () => (
    <>
      <Label> {label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMoney];
};

export default useSelectMoney;
