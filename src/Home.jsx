import { data } from "./static/data";
import {
  github,
  profileImg,
  slack,
  zuri,
  I4G,
  shareBg,
  shareSm,
} from "./assets";

const Home = () => {
    return (
      <div className="Home">
        <header>
          <img
            src={window.innerWidth < 500 ? shareSm : shareBg}
            alt="share"
            className="shareBtn"
          />
          <img
            className="profile__img"
            src={profileImg}
            alt="profile"
            id="profile__img"
          />
          <p className="name" id="twitter">
            Annette Black
          </p>
          <p id="Daniel Onaolapo"></p>
        </header>

        <div>
          {data &&
            data.map((item) => (
              <a href={item?.link}>
                <div key={item.id} className="button" id={item?.id}>
                  {item.name}
                </div>
              </a>
            ))}
        </div>

        <div className="logos">
          <img src={slack} alt="slack-logo" />
          <img src={github} alt="github-logo" />
        </div>

        <hr />

        <footer>
          <img src={zuri} alt="zuri" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="zuri" />
        </footer>
      </div>
    );
  }

  export default Home;
