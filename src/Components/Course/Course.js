import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher,faShoppingCart ,faTags} from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    
   console.log(props);
   const {name , img , instructor,courseFee} = props.name;
    return (
        <div className="col-sm-6 mb-4">
                    <div className="card">
                        <img className="card-img-top" src={img} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <h6><FontAwesomeIcon icon={faChalkboardTeacher} /> Instructor : {instructor}</h6>
                                <h6 className="my-4"><FontAwesomeIcon icon={faTags} />Price : $ {courseFee}.00</h6>
                                <button className="btn btn-primary" onClick={()=>props.handleAddClick(props.name)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
                            </div>
                    </div>
                


               

                

                




                
        </div>
                        
                    
            
        
    );
};

export default Course;