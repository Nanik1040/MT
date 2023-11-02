import React from "react";
import "./styles.css";

const GridComponent = ({ data }) => {
  return (
    <table className="custom-grid">
      <thead>
        <tr>
          <th>Shipment ID</th>
          <th>Shipment Name</th>
          <th>Shipment pickup time</th>
          <th>Shipment Status</th>
          <th>Shipment Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.time}</td>
            <td>{item.status}</td>
            <td>
              <button>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridComponent;
