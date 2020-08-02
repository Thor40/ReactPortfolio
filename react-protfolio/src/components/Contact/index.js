import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // handle change in form input fields
    function handleChange(e) {
        // if target is email
        if (e.target.name === 'email') {
            // isValid runs email validation
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
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
        console.log(formState);
    };

    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            <button type="submit">Submit</button>
          </form>
        </section>
      )
}

export default ContactForm;