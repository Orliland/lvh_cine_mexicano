import { useEffect, useRef } from "react";

import MiniMasonry from "minimasonry";
import "./Masonry.css";

const Masonry = () => {
  const masonryDiv = useRef();

  useEffect(() => {
    const miniMasonry = new MiniMasonry({
      container: masonryDiv.current,
      gutter: 16,
    });
  }, []);

  return <main className="masonry" ref={masonryDiv}></main>;
};

export default Masonry;
