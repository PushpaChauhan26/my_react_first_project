function Portfolio() {
  const projects = [
    {
      title: "Website Development",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
    },
    {
      title: "Digital Marketing",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600"
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-heading">
        <h2>Our Portfolio</h2>
        <p>Explore some of our latest projects</p>
      </div>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
