/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContact } from '../lib/services/service'
import '../styles/css/main.css'


export default function SignUp({handleUser}) {
  // TODO: Legg til logikk for å håntere form, navigasjon, input, validering m.m
  
  // value for input
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [admin, setAdmin] = useState('')
  // check om error og success
  const userName = (name)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  // meldinger
  const [errorMessage, setErrorMessage] = useState('')  
  const [rightMessage, setRightMessage] = useState('')
  
  // navigation
  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  // endringer på input
  const handleChangeName = (e) => {
    setName(e.target.value)
   
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeAdmin = e => {
    console.log(e.target.value)
  }
  // handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    validate({name, email})
  }
  // validerings funkjson
  const validate = async(data) => {
    setError(false)
    setSuccess(false)

    if(name.length && email.length > 0) {
      await createContact(data)
      // holdActiveUser(data);
      setSuccess(true)
      setErrorMessage('')
      setRightMessage('Skjema er sendt')
      await delay(500);
      navigate('/kurs');
      return data; 
    }
    
    else {
      setErrorMessage('fyll ut alle felter med *')
      setError(true);
    }
    
  }
  return (
    <div>
    <section data-testid="sign_up">
      <h2 data-testid="title">Ny bruker</h2>
      <form id="signupWrapper" data-testid="form" noValidate className="flex-1" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Navn*</span>
          <input 
          data-testid="form_name" 
          type="text" 
          name="name" 
          id="name" 
          value={name}
          onChange={handleChangeName}
          />
          <p data-testid="form_error"></p>   
        </label>
        <label htmlFor="email" className="info">
          <span>Epost*</span>
          <input
            data-testid="form_email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <p data-testid="form_error"></p>   
        </label>
        <label htmlFor="admin" className="check">
          <input className="self"
            data-testid="form_admin"
            type="checkbox"
            name="admin"
            id="admin"
            value={admin}
            onChange={handleChangeAdmin}
          />
          <span>Admin</span>
        </label>
        <button id="signupBtn" data-testid="form_submit" type="submit" onClick={handleUser(userName)}>
          Lag ny bruker
        </button>
        {errorMessage}
        {rightMessage}
      </form>
    </section>
  </div>
  )
}
