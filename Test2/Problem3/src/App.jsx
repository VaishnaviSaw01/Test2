import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Fridge", price: 10000 },
  { id: 3, name: "AC", price: 30000 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const toggleCart = (product) => {
    const isInCart = cart.includes(product.id);

    if (isInCart) {
      setCart(cart.filter((id) => id !== product.id));
      setTotal(total - product.price);
    } else {
      setCart([...cart, product.id]);
      setTotal(total + product.price);
    }
  };

  return (
    <div className="container">
      <h1>Product List</h1>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => toggleCart(product)}
                  className={cart.includes(product.id) ? "remove" : "add"}
                >
                  {cart.includes(product.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-box">
  Total Price: {total}
</div>

    </div>
  );
}

export default App;
