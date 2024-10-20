import "./Filter.css";

const Filter = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="filter">
      <label htmlFor="selectEpisode" className="filter__label">
        <select id="selectEpisode" className="filter__select">
          <option value="1">Episode 1</option>
        </select>
      </label>
    </form>
  );
};

export default Filter;
