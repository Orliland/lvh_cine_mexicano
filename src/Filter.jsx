import { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const episodes = ["Episodio 1"];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter">
      <button
        className="filter__select"
        onClick={() => setShowOptions(!showOptions)}
      >
        Episodio 1
      </button>
      <ul
        className={`filter__options ${
          !showOptions && "filter__options--hidden"
        }`}
      >
        {episodes.map((episode, key) => {
          return (
            <li
              className="filter__option"
              key={key}
              onClick={() => setShowOptions(!showOptions)}
            >
              {episode}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default Filter;
