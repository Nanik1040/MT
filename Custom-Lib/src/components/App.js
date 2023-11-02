import * as React from "react";
import "./styles.css";
import InputComponent from "./InputComponent";
import GridComponent from "./GridComponent";
import ShipmentDetails from "./ShipmentDetailsGrid";

export default function App({ value, onChange, data, orderData }) {
  return (
    <div className="Libraries">
      <h1>Custom Libraries </h1>
      <InputComponent value={value} onChange={onChange} />
      <GridComponent data={data} />
      <ShipmentDetails orderData={orderData} />
    </div>
  );
}
