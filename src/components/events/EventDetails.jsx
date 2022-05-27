import React ,{useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { selectedEvent, removeSelectedEvent } from "../../store/actions/eventActions";

import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import './event.css'
 const EventDetails = () => {
    let { id } = useParams();
   
    const event_id =  useParams();
    let event = useSelector((state) => state.event);
    console.log(event)
  
   const dispatch = useDispatch();
   
   const fetchEventDetail = async ({id}) => {
     
     console.log(`http://localhost:5050/api/events/${id}`)
     const response = await axios.get(`http://localhost:5050/api/events/${id}`)
 
     dispatch(selectedEvent(response.data));
   }
   
   
     useEffect(() => {
       if (event_id && event_id !== "") 
       fetchEventDetail(event_id);
       return () => {
         dispatch(removeSelectedEvent());
       };
     }, []);
       
  
  return (

   
    <div id="container">  
  
            <div className="product-details">
                    <h1>{event.title}</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                </span>
         <p className="information">{(event.description)}</p>
            
        <div className="control">
                    <button className="btn btn-detail">
                      <span className="buy">Subscribe</span>
                    </button>          
        </div>
            
        </div>
        
                    <div className="product-image">
                    
                    <img src={event.url} alt="" />
                        <div className="info">
                                    <h2>Additional Info</h2>
                                    <ul>
                                        <li><strong>Food : </strong> {event.meal} </li>
                                        <li><strong>Dressing : </strong>{event.dresscode}</li>
                                        <li><strong>Material: </strong>Eco-Friendly</li>
                                        
                                    </ul>
                        </div>
                    </div>

   </div>
    )
}

export default EventDetails