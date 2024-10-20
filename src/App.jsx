import Filter from "./Filter";

import "./App.css";
import { useState } from "react";

function App() {
  const [episode, setEpisode] = useState(1);

  return (
    <>
      <header className="hero">
        <h1 className="hero__heading">
          La Verdadera Historia Del Cine Mexicano
        </h1>
        <p className="hero__description">
          Acompaña al Profesor Francisco y a la Licenciada Doris a conocer el
          surgimiento del cine en México, desde los primeros cortometrajes hasta
          llegar a la <strong>Época de Oro del cine mexicano</strong>.
        </p>
      </header>
      <main>
        <Filter episode={episode} setEpisode={setEpisode} />
        <section className="gallery"></section>
      </main>
    </>
  );
}

export default App;
