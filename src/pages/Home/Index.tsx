import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <img className="logo" src="/public/vectors/cv-logo.svg" />
        <h1 className="build">We build world class Tech talents</h1>
        <p className="join">
          Join our next cohort to accelerate your dream of being a World Class
          Software Developer. No coding experience required.
        </p>
        <button className="button">Enroll now</button>
        <div className="icons">
          <img src="/public/vectors/fb-icon.svg" />
          <img src="/public/vectors/tw-icon.svg" />
          <img src="/public/vectors/github-icon.svg" />
          <img src="/public/vectors/location.svg" />
        </div>
      </div>

      <img className="side" src="/images/heroo_bg.png" alt="" />
      <h1 className="state">State of The Art Ecosystem for Creatives</h1>
      <h1>
        Be a part of an all-inclusive technology hub where you learn,
        collaborate with tech creatives and join a team of support systems
        offering you the top tools and frameworks to build solutions and earn
        big.
      </h1>
      <img src="/public/images/cv-office.jpeg" />
    </div>
  );
};

export default Home;
