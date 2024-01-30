const SearchForm = () => {
  return (
    <form>
      <label htmlFor="climate">
        climate
        <select name="climate" id="climate">
          <option value=""></option>
          <option value="warm">warm</option>
          <option value="hot">hot</option>
          <option value="cold">cold</option>
        </select>
      </label>
      <label htmlFor="departure">
        Departure Airport
        <input id="departure" name="departure" type="text" />
      </label>

      <label htmlFor="start-date">
        Departure Date
        <input id="start-date" name="start-date" type="date" />
      </label>

      <label htmlFor="end-date">
        Return Date
        <input id="end-date" name="end-date" type="date" />
      </label>
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchForm;
