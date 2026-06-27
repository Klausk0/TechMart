import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { supabase } from "../services/supabase";

type NavbarProps = {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({
  searchTerm = "",
  setSearchTerm,
}: NavbarProps) {
  const items = useCartStore((state) => state.items);

  const navigate = useNavigate();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      {/* Main Navbar */}

      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        style={{
          backgroundColor: "#131921",
          minHeight: "82px",
          paddingTop: "12px",
          paddingBottom: "12px",
        }}
      >
        <div className="container-fluid px-4">
          {/* Logo */}

          <Link
            className="navbar-brand fw-bold"
            to="/home"
            style={{
              color: "#FFD814",
              fontSize: "2rem",
              letterSpacing: "1px",
            }}
          >
            TechMart
          </Link>

          {/* Mobile Toggle */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search */}

            <form
              className="d-flex mx-auto"
              style={{
                width: "55%",
                maxWidth: "700px",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm?.(e.target.value)}
                style={{
                  height: "48px",
                  fontSize: "1rem",
                  borderRadius: "8px 0 0 8px",
                }}
              />

              <button
                className="btn"
                type="submit"
                style={{
                  backgroundColor: "#FFD814",
                  width: "65px",
                  fontWeight: "bold",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                🔍
              </button>
            </form>

            {/* Navigation */}

            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link px-3"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.05rem",
                  }}
                  to="/home"
                >
                  🏠 Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link px-3"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.05rem",
                  }}
                  to="/orders"
                >
                  📦 Orders
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link position-relative px-3"
                  style={{
                    fontWeight: "600",
                    fontSize: "1.05rem",
                  }}
                  to="/cart"
                >
                  🛒 Cart
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
                    style={{
                      minWidth: "24px",
                      minHeight: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: ".8rem",
                    }}
                  >
                    {totalItems}
                  </span>
                </Link>
              </li>

              <li className="nav-item ms-3">
                <button
                  className="btn btn-warning fw-bold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}

      <div
        style={{
          backgroundColor: "#232F3E",
        }}
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-4 py-2 text-white fw-semibold">
            <span style={{ cursor: "pointer" }}>💻 Laptops</span>

            <span style={{ cursor: "pointer" }}>🎮 Gaming</span>

            <span style={{ cursor: "pointer" }}>🖥 Monitors</span>

            <span style={{ cursor: "pointer" }}>⌨ Keyboards</span>

            <span style={{ cursor: "pointer" }}>🖱 Accessories</span>

            <span style={{ cursor: "pointer" }}>💾 Storage</span>

            <span style={{ cursor: "pointer" }}>⭐ Deals</span>
          </div>
        </div>
      </div>
    </>
  );
}
