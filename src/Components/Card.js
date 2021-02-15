import React from 'react';
const Card = (props) => (
    <div className="col-lg-9">
    <div className="Card row">
    { props.result.map(el=> {
        return (
            <div className="col-4 py-5">                    
            <div className="card">
<img className="card-img-top" src={`/img/${el.image}.png`}  alt="card" />
        <div className="card-body">
          <h6 className="card-title">{el.name}</h6>
          <p className="card-text pb-2">{el.price} $</p>
        </div>
        </div>
       </div>   
  )
  })
  }
    </div>
    </div>
)
export default Card;




			
		 
   