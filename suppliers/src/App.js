import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Supplier from "./Supplier";

function App() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, []);

  console.log(suppliers)
  console.log(suppliers[0]?.address?.country);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Contact Title</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, key) => (
            <Supplier key={key} supplier={supplier} />
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
