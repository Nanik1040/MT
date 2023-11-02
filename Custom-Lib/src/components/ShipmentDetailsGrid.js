import React from "react";
import "./styles.css";

const ShipmentDetails = ({ orderData }) => {
  return (
    <>
      <div>
        {" "}
        <h1>Selected Shipment Details</h1>
        <table className="custom-grid">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order By</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShipmentDetails;
