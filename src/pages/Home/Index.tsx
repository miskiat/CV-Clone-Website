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

          <div className="one">
            <img src="/public/vectors/tent-circle.svg" alt="" />
            <div>
              <h1 className="iconss">Bootcamps & Trainings</h1>

              <p className="building">
                We’re building the next generation of tech talents.
              </p>
            </div>
          </div>

          <div className="one">
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
      <div className="third">
        <div className="left">
          <div className="mobile">
            Learn Web & Mobile Development. Access the global job market.
          </div>
          <div className="world">
            The world is constantly in need of technical talent supply pool.
            Tech is needed accross every sector. Your course of study doesn’t
            matter. All you need is the skill and experience.
          </div>
          <button className="learn">Learn more</button>
        </div>

        <div className="right">
          <div className="line-one">
            <img src="/public/vectors/mail-white.svg" />
            <div>
              <div className="program">Program Schedule</div>
              <div className="training">
                6 months training + 6months paid internship
                <div className="custom">
                  (there is a custom schedule for students)
                </div>
              </div>
            </div>
          </div>

          <div className="line-one">
            <img src="/public/vectors/group-white.svg" />
            <div>
              <div className="program">Our Curriculum</div>
              <div className="training">
                It covers the fundamentals and advanced concepts of web & mobile
                development
              </div>
            </div>
          </div>

          <div className="line-one">
            <img src="/public/vectors/group-white (1).svg" />
            <div>
              <div className="program">Experiential Learning</div>
              <div className="training">
                30+ Hands-on Projects &
                <div>5+ Real World (Production Grade) Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="expert">
          <div className="expertise">Our Expertise</div>
          <div className="expertisee">
            We have built several solutions from ground up using the following
            frameworks. Our world class expertise is enviable.
          </div>
        </div>

        <div className="image">
          <div className="image-one">
            <img src="/public/vectors/andriod.svg" />
            <img src="/public/vectors/bootstrap.svg" />
            <img src="/public/vectors/aws.svg" />
            <img src="/public/vectors/heroku.svg" />
            <img src="/public/vectors/html5.svg" />
            <img src="/public/vectors/node.svg" />
            <img src="/public/vectors/github.svg" />
            <img src="/public/vectors/css.svg" />
          </div>

          <div className="image-two">
            <img src="/public/vectors/gitlab.svg" />
            <img src="/public/vectors/react.svg" />
            <img src="/public/vectors/mysql.svg" />
            <img src="/public/vectors/mongodb.svg" />
            <img src="/public/vectors/python.svg" />
            <img src="/public/vectors/vue.svg" />
          </div>

          <div className="image-three">
            <img src="/public/vectors/postgres.svg" />
            <img src="/public/vectors/js.svg" />
            <img src="/public/vectors/firebase.svg" />
            <img src="/public/vectors/redux.svg" />
            <img src="/public/vectors/tailwind.svg" />
          </div>
          <div className="image-four">
            <img src="/public/vectors/ruby.svg" />
            <img src="/public/vectors/figma.svg" />
          </div>
        </div>
      </section>
      <section>
        <div className="code">
          <div className="codevillage">
            Codevillage Kids & Teens Code Classes
          </div>

          <div className="codevillagee">
            Will your kids be able to build a tech solution? Yes, It’s possible.
            “We catch them young” by introducing these fresh minds into how
            computer works and how to make it do what they want.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
