// https://www.npmjs.com/package/react-show-more-text
export const Cabinet = (props) => {
  return (
    <div id='cabinet'>
      <div className='container'>
          <h2>Mon cabinet</h2>
          {' '}
            <div className='row1'>
                  <div className='col-xs-12 col-md-6'>
                    <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
                  </div>
                  <div className='row'>
                
                  <div className='col-xs-12 col-md-6'>
                    <div className='about-text'>
                      <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                      <p>{props.data ? props.data.paragraph1 : 'loading...'}</p>
                      <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
                    </div>
                    <h3> </h3>
                  </div>
                  </div>
            </div>
      </div>
    </div>
  )
}