import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Registration successful! Please check your email to verify your account.",
    );
  };

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#131921,#232F3E,#00A8E8)",
      }}
    >
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Left Side */}

        <div className="col-lg-6 text-center text-white d-none d-lg-block">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
            className="img-fluid rounded shadow-lg"
            style={{
              maxHeight: "450px",
              objectFit: "cover",
            }}
            alt="Tech"
          />

          <h1 className="display-4 fw-bold mt-4">Join TechMart</h1>

          <p className="lead">Premium Electronics Marketplace</p>

          <p>
            Create an account to explore gaming gear, developer essentials,
            monitors and more.
          </p>
        </div>

        {/* Register Card */}

        <div className="col-lg-4 col-md-8">
          <div
            className="card border-0 shadow-lg"
            style={{
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Create Account 🚀</h2>

                <p className="text-muted">Start shopping with TechMart</p>
              </div>

              <input
                className="form-control mb-3"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-warning w-100 fw-bold mb-3"
                onClick={handleRegister}
              >
                Create Account
              </button>

              <hr />

              <div className="text-center">
                <p className="mb-2">Already have an account?</p>

                <Link to="/" className="btn btn-outline-primary w-100">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
