import SearchForm from "./SearchForm";
import "./LandingPage.css"
const LandingPage = ({setFormInput, formInput, nearestAirport}) => {
  const handleDownScroll = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
  }
  return (
    <>
      <header>
        <h2>explore. relax. enjoy.</h2>
        <h1 className="simply-h1">Simply Travel</h1>
        <button onClick={handleDownScroll}className="start-btn"><span>Your journey awaits</span></button>
      </header>
      <SearchForm formInput={formInput} setFormInput={setFormInput} nearestAirport={nearestAirport}/>
    </>
  );
};

export default LandingPage;
