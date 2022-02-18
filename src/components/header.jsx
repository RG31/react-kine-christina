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
                <p className="bold">    
                  {props.data ? props.data.more : 'Loading'}
                  </p>
                  <p>    
                  {props.data ? props.data.paragraph : 'Loading'}
                  </p>
                </div>
                <a 
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Me contacter
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
