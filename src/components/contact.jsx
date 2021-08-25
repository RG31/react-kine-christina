import { useState } from 'react'
// npm install emailjs-com --save 
import emailjs from 'emailjs-com'
// npm install --save reactstrap
// npm install = yarn

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
}
export const Contact = (props) => {

  const [showResults, setShowResults] = useState(false)
  console.log ("showResults", showResults)
  const onClick = () => setShowResults(true)

  const Results = () => (
    <div className='container'>
       <div className='col-md-4'>
        <div className='row-lp'>
          <div>
           <h4 className="thanks"> Email envoyé avec succès </h4>  
         </div>
        </div>
     </div>
    </div>
  )


  const [{ name, surname, email, phone}, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      " name: ", name, 
      " surname: ", surname, 
      " email: ", email, 
      " phone: ", phone, 
    )
    emailjs
      .sendForm(
      /* 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'*/
      /* RG31*/
      'service_qra7ttk', 'template_kp2u4u3', e.target, 'user_8VEaqn0oNGu7ZWLJwP2Dm'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          /*alert("Email envoyé avec succès! Merci pour votre confiance");*/
          onClick()
        },
        (error) => {
          console.log(error.text)
        },
        // Clear and reset form input fields
        e.target.reset()
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Me contacter</h2>

              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nom *'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='surname'
                        name='surname'
                        className='form-control'
                        placeholder='Prénom *'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email *'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message *'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div className='form-check'>
                  <div className='row'>
                  <label class='form-check-label'for='exampleCheck1'>J'accepte que mes données personnelles soient utilisées pour me contacter.</label>
                  <input type='checkbox' class='form-check-input' id="exampleCheck1" required/>
                  </div>
                  <div className='row'>
                  <a className='form-check-link' href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank" rel="noreferrer"> En savoir plus * </a>
                  </div>
                </div>
                  <div className='col-md-12'> 
                  { showResults ? <Results /> : null } 
                  </div>
                <div id='success'></div>
                <button 
                type='submit' 
                className='btn btn-custom btn-lg'
                 /*onClick={onClick}*/  >
                  Envoyer
                </button>                
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <span>
                Prendre rendez-vous avec votre kinésithérapeute près de Toulouse                
              </span>
              <h3>Contact</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Addresse
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Téléphone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 React Site Vitrine. Design by @RG31 {' '}
              Responsive website built with Bootstrap
          </p>
        </div>
      </div>
    </div>
  )
}
