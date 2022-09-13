import React from "react";

function Supplier({ supplier }) {
  return (
    <tr className={supplier.adress?.country == "Japan" ? "japan" : null}>
      <th scope="row">{supplier.id}</th>
      <td>{supplier.companyName}</td>
      <td>{supplier.contactName}</td>
      <td>{supplier.contactTitle}</td>
      <td>{supplier.address?.country}</td>
    </tr>
  );
}

export default Supplier;
