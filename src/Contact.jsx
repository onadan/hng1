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
            <div className="flex-col">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="first_name"
                placeholder="Enter your first name"
                required
              />

              <p id="hint"></p>
            </div>

            <div className="flex-col">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                name="lasttName"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="yourname@email.com" />
          </div>

          <div className="flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={8}
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="accept">
            <input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept">
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
