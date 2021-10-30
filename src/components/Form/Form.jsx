import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import Label from './Label';
import Input from './Input';
import ButtonSocial from './ButtonSocial';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Card from '../Card2/Card';

const Form = () => {
  // Hooks
  // -- state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState({ username: false, email: false });
  // side effects
  useEffect(() => {
    if (submit.username && submit.email && submit.password) {
      sendButtonRef.current.disabled = false;
    } else {
      sendButtonRef.current.disabled = true;
    }
    console.log(submit);
  }, [submit]);
  // -- ref
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const sendButtonRef = useRef();

  // Custom functions
  // -- helper
  const validationHelper = (input, rule, el) => {
    let object = {};

    if (rule) {
      input.style.border = '2px solid green';
      object[el] = true;

      setSubmit({ ...submit, ...object });
    } else {
      input.style.border = '2px solid red';
      object[el] = false;

      setSubmit({ ...submit, ...object });
    }

    if (!input.value.length) input.style.border = '1px solid black';
  };
  // -- inputs validationas
  const handleUsernameOnChange = () => {
    const input = usernameInputRef.current;
    const rule = input.value.charAt(0) === input.value.charAt(0).toUpperCase();
    validationHelper(input, rule, 'username');

    setUsername(input.value);
  };

  const handleEmailOnChange = () => {
    const input = emailInputRef.current;
    const rule = input.value.includes('@');
    validationHelper(input, rule, 'email');

    setEmail(input.value);
  };

  const handlePasswordOnChange = () => {
    const input = passwordInputRef.current;
    const rule = input.value.length !== 0;
    validationHelper(input, rule, 'password');

    setPassword(input.value);
  };

  return (
    <form>
      <div>
        <Card />
      </div>
      <br />
      Get Started <br />
      <h4>Already have an account?</h4>
      <a href='/'>Log in</a>
      <br />
      <ButtonSocial
        text='Facebook'
        action={() => alert('Sended')}
        secondary
        ref={sendButtonRef}
      />
      <ButtonSocial
        text='Google'
        action={() => alert('Sended')}
        secondary
        ref={sendButtonRef}
      />
      <div>
        <Label name='username' text='Name' />
        <br />
        <Input
          type='text'
          id='username'
          ref={usernameInputRef}
          value={username}
          onChange={handleUsernameOnChange}
        />
      </div>
      <div>
        <Label name='email' text='Email' />
        <br />
        <Input
          type='text'
          id='email'
          ref={emailInputRef}
          value={email}
          onChange={handleEmailOnChange}
        />
      </div>
      <div>
        <Label name='email' text='Password' />
        <br />
        <Input
          type='text'
          id='Password'
          ref={passwordInputRef}
          value={password}
          onChange={handlePasswordOnChange}
        />
      </div>
      <div>
        <Button
          text='Send'
          action={() => alert('Sended')}
          primary
          ref={sendButtonRef}
        />
      </div>
    </form>
  );
};

export default Form;
