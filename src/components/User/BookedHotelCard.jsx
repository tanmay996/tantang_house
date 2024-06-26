import React from 'react'
import { useParams ,useNavigate, Link} from 'react-router-dom'


function BookedHotelCard(props) {
    const history = useNavigate();
    
    const { hotelName } = useParams();
   
  return (
    <div>
       
         <div className='hotel-list spun_cotton p-3 p-md-5'>
            <div className='container'>
                <div className='hotel-list-layout p-3 p-md-5'>
                  <div className='hotel-img'>
                    <div className='row row-gap-4'>
                      <div className='col-md-6 d-flex  align-items-center'>
                        <img alt="hotel1" height="300" width="500" src={props.image} className=' rounded-4'/>
                      </div>
                      <div className='col-md-6'>
                        <div className=' h-100 d-flex flex-column justify-content-between'>
                            <div>
                            <div className='hotel-name  d-flex align-items-sm-center align-items-start justify-content-between'>
                              <span className=' text-capitalize text-lime_green fs-33 fw-semibold'>{props.name}</span>
                              <span className='d-flex text-white  bg-dark-blue p-1 px-2  rounded-2  align-items-center'>
                              <span className='px-1'>{props.star}</span>

                               <i className="bi bi-star-fill"></i>
                              </span>
                            </div>
                            <div className='text-lime_green'>
                            <span className=' text-capitalize'>{props.city}</span> 
                            <span> | {props.detail}</span>
                            </div>
                            
                            </div>
                            <div className=' p-2 '>
                              <span className='d-block text-capitalize fs-22'>Property highlights</span>
                              <ul className=' list-unstyled properties'>
                                <li><i className="bi bi-award"></i>{props.property1}</li>
                                <li><i className="bi bi-award"></i>{props.property2}</li>
                                <li><i className="bi bi-award"></i>{props.property3}</li>
                                <li><i className="bi bi-award"></i>{props.property4}</li>

                              </ul>
                            </div>
                            <div className='d-flex justify-content-around  justify-content-md-between align-items-md-end'>
                              <div>
                                <span className="text-danger fw-bold">Only {props.rooms} room left at this price on our site</span>
                              </div>
                            <div className=' text-end'>
                             <del className='me-3 fs-15 text-danger'>&#8377;{props.price}</del>
                             <span>&#8377;{props.price}</span>
                            {/* <button className='btn btn-primary d-block avail-btn' onClick={ () => history('/mytrip',{ state:hotelName})}>Continuee<i className="bi bi-calendar2-check ms-2"></i></button> */}
                            {/* <button className='btn btn-primary d-block avail-btn' onClick={ () => history('/mytrip',{ state:hotelName})}>Continuee<i className="bi bi-calendar2-check ms-2"></i></button> */}
                          
                            </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookedHotelCard