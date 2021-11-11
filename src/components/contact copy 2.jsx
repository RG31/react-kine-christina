
// <a href="tel:0102030405">Contactez-nous au 01 02 03 04 05</a>
import { List } from 'semantic-ui-react';
export const Contact = (props) => {
  const message = ' Pour un premier rendez-vous, veuillez me téléphoner ou m\'envoyer un sms.  \n\n L\'email est réservé uniquement pour le suivi des examens clinique';
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div>
            <div className='row'>
              <div className='section-title'>
                <h2>Me contacter</h2>
              <span className="new-line">
               </span>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <h3>1er RDV</h3>
          <span className="new-line">
          {message}
              </span>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <div className='contact-item'>
        <h3>Contact</h3>

              <p>
                <span>
                  <i className='fa fa-user-md '> </i> Cabinet 
                </span>
                {props.data ? props.data.nom : 'loading'}
              </p>
              <p>
                <span>{' '}
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
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <h3>Références</h3>
               <p>
                <span> {' '}
                  <i className='fa fa-graduation-cap '> </i> {props.data ? props.data.ref1 : 'ref1'}
                </span>
              </p>
              <p>
                <span>
                  <i className='fa fa-graduation-cap '> </i> {props.data ? props.data.ref2 : 'ref2'}
                </span> {' '}
              </p>
              <p>
                <span>
                  <i className='fa fa-graduation-cap '> </i> {props.data ? props.data.ref3 : 'ref3'} 
                </span> {' '}
              </p>
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
