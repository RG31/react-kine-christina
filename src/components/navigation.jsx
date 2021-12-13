export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle x'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href="#page-top" download="logo.png">
          
          </a>{' '}
          <canvas width="60" height="60"></canvas>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <a href='#services' className='page-scroll'>
                Soins
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Cabinet
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Témoignages
              </a>
            </li>
            <li>
            <a href='#portfolio' className='page-scroll'>
                Galerie
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
