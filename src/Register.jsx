import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Register = () => {
  const handleSubmit = () => {
    fetch('/users', {
      method: "POST",
      body: new FormData(document.getElementById('registerForm'))
    });
  };

  return (
    <form id="registerForm" className="registerForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="civility">Civility</label>
        <Field name="civility" component="input" type="radio" value="MALE" />MALE
        <Field name="civility" component="input" type="radio" value="FEMALE" />FEMALE
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="passwordRepeat">Password repeat</label>
        <Field name="passwordRepeat" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'simple'
})(Register);