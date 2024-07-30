import '../scss/pages/About.scss';
import { useTypewriter } from "react-simple-typewriter";

export default function About() {
  const [typeEffect] = useTypewriter({
    words: ["web developer", "web designer", "full-stack developer", "web wizard"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });
  return (
    <section className="container">
      <h1 className='title-about'>Hi there 👋🏻, I’m Daniela<br/>
        I am a <span className="typewriter-serif">{typeEffect}</span></h1>
        <p className="text-about">
        My journey started as a web designer 👩🏻‍🎨, where I crafted visually engaging <span className="outline">websites</span>  . As my passion for technology grew, I expanded into full stack development 👩🏻‍💻, seamlessly integrating <span className="outline">front-end</span> design with <span className="outline">back-end</span> functionality.
        </p>
        <p className="text-about">
        I focus on creating dynamic and interactive websites 🌐 that offer a great user experience. By combining creativity 🎨 with technical skills 🛠️, I aim to build sites that are not only <span className="outline">aesthetically</span> pleasing but also  <span className="outline">functional</span>.
        </p>
    </section>
  );
}
