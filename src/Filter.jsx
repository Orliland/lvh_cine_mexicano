const Filter = ({ episode, onSelectEpisode }) => {
  const episodes = ["all", 1, 2, 3, 4, 5, 6];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter">
      <label htmlFor="selectEpisode" className="filter__label">
        Episodio
        <select
          id="selectEpisode"
          className="filter__select"
          defaultValue={episode}
          onChange={(e) => {
            onSelectEpisode(e.target.value);
          }}
        >
          {episodes.map((e, index) => {
            return (
              <option key={e} value={e}>
                {e == "all" ? "Todos" : `Episodio ${index}`}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

export default Filter;
