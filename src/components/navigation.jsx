import myLogo from './logo-cg.jpg';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle x collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href="#accueil">
           <img className="logo" src={myLogo} alt="christina grillet logo" />
          </a>{''}
          <canvas width="60" height="80"></canvas>
        </div>
        <div
          className='collapse x navbar-collapse x'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <a href="#accueil" className='page-scroll'>
               Accueil
            </a>{''}
            </li>
            <li>
            <a href='#soins' className='page-scroll'>
                Soins
              </a>
            </li>
            <li>
              <a href='#cabinet' className='page-scroll'>
                Cabinet
              </a>
            </li>
            <li>
              <a href='#temoignages' className='page-scroll'>
                Témoignages
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
