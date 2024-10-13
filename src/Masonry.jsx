import { useState, useEffect, useRef } from "react";

import MiniMasonry from "minimasonry";
import "./Masonry.css";

const Masonry = () => {
  const masonryDiv = useRef();
  const [episode, setEpisode] = useState("all");
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getMovieData();

    async function getMovieData() {
      const res = await fetch("/data.json");
      let data = await res.json();
      if (episode === "all") {
        setResources(data);
      } else {
        data.filter((element) => element.episode == episode);
        setResources(data);
      }
    }

    const miniMasonry = new MiniMasonry({
      container: masonryDiv.current,
      gutter: 24,
    });
  }, [episode]);

  return (
    <main className="masonry" ref={masonryDiv}>
      {resources.map((element) => {
        return (
          <img
            className="masonry__item"
            src={element.thumbnail}
            alt={element.title}
            key={element.id}
          />
        );
      })}
    </main>
  );
};

export default Masonry;
