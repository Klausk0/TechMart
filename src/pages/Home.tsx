import { useEffect, useState } from "react";
import { Carousel } from "bootstrap";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const element = document.getElementById("heroCarousel");

    if (!element) return;

    const carousel = new Carousel(element, {
      interval: 3500,
      ride: "carousel",
      wrap: true,
      touch: true,
      pause: false,
    });

    carousel.cycle();

    return () => {
      carousel.dispose();
    };
  }, []);
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* HERO CAROUSEL */}
      <div id="heroCarousel" className="carousel slide carousel-fade shadow-lg">
        {/* Indicators */}

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1600"
              className="d-block w-100"
              style={{
                height: "550px",
                objectFit: "cover",
                filter: "brightness(.45)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <span className="badge bg-warning text-dark fs-6 mb-3">
                LIMITED OFFER
              </span>

              <h1 className="display-3 fw-bold">Upgrade Your Gaming Setup</h1>

              <p className="lead">
                Save up to 50% on Gaming Gear, Keyboards & Accessories
              </p>

              <button className="btn btn-warning btn-lg fw-bold px-4">
                Shop Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
              className="d-block w-100"
              style={{
                height: "550px",
                objectFit: "cover",
                filter: "brightness(.45)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <span className="badge bg-info fs-6 mb-3">NEW ARRIVALS</span>

              <h1 className="display-3 fw-bold">Summer Tech Sale</h1>

              <p className="lead">Premium Monitors starting at ₹7,999</p>

              <button className="btn btn-warning btn-lg fw-bold px-4">
                Explore
              </button>
            </div>
          </div>

          {/* Slide 3 */}

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600"
              className="d-block w-100"
              style={{
                height: "550px",
                objectFit: "cover",
                filter: "brightness(.45)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <span className="badge bg-success fs-6 mb-3">BEST SELLERS</span>

              <h1 className="display-3 fw-bold">Developer Essentials</h1>

              <p className="lead">Mechanical Keyboards, SSDs & Monitors</p>

              <button className="btn btn-warning btn-lg fw-bold px-4">
                Browse
              </button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      {/* DEALS */}
      <div
        className="py-5"
        style={{
          background: "linear-gradient(to bottom,#eef4ff,#ffffff)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-4">🔥 Today's Deals</h2>

          <div className="row g-4">
            {[
              ["Gaming Accessories", "40% OFF", "danger"],
              ["Mechanical Keyboards", "Best Seller", "warning"],
              ["Gaming Monitors", "New Arrival", "primary"],
              ["Developer Essentials", "Hot Deals", "success"],
            ].map((deal, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="card border-0 shadow h-100"
                  style={{
                    transition: ".3s",
                  }}
                >
                  <div className="card-body text-center p-4">
                    <h5>{deal[0]}</h5>

                    <span className={`badge bg-${deal[2]} mt-3`}>
                      {deal[1]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FLASH SALE */}
      <div
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(90deg,#131921,#00A8E8)",
        }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold">⚡ Flash Sale</h2>

          <p className="lead">Save up to 60% on selected Gaming Accessories</p>

          <button className="btn btn-warning btn-lg fw-bold px-4">
            Shop Deals
          </button>
        </div>
      </div>
      {/* ================= FEATURED PRODUCTS ================= */}
      <div
        className="py-5"
        style={{
          background: "#F8F9FA",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">⭐ Featured Products</h2>

              <p className="text-muted">
                Our best selling electronics this week
              </p>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary">View All</button>
            </div>
          </div>
          {filteredProducts.length === 0 && (
            <div className="alert alert-warning text-center">
              No products found matching "<strong>{searchTerm}</strong>"
            </div>
          )}
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={product.id}>
                <ProductCard
                  product={{
                    ...product,
                    id: product.id.toString(),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= GAMING PICKS ================= */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">🎮 Gaming Picks</h2>

            <p className="text-muted">Gear built for gaming performance</p>
          </div>

          <button className="btn btn-outline-dark">See More</button>
        </div>

        <div className="row">
          {products.slice(0, 4).map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
              <ProductCard
                product={{
                  ...product,
                  id: product.id.toString(),
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* PROMOTIONAL BANNER */}
      <div
        className="py-5 text-white"
        style={{
          background: "linear-gradient(90deg,#232F3E,#00A8E8)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold">Build Your Dream Setup</h2>

              <p className="lead">
                Premium keyboards, monitors, SSDs and accessories at unbeatable
                prices.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-warning btn-lg fw-bold">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ================= DEVELOPER PICKS ================= */}
      <div
        className="py-5"
        style={{
          background: "#F8F9FA",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">💻 Developer Essentials</h2>

              <p className="text-muted">
                Everything for coding and productivity
              </p>
            </div>

            <button className="btn btn-outline-primary">Browse</button>
          </div>

          <div className="row">
            {products.slice(4, 8).map((product) => (
              <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
                <ProductCard
                  product={{
                    ...product,
                    id: product.id.toString(),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= ACCESSORIES ================= */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">⌨ Accessories</h2>

            <p className="text-muted">Complete your workspace</p>
          </div>

          <button className="btn btn-outline-dark">More Accessories</button>
        </div>

        <div className="row">
          {products.slice(8, 12).map((product) => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
              <ProductCard
                product={{
                  ...product,
                  id: product.id.toString(),
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* ================= WHY TECHMART ================= */}
      <div
        className="py-5"
        style={{
          background: "#EEF5FF",
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <h1>🚚</h1>

              <h5>Fast Delivery</h5>

              <p className="text-muted">Across India</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>🔒</h1>

              <h5>Secure Checkout</h5>

              <p className="text-muted">100% Safe Shopping</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>⭐</h1>

              <h5>Top Rated</h5>

              <p className="text-muted">Quality Products</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1>💬</h1>

              <h5>24/7 Support</h5>

              <p className="text-muted">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
