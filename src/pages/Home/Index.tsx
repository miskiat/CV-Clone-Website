import Programs from "../../components/Program";
import Service from "../../components/Service";
import "./Home.css";

const Home = () => {
  const techs = [
    "andriod.svg",
    "bootstrap.svg",
    "aws.svg",
    "heroku.svg",
    "html5.svg",
    "node.svg",
    "github.svg",
    "css.svg",
    "gitlab.svg",
    "react.svg",
    "mysql.svg",
    "mongodb.svg",
    "python.svg",
    "vue.svg",
    "postgres.svg",
    "js.svg",
    "firebase.svg",
    "redux.svg",
    "tailwind.svg",
    "ruby.svg",
    "figma.svg",
  ];
  const socials = [
    "fb-icon.svg",
    "tw-icon.svg",
    "github-icon.svg",
    "location.svg",
  ];
  const footers = [
    "fb-icon.svg",
    "tw-icon.svg",
    "github-icon.svg",
    "location.svg",
  ];

  const services = [
    {
      title: "Web dev",
      icon: "bookmark-circle.svg",
      desc: "We design and develop tech solutions for SMEs and Government Agency.",
    },
    {
      title: "Bootcamps & Trainings",
      icon: "tent-circle.svg",
      desc: " We’re building the next generation of tech talents.",
    },
    {
      title: "Workspaces & Tech Hub",
      icon: "workspace-circle.svg",
      desc: "Work and Connect with other Creatives. All in a fun and cozy environment.",
    },
  ];
  const programs = [
    {
      title: "Program Schedule",
      icon: "mail-white.svg",
      desc: "6 months training + 6months paid internship",
      custom: "  (there is a custom schedule for students)",
    },
    {
      title: "Our Curriculum",
      icon: "group-white.svg",
      desc: "  It covers the fundamentals and advanced concepts of web & mobile development",
    },
    {
      title: "Experiential Learning",
      icon: "group-white (1).svg",
      desc: "30+ Hands-on Projects&",
      custom: "5+ Real World (Production Grade) Projects",
    },
  ];

  return (
    <div>
      <div className="home">
        <div className="homeleft">
          <img className="logo" src="/vectors/cv-logo.svg" />
          <h1 className="build">We build world class Tech talents</h1>
          <p className="join">
            Join our next cohort to accelerate your dream of being a World Class
            Software Developer. No coding experience required.
          </p>
          <button className="button">Enroll now</button>
          <div className="icons">
            {socials.map((s) => (
              <img src={`/vectors/${s}`} alt="" />
            ))}
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

        <img className="office" src="/images/cv-office.jpeg" alt="" />
        <div className="secondbuttom">
          {services.map((service) => (
            <Service
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
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
          {programs.map((program) => (
            <Programs
              icon={program.icon}
              title={program.title}
              desc={program.desc}
              custom={program.custom}
            />
          ))}
        </div>
      </div>
      <section className="packages">
        <div className="expert">
          <div className="expertise">Our Expertise</div>
          <div className="expertisee">
            We have built several solutions from ground up using the following
            frameworks. Our world class expertise is enviable.
          </div>
        </div>

        <div className="container">
          <div className="img">
            {techs.map((tech) => (
              <img src={`/vectors/${tech}`} alt="" />
            ))}
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
          <div className="secure">
            <div>Secure a spot for your kid now </div>
            <img src="/vectors/arrow-right.svg" />
          </div>
        </div>
      </section>
      <section className="lastpath">
        <div className="lastpathh">
          <div className="talent">
            <img className="logoo" src="/vectors/cv-logo.svg" />
            <div className="activities">
              Building the tech talents for the future of work.
            </div>
          </div>
          <div className="programm">
            <div className="contact">Our Programs</div>
            <div className="activities">Fullstack Training</div>
            <div className="activities">Kids & Teens Code Classes</div>
          </div>
          <div className="link">
            <div className="contact">Links</div>
            <div className="activities">
              <div>Careers </div>
              <div> Refund Policy </div>
              <div> Privacy Policy</div>
            </div>
          </div>
          <div className="address">
            <div className="contact">Contacts</div>
            <div className="activitiess">
              Rasak Onilu Plaza (Middle Floor), Adjacent Niger Motel, Niger
              Road, Ilorin, Nigeria
              <div className="number">08168861541 (Nigeria) </div>
              <div className="number">+1 (707) 681-1531 (International)</div>
              <div className="number">+1 (707) 681-1531 (Whatsapp)</div>
              <div className="numberr">hello@codevillage.ng</div>
            </div>
          </div>
        </div>

        <div className="lastt">
          <div>Copyright © 2020-2022 Codevillage Limited</div>
          <div className=" iconsss">
            {footers.map((f) => (
              <img src={`/vectors/${f}`} alt="" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
