import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function ContactForm(props) {
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({ status: "" });

    // handle change in form input fields
    function handleChange(e) {
        // if target is email
        if (e.target.name === 'email') {
            // isValid runs email validation
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);
            // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    // else blank error message, which is set to blank
                    setErrorMessage('');
                }
            } else {
                // if element values blank
                if (!e.target.value.length) {
                    // require element
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                    // else blank error message, which is set to blank
                  setErrorMessage('');
                }
              }
        setFormState({...formState, [e.target.name]: e.target.value })
        // conditional state only updates if the from data passes quality test
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    // when submit clicked, prevent default
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setState({ status: "SUCCESS" });
          } else {
            setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    return (
        <section>
            <div className={"flex-row mt-5"}>
                <div className={"align-self-center"}>
                    <h2 className={""}>Contact me</h2>
                </div>
                
                <form id="contact-form" className={"container"} onSubmit={handleSubmit}
                        action="https://formspree.io/mzbjloyp"
                        method="POST">
                    <div className={"form-group"}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" 
                        className={"form-control"}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" 
                        className={"form-control"}
                        />
                        <small id="passwordHelpBlock" className="form-text text-muted">
                        You must input a vaild email address; e.g. email@email.com.
                        </small>
                    </div>
                    <div className={"form-group"}> 
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"
                        className={"form-control"}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                        )}
                    <button type="submit" className={"btn btn-primary"}>Submit</button>
                </form>
            </div>
        </section>
      )
}

export default ContactForm;