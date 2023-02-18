import './App.css';
import React, { useState } from 'react';
import FormButton from './materi/komponen/form/pembahasan/FormButton';
import FormElement from './materi/komponen/form/pembahasan/FormElement';
import FormTextInput from './materi/komponen/form/pembahasan/FormTextInput';
import styled from 'styled-components';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.5);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    background-color: rgb(102, 129, 170);
    border-radius: 5px;
`;

const Heading = styled.h1`
    font-size: 20px;
`;

function App() {
  const initialState = {
    username: '',
    password: '',
  };
  
  const [formData, setFormData] = useState(initialState);
  
  const { username, password } = formData;
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isValidEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValidEmail(email)) {

    }else{
      setEmailError('Please enter a valid email address');
    }
    if(!username || !password) {
      alert('Please fill in all fields');
      return;
    }
    if(password.length < 6) {
      alert('Password must at least 6 characters long');
      return;
    }
    if(username || password) {
      alert('Register Success');
      return;
    }

    // console.log('Regristaion Success')
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <div className="App">
      <CardContainer>
        <nav>
          <Heading className='square'>Registration Form </Heading>
        </nav>
          <form onSubmit={handleSubmit}>
            <FormElement htmlFor='username'>Username</FormElement>
            <FormTextInput type='text' id='username' name='username' onChange={onChange} value={username}/>
            
            <FormElement htmlFor='email'>Email Address</FormElement>
            <FormTextInput type='email' id='email' name='email' onChange={onChange} value={email}/>
            
            <FormElement htmlFor='password'>Password</FormElement>
            <FormTextInput type='password' id='password' name='password' onChange={onChange} value={password}/>
            
            <FormButton type='submit' primary>Register</FormButton>
            <br/>
            <br/>
          </form>

      </CardContainer>
    </div>
  );
  }

export default App;
