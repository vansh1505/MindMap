import './style.css';

export default function Css() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Web Development Club, GTC</h1>
        </header>

        <main>
          <section className="content">
            <p>
              The Web Development Club at GTC fosters innovation, creativity, and collaboration. We explore cutting-edge web technologies, host workshops, hackathons, and projects, empowering all members to learn, grow, and excel in web development.
            </p>
          </section>

          <aside className="sidebar">
            <h2>Projects Title</h2>
            <p>GTC Interviewer dashboard</p>
            <p>Sustainability dashboard project</p>
            <p>Trickster tracker</p>
            <p>Mind map Project</p>
          </aside>
        </main>

        <footer>
          <p>&copy; 2024 All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
}
