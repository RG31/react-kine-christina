
// <a href="tel:0102030405">Contactez-nous au 01 02 03 04 05</a>
// EMAIL en DUR
import { List} from 'semantic-ui-react';
export const Contact = (props) => {
  const message = ' Pour un premier rendez-vous, veuillez me téléphoner ou m\'envoyer un sms.  \n\n L\'email est réservé uniquement pour le suivi des examens cliniques';
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
          <div className='contact-item'>
          <h3>1er RDV</h3>
          <span className="new-line">
          {message}
              </span>
          </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <div className='contact-item'>
          <h3>Contact</h3>
              <List>
                <span> {' '}
                  <List.Item className='fa fa-user-md '> </List.Item> Cabinet 
                </span>
                <h6>{props.data ? props.data.nom : 'loading'}</h6>
                <span>{' '}
                  <List.Item className='fa fa-map-marker liste-contact-adress'></List.Item> Addresse
                </span>
                <h6>{props.data ? props.data.address : 'loading'}</h6>
                <span>{' '}
                  <List.Item className='fa fa-phone liste-contact-tel'></List.Item> Téléphone
                </span>
                <h6>{props.data ? props.data.phone : 'loading'}</h6>
                <span>{' '}
                  <List.Item className='fa fa-envelope-o'></List.Item> Email
                </span>
                <h6>
                <a href="mailto:christina.grillet@neuf.fr?body=Vos examens cliniques : ">E-Mail to Christine</a>
                </h6>
              </List>
              </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <div className='contact-item'>
          <h3>Références</h3>
               <List>
                <h5> {' '}
                  <List.Item className='fa fa-graduation-cap liste-contact-certif '> </List.Item> {props.data ? props.data.ref1 : 'ref1'}
                </h5>
                <h5>
                  <List.Item className='fa fa-graduation-cap liste-contact-certif'> </List.Item> {props.data ? props.data.ref2 : 'ref2'}
                  </h5> {' '}
                <h5>
                  <List.Item className='fa fa-graduation-cap liste-contact-certif'> </List.Item> {props.data ? props.data.ref3 : 'ref3'}
                  </h5> {' '}
              </List>
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
