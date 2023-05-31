//npm i react-media-hook --save
import { useMediaPredicate } from "react-media-hook";

export const Soins = (props) => {
  const smallerThan768 = useMediaPredicate("(max-width: 768px)");
  console.log ("smallerThan768",smallerThan768)
  return (
    <div id='soins' className='text-center'>
    <div className='overlay'>
      <div className='container'>
        <div className='section-title'>
          <h2>Les soins</h2>
          <span>
          Je vous accompagne pour prendre soin de vous. </span>
        <div  className='pdf'>
        <span>
        Plus d'infos sur "Les soins de la peau" 👉  
        <a 
        href="https://drive.google.com/file/d/14IkeMoabkl8R6ddLwj5mPoxOJaGUVnYn/view?usp=share_link"
        rel="noreferrer noopener" 
        target="_blank"
        className='btn btn-pdf'
      >
      </a>{' '} </span>
      </div>
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
             
                    <details> 
                      <summary>
                         <span id="open"> Détails  </span>
                        <span id="close"> Fermer  </span>
                      </summary>
                        <p>{d.text}</p>
                        <p>{d.text2}</p>
                        <p>{d.text3}</p>
                    </details>
                  
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      </div>
    </div>
  )
}
