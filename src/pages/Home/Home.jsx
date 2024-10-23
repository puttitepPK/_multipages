import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div
        className="inner-border"
        style={{
          backgroundImage: "url('./backprofile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content-wrapper">
          <div className="title1">
            <img src="./beer1.png" alt="My Image" className="profile-image" />
          </div>
          <div className="tit1-1">
            <h3>
              <span className="highlight">Name :</span> Puttitep Kaewket <br />
              <span className="highlight">Nickname :</span> Beer <br />
              <span className="highlight">Age :</span> 20 <br />
              <span className="highlight">Educational Institution :</span>{" "}
              Sripathum University <br />
              <span className="highlight">Faculty :</span> Information
              Technology <br />
              <span className="highlight">Department :</span> Computer Science
              and Software Development Innovation
            </h3>
          </div>
        </div>
        <div className="tit2-2">
          <h3>
            Hello, my name is Beer, I am from Nakhon Si Thammarat Province. I am
            currently a student studying Computer Science. In the future, my
            desired career is in the field of computer system security.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
