
function HireDevelopers() {
  const developers = [
    {
      icon: "💻",
      title: "Hire Web Developers",
      description: "Build modern and responsive websites for your business."
    },
    {
      icon: "🐍",
      title: "Hire Python Developers",
      description: "Get powerful Python solutions for your projects."
    },
    {
      icon: "🤖",
      title: "Hire AI Developers",
      description: "Create smart AI-powered applications and solutions."
    },
    {
      icon: "🎨",
      title: "Hire UI/UX Designers",
      description: "Design beautiful and user-friendly digital experiences."
    }
  ];

  return (
    <section className="hire-section">
      <div className="hire-heading">
        <h2>Hire Our Expert Developers</h2>
        <p>Build your next big idea with our talented team.</p>
      </div>

      <div className="hire-container">
        {developers.map((developer, index) => (
          <div className="hire-card" key={index}>
            <div className="hire-icon">{developer.icon}</div>
            <h3>{developer.title}</h3>
            <p>{developer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HireDevelopers;
