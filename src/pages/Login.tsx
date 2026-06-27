import { useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");
    navigate("/home");
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
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900"
            className="img-fluid rounded shadow-lg"
            style={{
              maxHeight: "450px",
              objectFit: "cover",
            }}
            alt="Tech"
          />

          <h1 className="mt-4 fw-bold display-4">TechMart</h1>

          <p className="lead">Premium Electronics Marketplace</p>

          <p>
            Discover Gaming Gear, Developer Essentials, Monitors, Accessories
            and more.
          </p>
        </div>

        {/* Login Card */}

        <div className="col-lg-4 col-md-8">
          <div
            className="card border-0 shadow-lg"
            style={{
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Welcome Back 👋</h2>

                <p className="text-muted">Login to continue shopping</p>
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-warning w-100 fw-bold mb-3"
                onClick={handleLogin}
              >
                Login
              </button>

              <hr />

              <div className="text-center">
                <p className="mb-2">Don't have an account?</p>

                <Link to="/register" className="btn btn-outline-primary w-100">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
