function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <p className="services-desc">
        We provide the best digital solutions
        for your business.
      </p>

      <div className="service-container">

        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>We create modern and responsive websites.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>App Development</h3>
          <p>We build user-friendly mobile applications.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>We help businesses grow online.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;