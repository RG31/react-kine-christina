export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Galerie</h2>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/kine_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Kinésithérapie 🔍 </span></h4>
                    </div>
                    <img
                      src='img/portfolio/kine_SMALL.jpg'
                      className='img-responsive'
                      alt='ccc '
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/ostheo_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Osthéopathie 🔍 </span></h4>
                    </div>
                    <img
                      src='img/portfolio/ostheo_SMALL.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/medecine_chinoise_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Médecine Chinoise 🔍 </span> </h4>
                    </div>
                    <img
                      src='img/portfolio/medecine_chinoise_SMALL.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/sophro_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Sophrologie 🔍 </span></h4>
                    </div>
                    <img
                      src='img/portfolio/sophro_SMALL.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/cabinet_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Mon cabinet 🔍 </span></h4>
                    </div>
                    <img
                      src='img/portfolio/cabinet_SMALL.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/ventouse_LARGE.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4><span>Ventouses Chinoises 🔍 </span></h4>
                    </div>
                    <img
                      src='img/portfolio/ventouse_SMALL.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
