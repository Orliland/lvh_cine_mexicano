import { useState, useEffect, useRef } from "react";

import macy from "macy";
import "./Masonry.css";

const Masonry = ({ episode }) => {
  const masonryDiv = useRef();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    if (resources.length == 0) {
      getMovieData();
    }

    async function getMovieData() {
      const res = await fetch("/data.json");
      let data = await res.json();
      setResources(data);
    }

    const masonry = new macy({
      container: masonryDiv.current,
      margin: 24,
      columns: 3,
    });
  }, [episode]);

  const elements = resources.filter((e) => {
    if (episode == "all") {
      return e;
    } else {
      return episode == e.episode;
    }
  });

  return (
    <main className="masonry" ref={masonryDiv}>
      {elements.map((element) => {
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
