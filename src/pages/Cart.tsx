import Navbar from "../components/Navbar";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
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
          <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>

          {items.length === 0 ? (
            <div className="card shadow border-0 text-center p-5">
              <h1>🛒</h1>

              <h3>Your cart is empty</h3>

              <p className="text-muted">Add some products to start shopping.</p>

              <button
                className="btn btn-warning fw-bold mt-3"
                onClick={() => navigate("/home")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="row">
              {/* Cart Items */}

              <div className="col-lg-8">
                {items.map((item) => (
                  <div key={item.id} className="card border-0 shadow-sm mb-4">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-2 text-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid"
                            style={{
                              maxHeight: "90px",
                              objectFit: "contain",
                            }}
                          />
                        </div>

                        <div className="col-md-4">
                          <h5 className="fw-bold">{item.name}</h5>

                          <p className="text-muted mb-0">Premium Electronics</p>
                        </div>

                        <div className="col-md-2 text-success fw-bold">
                          ₹{item.price}
                        </div>

                        <div className="col-md-2">
                          Qty:
                          <span className="badge bg-primary ms-2">
                            {item.quantity}
                          </span>
                        </div>

                        <div className="col-md-2 text-end">
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}

              <div className="col-lg-4">
                <div
                  className="card border-0 shadow"
                  style={{
                    position: "sticky",
                    top: "100px",
                  }}
                >
                  <div className="card-body">
                    <h3 className="fw-bold mb-4">Order Summary</h3>

                    <div className="d-flex justify-content-between mb-3">
                      <span>Items</span>

                      <span>{items.length}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <span>Delivery</span>

                      <span className="text-success">FREE</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-4">
                      <h4>Total</h4>

                      <h4 className="text-success">₹{total}</h4>
                    </div>

                    <button
                      className="btn btn-warning btn-lg fw-bold w-100"
                      onClick={() => navigate("/checkout")}
                    >
                      Proceed to Checkout
                    </button>

                    <button
                      className="btn btn-outline-primary w-100 mt-3"
                      onClick={() => navigate("/home")}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
