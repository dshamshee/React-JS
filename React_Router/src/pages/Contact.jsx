import { Form } from "react-router-dom";

// Get the data from the Form component and the Form componet will return a promis the make sure the your fuction is async 
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData(); // get the data from the Form component (Inbuilt function in react-router-dom)
    const data = Object.fromEntries(res); // convert the form data to an object
    console.log(data);
    return null; 
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container section-contact">
        <h2 className="section-common--heading">contact us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact">
          <div className=" grid grid-two--cols">
            <div className="contact-content">
              <Form method="POST" action="/contact">
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@thapa.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message "
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src="/contact.png"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// "Error: You made a POST request to "/contact" but did not provide an `action` for route "0-4", so there is no way to handle the request."