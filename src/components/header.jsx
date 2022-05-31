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
                <p className="top-intro-text">    
                  {props.data ? props.data.more : 'Loading'}
                  </p>
                  <p className="sub-intro-text">    
                  {props.data ? props.data.paragraph : 'Loading'}
                  
                  </p>
                </div>
                
                <a 
                  href="https://www.doctolib.fr/masseur-kinesitherapeute/tournefeuille/christina-grillet#about"
                  className='btn btn-custom btn-lg page-scroll'
                >
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
