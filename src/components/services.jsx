//npm i react-media-hook --save
import { useMediaPredicate } from "react-media-hook";

export const Services = (props) => {
  const smallerThan768 = useMediaPredicate("(max-width: 768px)");
  console.log ("smallerThan768",smallerThan768)
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Les soins</h2>
          <span>
          Je vous accompagne au changement pour prendre soin de vous.
          </span>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                 {/* <i className={d.icon}></i>*/}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <hr></hr>
                    {smallerThan768 && 
                    <details> 
                      <summary>
                         <span id="open"> Détails</span>
                        <span id="close"> Fermer</span>
                      </summary>
                        <p>{d.text}</p>
                    </details>
                    }
                     {!smallerThan768 && 
                     <p>{d.text}</p>
                        }   
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
