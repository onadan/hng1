import {name} from "./static/data"

const Contact = () => {
  return (
    <div id="ContactPage">
      <header> Contact Me </header>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <form action="">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="first_name"
          placeholder="Enter your first name"
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lasttName"
          id="last_name"
          placeholder="Enter your last name"
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your last name" />

        <label htmlFor="message">First Name</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />

        <input type="checkbox" name="accept" id="accept" />
        <label htmlFor="accept"> You agree to providing your data to {name} who may contact you</label>


      </form>
    </div>
  );
};

export default Contact;
