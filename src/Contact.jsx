import { name } from "./static/data";
import { zuri, I4G } from "./assets";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__body">
        <div className="contact__header">
          <h1> Contact Me </h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form className=".contact__form">
          <div className="splitted">
            <div className="fnW">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>

            <div className="lnW">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                name="lasttName"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="eW">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your last name" />
          </div>

          <div className="taW">
            <label htmlFor="message">First Name</label>
            <textarea
              name="message"
              rows={10}
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="aW">
            <input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept">
              {" "}
              You agree to providing your data to {name} who may contact you
            </label>
          </div>

          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>

      <hr />

      <footer>
        <img src={zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="zuri" />
      </footer>
    </div>
  );
};

export default Contact;
