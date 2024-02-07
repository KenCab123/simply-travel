import Iris from "./About/Iris";
import Jennifer from "./About/Jennifer";
import Kenneth from "./About/Kenneth";
import "./About.css"

const About = () => {
  return (
    <ul className="devs">
      <li className="dev"><Kenneth /></li>
      <li className="dev"><Jennifer /></li>
      <li className="dev"><Iris /></li>
    </ul>
  );
};

export default About;
