export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <div>
                <h1>
                {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p className='top-intro-text'>    
                  {props.data ? props.data.more : 'Loading'}
                </p>
                <p className='sub-intro-text'>    
                  {props.data ? props.data.paragraph : 'Loading'}
                </p>
                </div>
              
                <a 
                  href="https://www.doctolib.fr/masseur-kinesitherapeute/tournefeuille/christina-grillet#about" 
                  rel="noreferrer noopener" 
                  target="_blank"
                  className='btn btn-custom btn-lg page-scroll'
                >
                </a>{' '}
                <div className='doctolib'>
                    <a 
                      href="https://www.doctolib.fr/masseur-kinesitherapeute/tournefeuille/christina-grillet?utm_campaign=website-button&amp;utm_source=christina-grillet-website-button&amp;utm_medium=referral&amp;utm_content=option-5&amp;utm_term=christina-grillet" 
                      target="_blank"
                    >
                    <span>Prendre rendez-vous en ligne</span>
                    <img 
                        src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png" 
                        alt="Doctolib"/>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
