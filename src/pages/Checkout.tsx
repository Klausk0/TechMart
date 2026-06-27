import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

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
          <h2 className="fw-bold mb-4">🚚 Checkout</h2>

          <div className="row">
            {/* Delivery Form */}

            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Delivery Information</h4>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>

                      <input className="form-control" placeholder="John Doe" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number</label>

                      <input
                        className="form-control"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      className="form-control"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Delivery Address</label>

                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">City</label>

                      <input className="form-control" placeholder="Mumbai" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">PIN Code</label>

                      <input className="form-control" placeholder="400001" />
                    </div>
                  </div>
                </div>
              </div>
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
                  <h4 className="fw-bold mb-4">Order Summary</h4>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Items</span>
                    <span>See Cart</span>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery</span>
                    <span className="text-success">FREE</span>
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <span>Secure Checkout</span>
                    <span>🔒</span>
                  </div>

                  <hr />

                  <button
                    className="btn btn-warning btn-lg fw-bold w-100"
                    onClick={() => navigate("/payment")}
                  >
                    Continue To Payment
                  </button>

                  <button
                    className="btn btn-outline-primary w-100 mt-3"
                    onClick={() => navigate("/cart")}
                  >
                    Back To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
