import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();

  const orderId = "TM" + Math.floor(100000 + Math.random() * 900000);

  const today = new Date().toLocaleDateString();

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
          {/* Success Card */}

          <div className="card border-0 shadow text-center mb-4">
            <div className="card-body p-5">
              <div
                className="mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "#198754",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3rem",
                }}
              >
                ✓
              </div>

              <h2 className="fw-bold text-success">
                Order Successfully Placed!
              </h2>

              <p className="lead text-muted">
                Thank you for shopping with TechMart.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Order Details */}

            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="fw-bold mb-4">Order Details</h4>

                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Order ID</th>
                        <td>{orderId}</td>
                      </tr>

                      <tr>
                        <th>Order Date</th>
                        <td>{today}</td>
                      </tr>

                      <tr>
                        <th>Status</th>
                        <td>
                          <span className="badge bg-warning text-dark">
                            Processing
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <th>Estimated Delivery</th>
                        <td>3 - 5 Business Days</td>
                      </tr>

                      <tr>
                        <th>Payment</th>
                        <td className="text-success">Paid Successfully</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Actions */}

            <div className="col-lg-4">
              <div
                className="card border-0 shadow"
                style={{
                  position: "sticky",
                  top: "100px",
                }}
              >
                <div className="card-body">
                  <h4 className="fw-bold mb-4">What's Next?</h4>

                  <div className="alert alert-info">
                    📦 Your order is being prepared for shipment.
                  </div>

                  <button
                    className="btn btn-warning btn-lg fw-bold w-100 mb-3"
                    onClick={() => navigate("/home")}
                  >
                    Continue Shopping
                  </button>

                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => window.print()}
                  >
                    Download Receipt
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
