import "../About.css"

const Jennifer = () => {
  return (
    <div className="dev-div">
      <h2>Jennifer</h2>
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=female&minimum_age=38&maximum_age=48"
        alt="photo of Jennifer Peterson"
      />
      <p>
        Fun fact: I ❤️ to <span>TRAVEL</span>✈️, trying new <span>FOODS</span>
        🍣 and I am currently teaching myself to <span>COOK 👩🏿‍🍳</span>
        <span>(concentrating on plant-based meals 🥗)</span>
      </p>
      <p>
        <span>How to reach me 👩🏿‍💻</span>
      </p>
      <ul>
        <a href="mailto:jenniferbushpeterson@gmail.com">
                <img src="https://www.carolibrary.org/site-assets/images/emailicon.png/@@images/image.png" alt="Email" />
            </a>
            <a href="https://github.com/JenniferPeterson1203" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/jennifer--peterson/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" />
            </a>
      </ul>
    </div>
  );
};

export default Jennifer;

