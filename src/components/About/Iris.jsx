import "../About.css"


const Iris = () => {
    return (
    <div className="dev-div">
      <h2>Iris</h2>
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=female&minimum_age=28&maximum_age=38"
        alt="photo of Iris"
      />
      <p>
        Fun fact: I love traveling 🧳, reading 📖, eating 🍽️, + cooking 🍳
      </p>
      <p>
        <span>How to reach me 👩🏿‍💻</span>
      </p>
      <ul>
        <a href="mailto:irisbeckham@pursuit.org">
                <img src="https://www.carolibrary.org/site-assets/images/emailicon.png/@@images/image.png" alt="Email" />
            </a>
            <a href="https://github.com/iris-beckham" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/iris-beckham/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" />
            </a>
      </ul>
    </div>
    )
}

export default Iris

