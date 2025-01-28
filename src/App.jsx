import "./App.css";
import spacejoy from "./assets/spacejoy.jpg";
import chevron from "./assets/chevron.png";

function App() {
  return (
    <section className="card">
      <img src={spacejoy} alt="" />
      <article>
        <p className="label">Interior</p>
        <h3>Top 5 Living Room Inspirations</h3>
        <p className="description">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </p>
        <a href="#">
          Read more <img className="chevron" src={chevron} alt="" />{" "}
        </a>
      </article>
    </section>
  );
}

export default App;
