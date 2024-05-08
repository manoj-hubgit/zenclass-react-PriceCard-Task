import React from 'react';
import './Card.css';

const Card = ({card}) => {
       return (
              <>
              <div className='row row-cols-1 row-cols-md-3 m-2 g-5 cardout'>
                     {card.map((element,index)=>{
                            return(
                                 <>
                                   <div key={index}>
                                            <div className='col'>
                            <div className="card">
                                <div className="card-body">
                                   <h6 className="card-title text-center text-muted">{element.title}</h6>
                                   <h4 className="card-title text-center"><b>{element.months}/month</b></h4>
                                   <hr></hr>
                                   <h6 className="card-title"><i class={element.user.classStyle} aria-hidden="true"></i>{element.user.title}</h6>
                                   <h6 className="card-title"><i class={element.storage.classStyle} aria-hidden="true"></i>{element.storage.title}</h6>
                                   <h6 className="card-title"><i class={element.publicProject.classStyle} aria-hidden="true"></i>{element.publicProject.title}</h6>
                                   <h6 className="card-title"><i class={element.access.classStyle} aria-hidden="true"></i>{element.access.title}</h6>
                                   <h6 className={element.privateProject.muted}><i class={element.privateProject.classStyle} aria-hidden="true"></i>{element.privateProject.title}</h6>
                                   <h6 className={element.phonesupport.muted}><i class={element.phonesupport.classStyle} aria-hidden="true"></i>{element.phonesupport.title}</h6>
                                   <h6 className={element.subscription.muted}><i class={element.subscription.classStyle} aria-hidden="true"></i>{element.subscription.title}</h6>
                                   <h6 className={element.reports.muted}><i class={element.reports.classStyle} aria-hidden="true"></i>{element.reports.title}</h6>
                                </div>
                                   <div className="card-footer">
                                          <button className='btn'>Button</button>
                                   </div>
                            </div>
                     </div>
                                          </div> 
                                 </>  
                            )
                     })}
                   
              </div>
              </>
       );
};

export default Card;