import React from 'react' ; 
import {Link} from 'react-router-dom' ;

export default function Card(props) {
  
  return (

    <>
        <div className="card card-size text-light bg-dark"  >
        <img src={props.image1} class="card-img-top " alt="image" width={`250px`} height={`300px`}/> 
          <div className="card-body ">
              <div className="card-title mb-3">
              <h3>{props.name}</h3>
              </div>
              <div className="card-text mb-3">
              <p><i class="bi bi-currency-dollar">{props.price}</i></p>
              </div>
                
          </div>
        </div>
 

    
    </>

  )
}
