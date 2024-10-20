import { useState } from "react";
import "./Filter.css";

const Filter = ({ episode, setEpisode }) => {
  const [showOptions, setShowOptions] = useState(false);
  const episodes = [1];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter">
      <button
        className="filter__select"
        onClick={() => setShowOptions(!showOptions)}
      >
        Episodio {episode}
      </button>
      <ul
        className={`filter__options ${
          !showOptions && "filter__options--hidden"
        }`}
      >
        {episodes.map((e, key) => {
          return (
            <li
              className="filter__option"
              key={key}
              onClick={() => {
                setShowOptions(!showOptions);
                setEpisode(e);
              }}
            >
              Episodio {e}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default Filter;
