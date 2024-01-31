import { Link } from "react-router-dom";

const SearchForm = () => {
  return (
    <form>
      <label htmlFor="climate">
        climate 🌡️
        <select name="climate" id="climate">
          <option value=""></option>
          <option value="warm">warm 🌤️</option>
          <option value="hot">hot ☀️</option>
          <option value="cold">cold ❄️</option>
        </select>
      </label>
      <label htmlFor="departure-airport">
        Departure Airport
        <input id="departure-airport" name="departure-airport" type="text" />
      </label>

      <label htmlFor="departure-date">
        Departure Date 🛫
        <input id="departure-date" name="departure-date" type="date" />
      </label>

      <label htmlFor="return-date">
        Return Date 🛬
        <input id="return-date" name="return-date" type="date" />
      </label>
      <Link to="/destinations">
        <button type="submit">🔍</button>
      </Link>
    </form>
  );
};

export default SearchForm;
