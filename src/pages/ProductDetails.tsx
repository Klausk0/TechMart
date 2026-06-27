import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h2>❌ Product Not Found</h2>
        </div>
      </>
    );
  }

  const originalPrice = Math.round(product.price * 1.3);
  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100,
  );

  return (
    <>
      <Navbar />

      <div
        className="py-5"
        style={{
          background: "#F5F7FA",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="card border-0 shadow-lg">
            <div className="row g-0">
              {/* Product Image */}

              <div className="col-lg-6 text-center p-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Product Details */}

              <div className="col-lg-6 p-5">
                <span className="badge bg-danger mb-3">{discount}% OFF</span>

                <h1 className="fw-bold">{product.name}</h1>

                <div
                  className="my-3"
                  style={{
                    color: "#FFC107",
                    fontSize: "1.2rem",
                  }}
                >
                  ★★★★★
                  <span
                    className="text-muted ms-2"
                    style={{ fontSize: ".9rem" }}
                  >
                    (248 Reviews)
                  </span>
                </div>

                <div className="mb-4">
                  <span className="display-5 fw-bold text-success">
                    ₹{product.price}
                  </span>

                  <br />

                  <span className="text-muted text-decoration-line-through fs-5">
                    ₹{originalPrice}
                  </span>
                </div>

                <p className="lead">{product.description}</p>

                <hr />

                <ul className="list-unstyled">
                  <li className="mb-2">✅ In Stock</li>

                  <li className="mb-2">🚚 Free Delivery</li>

                  <li className="mb-2">🔒 Secure Checkout</li>

                  <li className="mb-4">↩ 7-Day Replacement</li>
                </ul>

                <button
                  className="btn btn-warning btn-lg fw-bold w-100"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add To Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Information */}

          <div className="card border-0 shadow mt-5">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-4">Product Details</h3>

              <p>{product.description}</p>

              <table className="table">
                <tbody>
                  <tr>
                    <th>Brand</th>
                    <td>TechMart</td>
                  </tr>

                  <tr>
                    <th>Category</th>
                    <td>Electronics</td>
                  </tr>

                  <tr>
                    <th>Warranty</th>
                    <td>1 Year</td>
                  </tr>

                  <tr>
                    <th>Delivery</th>
                    <td>Free Across India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
