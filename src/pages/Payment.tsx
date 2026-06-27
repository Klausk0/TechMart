import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function Payment() {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const delivery = 0;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst + delivery;

  const handlePayment = () => {
    alert("Payment Successful! Order Placed.");

    clearCart();

    navigate("/orders");
  };

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
          <h2 className="fw-bold mb-4">💳 Payment</h2>

          <div className="row">
            {/* Payment Options */}

            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Select Payment Method</h4>

                  {[
                    { name: "UPI", icon: "📱" },
                    { name: "Credit Card", icon: "💳" },
                    { name: "Debit Card", icon: "💳" },
                    { name: "Net Banking", icon: "🏦" },
                    { name: "Cash On Delivery", icon: "💵" },
                  ].map((method) => (
                    <div
                      key={method.name}
                      className={`border rounded p-3 mb-3 d-flex align-items-center justify-content-between ${
                        paymentMethod === method.name
                          ? "border-warning bg-warning-subtle"
                          : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        transition: "0.2s",
                      }}
                      onClick={() => setPaymentMethod(method.name)}
                    >
                      <div className="d-flex align-items-center">
                        <span className="fs-4 me-3">{method.icon}</span>

                        <span className="fw-semibold">{method.name}</span>
                      </div>

                      <input
                        type="radio"
                        checked={paymentMethod === method.name}
                        onChange={() => setPaymentMethod(method.name)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  ))}

                  <button
                    className="btn btn-warning btn-lg fw-bold w-100 mt-3"
                    onClick={handlePayment}
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>

            {/* Bill Summary */}

            <div className="col-lg-4">
              <div
                className="card border-0 shadow"
                style={{
                  position: "sticky",
                  top: "100px",
                }}
              >
                <div className="card-body">
                  <h4 className="fw-bold mb-4">Order Summary</h4>

                  {items.map((item) => (
                    <div
                      className="d-flex justify-content-between mb-2"
                      key={item.id}
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>

                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}

                  <hr />

                  <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>GST (18%)</span>
                    <span>₹{gst}</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>Delivery</span>
                    <span className="text-success">FREE</span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between">
                    <h4>Total</h4>

                    <h4 className="text-success">₹{total}</h4>
                  </div>

                  <div className="alert alert-success mt-4 mb-0">
                    🔒 Secure Payment
                    <br />
                    <small>
                      Selected: <strong>{paymentMethod}</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
