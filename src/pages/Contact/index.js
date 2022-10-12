// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

// function ContactForm() {
//     // JSX
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;
//     const [errorMessage, setErrorMessage] = useState('');

//     function handleChange(e) {
//         // Validation Statements for Email Verification
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             // console.log(isValid);
//             // isValid conditional statement
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid.');
//             } else {
//                 if (!e.target.value.length) {
//                     setErrorMessage(`${e.target.name} is required.`);
//                 } else {
//                     setErrorMessage('');
//                 }
//             }
//             // console.log('errorMessage', errorMessage);
//         }

//         setFormState({ ...formState, [e.target.name]: e.target.value })

//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//         }
//     }

//     // console.log(formState); -> Console Log shows the live dynamic update of each keystroke in the handleChange function above

//     // Prevent the default action of the form Submit button (unfinished!)
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//     };


//     return (
//         <section>
//             <h1>Contact me</h1>
//             <form id="contact-form">
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email address:</label>
//                     <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
//                 </div>
//                 {errorMessage && (
//                     <div>
//                         <p className="error-text">{errorMessage}</p>
//                     </div>
//                 )}
//                 <button type="submit">Submit</button>
//             </form>
//         </section>
//     );
// }

// export default ContactForm;

import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_61a0iyj";
const TEMPLATE_ID = "template_r0aeust";
const PUBLIC_KEY = "C2hCJrveiLpqCgIRY";
const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
return (
    <div className="App">
      <Form onSubmit={handleOnSubmit} className="formcss">
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}
export default App;