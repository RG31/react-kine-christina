import { useMediaPredicate } from "react-media-hook";

export const Temoignages = (props) => {
  const smallerThan768 = useMediaPredicate("(max-width: 768px)");
  console.log ("smallerThan768",smallerThan768)
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
                     {smallerThan768 && 
                      <details >
                        <summary>
                          <span id="open"> Détails  </span>
                          <span id="close"> Fermer  </span>
                        </summary>
                        <p paragraph>"{d.text}" </p>
                      </details>
                    }
                    {!smallerThan768 && 
                      <p paragraph>"{d.text}" </p>
                    }
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
