export const Temoignages = (props) => {
  
  return (
    <div id='temoignages'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Pourquoi ils m'ont choisie?</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <details close>
                        <p paragraph>"{d.text}" </p>
                      </details>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
