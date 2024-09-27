import React, { useState, useEffect } from 'react'
import { useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { getAllEvents } from '../helpers/api_communicator';
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import NavigationLink from './shared/NavigationLink';
import '../styles/CommonEvents.css'
import axios from 'axios';


const CommonEvents= () => {
  const [events, setEvents] = useState([]);
  const [searchName, setSearchName] = useState('');  // For storing search input name
  const [searchCity, setSearchCity] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
      loadEvents();
  }, [navigate]);

  const loadEvents = async () =>{
    try {
      const response = await getAllEvents();
      const events = response.map(event => ({
        ...event,
        date: new Date(event.date) // Assuming eventDate is the field with the timestamp
      }));
      console.log(events);
      setEvents(events);
    } catch (error) {
      console.error('Error loading events:', error);
    }
  }

    
    const searchEvents = async () => {
      try {
        const response = await axios.get('/find', {
          params: {
            name: searchName,
            city: searchCity
          }
        });
        const events = response.data.map(event => ({
          ...event,
          date: new Date(event.date)
        }));
        setEvents(events);
      } catch (error) {
        console.error('Error searching events:', error);
      }
    };

  return (
    <div>
      <div className="search">
        <input type="name" placeholder='Enter The Name'  value={searchName}
          onChange={(e) => setSearchName(e.target.value)}/>
        <input type="text" placeholder='Enter The City' value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}/>
        <button onClick={searchEvents}>Search</button>
      </div>
      <h1 style={{color: 'black'}}>All events </h1>
        <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <th scope="row">
                  {index + 1}
                </th>
                <td>{event.name}</td>
                <td>{event.city}</td>
                <td>{event.country}</td>
                <td>{format(event.date, "MMMM do, yyyy")}</td>
                <td>{event.price}</td>
                <td>
                  <Link
                    className="btn mx-2 btn-secondary btn-outline-light"
                    to={{
                      pathname: "/viewCommonEvent",
                    }}
                    state={{Event: event}}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2 btn-outline-dark"
                    to={{
                        pathname: "/registerAttendee",
                    }}
                    state={{Event: event}}
                  >
                    Register
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        
        </table>
      </div>
    </div>
    <NavigationLink
                bg="#6D5147"
                to="/"
                text="Back To Home"
                textColor="black"
              />

    </div>
  )
}

export default CommonEvents

//onClick={()=> setAddButtonPopup(true)}  
//<AddEvent trigger={addButtonPopup} setTrigger={setAddButtonPopup}></AddEvent>
