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
    </form>
  );
};

export default SearchForm;
