
// <a href="tel:0102030405">Contactez-nous au 01 02 03 04 05</a>
// EMAIL en DUR
import { List} from 'semantic-ui-react';
export const Contact = (props) => {
  //const message = ' Pour un premier rendez-vous, veuillez me téléphoner ou m\'envoyer un sms.  \n\n L\'email est réservé uniquement pour le suivi des examens cliniques';
  const message2 = ' Voici le lien sur DOCTOLIB pour prendre un RDV';

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
        {/* 
              <div className='contact-item'>
              <h3>1er RDV</h3>
              <span className="new-line">
              {message}
              </span>
              <h1> </h1>
              <a href="https://www.conseil-national.medecin.fr/sites/default/files/charte_internet_cnom2014.pdf"> ✅ Charte applicable aux sites web professionnels des médecins</a>
              </div>
              </div>
        */}
              
          <div className='contact-item'>
          <h3> Mes RDV </h3>
          <span className="new-line">
          {message2}
          </span>
          <h1> </h1>
          <div className="doctolib">
          <a href="https://www.doctolib.fr/masseur-kinesitherapeute/tournefeuille/christina-grillet#about"> 📅 <span></span> DOCTOLIB  </a>

          <h1> </h1>
              <a href="https://www.conseil-national.medecin.fr/sites/default/files/charte_internet_cnom2014.pdf"> ✅ <span></span> Charte des médecins</a>
          </div>
          </div>
          </div>
        
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <div className='contact-item'>
          <h3>Contact</h3>
              <List>
                <span> {' '}
                  <List.Item className='fa fa-user-md '> </List.Item> Cabinet Pradal 
                </span>
                <h6>{props.data ? props.data.nom : 'loading'}</h6>
                <span>{' '}
                  <List.Item className='fa fa-map-marker liste-contact-adress'></List.Item> Addresse
                </span>
                <h6>
                <a href={props.data ? props.data.addressurl : 'loading'}> {props.data ? props.data.address : 'loading'}</a>
                </h6>
                <span>{' '}
                  <List.Item className='fa fa-phone liste-contact-tel'></List.Item> Téléphone
                </span>
                <h6>
                <a href={props.data ? props.data.phone : 'loading'}>{props.data ? props.data.phone_view : 'loading'}</a>
                </h6>
                <span>{' '}
                  <List.Item className='fa fa-envelope-o'></List.Item> Email
                </span>
                <h6>
                <a href={props.data ? props.data.email : 'loading'}> {props.data ? props.data.email_view : 'loading'}</a>
                </h6>
              </List>
              </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <div className='contact-item'>
          <h3>Diplômes</h3>
               <List>
                <h6 className='fa fa-graduation-cap '> {' '}
                <span> </span>
                  <List.Item className='liste-contact-certif ' >{props.data ? props.data.ref1 : 'ref1'}
                 </List.Item> 
                </h6>
                <h6 className='fa fa-graduation-cap'> {' '}
                <span> </span>
                  <List.Item className='liste-contact-certif ' >{props.data ? props.data.ref2 : 'ref2'}
                  </List.Item>
                  </h6> {' '}
                <h6 className='fa fa-graduation-cap'>
                <span> </span>
                  <List.Item className='liste-contact-certif'>{props.data ? props.data.ref3 : 'ref3'}
                  </List.Item> 
                  </h6> {' '}
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
