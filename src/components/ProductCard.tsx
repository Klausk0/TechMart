import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const originalPrice = Math.round(product.price * 1.3);
  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100,
  );

  return (
    <div
      className="card h-100 border-0 shadow-sm"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        transition: "0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.10)";
      }}
    >
      {/* Discount Badge */}

      <span
        className="badge bg-danger position-absolute m-2"
        style={{
          zIndex: 10,
          fontSize: "0.85rem",
        }}
      >
        {discount}% OFF
      </span>

      {/* Wishlist Icon */}

      <button
        className="btn btn-light position-absolute"
        style={{
          right: "10px",
          top: "10px",
          borderRadius: "50%",
          zIndex: 10,
          width: "40px",
          height: "40px",
        }}
      >
        🤍
      </button>

      {/* Product Image */}

      <div
        style={{
          background: "#fff",
          padding: "20px",
        }}
      >
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{
            height: "220px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Product Info */}

      <div className="card-body d-flex flex-column">
        <h5
          className="fw-bold"
          style={{
            minHeight: "55px",
          }}
        >
          {product.name}
        </h5>

        {/* Rating */}

        <div
          className="mb-2"
          style={{
            color: "#FFC107",
            fontSize: "0.95rem",
          }}
        >
          ★★★★★
          <span
            className="text-muted ms-2"
            style={{
              fontSize: ".85rem",
            }}
          >
            (248)
          </span>
        </div>

        {/* Price */}

        <div className="mb-2">
          <span className="fs-4 fw-bold text-success">₹{product.price}</span>

          <br />

          <small className="text-muted text-decoration-line-through">
            ₹{originalPrice}
          </small>
        </div>

        {/* Delivery */}

        <small className="text-success mb-3">✔ FREE Delivery</small>

        {/* Button */}

        <Link
          to={`/product/${product.id}`}
          className="btn btn-warning fw-bold mt-auto"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
