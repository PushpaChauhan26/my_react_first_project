
function Products() {
  return (
    <section className="products">

      <h2>Our Products</h2>

      <p className="products-desc">
        Explore our innovative products designed
        to grow your business.
      </p>

      <div className="products-container">

        <div className="product-card">
          <div className="product-icon">💼</div>
          <h3>CRM Software</h3>
          <p>
            Manage customers and improve
            your business relationships.
          </p>
          <button>Learn More</button>
        </div>

        <div className="product-card">
          <div className="product-icon">📋</div>
          <h3>Project Management</h3>
          <p>
            Manage projects and track
            your team's progress easily.
          </p>
          <button>Learn More</button>
        </div>

        <div className="product-card">
          <div className="product-icon">📊</div>
          <h3>Business Analytics</h3>
          <p>
            Analyze business data and
            make smarter decisions.
          </p>
          <button>Learn More</button>
        </div>

      </div>
    </section>
  );
}

export default Products;
