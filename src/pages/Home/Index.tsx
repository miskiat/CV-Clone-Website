import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="homeleft">
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
      </div>
      <div className="second">
        <div className="heading">
          <h1 className="state">State of The Art Ecosystem for Creatives</h1>
          <h1 className="inclusive">
            Be a part of an all-inclusive technology hub where you learn,
            collaborate with tech creatives and join a team of support systems
            offering you the top tools and frameworks to build solutions and
            earn big.
          </h1>
        </div>

        <img className="office" src="/public/images/cv-office.jpeg" alt="" />
        <div className="secondbuttom">
          <div className="one">
            <img src="/public/vectors/bookmark-circle.svg" alt="" />
            <div>
              <h1 className="iconss">Web & Mobile Development</h1>

              <p className="design">
                We design and develop tech solutions for SMEs and Government
                Agency.
              </p>
            </div>
          </div>

          <div className="two">
            <img src="/public/vectors/tent-circle.svg" alt="" />
            <div>
              <h1 className="iconss">Bootcamps & Trainings</h1>

              <p className="building">
                We’re building the next generation of tech talents.
              </p>
            </div>
          </div>

          <div className="three">
            <img src="/public/vectors/workspace-circle.svg" alt="" />
            <div>
              <h1 className="iconss">Workspaces & Tech Hub</h1>

              <p className="building">
                Work and Connect with other Creatives. All in a fun and cozy
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
