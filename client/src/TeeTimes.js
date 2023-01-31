import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar"

function TeeTimes({user}){
    let { id } = useParams();
    const [allTeeTimes, setAllTeeTimes] = useState([]);
    const [date, setDate] = useState(new Date());
    const [clicked, setClicked] = useState(false)
    let today = date.toLocaleString().split(",")[0] 
    let time = date.toDateString()
    const [submitTee, setSubmitTee] = useState({
        players: '',
        price: '',
        holes: '',
        time: ''
      })
    

    useEffect(() => {
        fetch(`/teetimes/${id}`).then((r) => {
          if (r.ok) {
            //  r.json().then((data) => setAllTeeTimes(data))
            r.json().then((data) => 
            setAllTeeTimes(data.filter((teetime)=>  teetime.date === today  )));
          }
        });
      }, [date]);

    
    
      function onChange(calDate){
        setDate(calDate)
      }
        
       
    
      function onClickDay(day){
        console.log(day)
        let colorCal = {
            background: "red"
        }
      }

    let colorCal = {
        background: ""
    }
      
    function handleClick(){
        setClicked(!clicked)
    }

    function handleSubmit(event){
        event.preventDefault()
        const finalTeeData = {
            players: parseInt(submitTee.players),
            price: parseInt(submitTee.price),
            holes: parseInt(submitTee.holes),
            time: submitTee.time,
            date: today,
            user_id: user.id,
            course_id: parseInt(id),
            status: "Posted"
        }
        console.log(finalTeeData)
        fetch('/teetimes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(finalTeeData)
        })
        .then((r) => r.json())
        .then((teeTime) => setAllTeeTimes([...allTeeTimes, teeTime]), setClicked(false), setSubmitTee({ players: '',
        price: '',
        holes: '',
        time: ''}))
    }

    function handleChange(event){
        event.preventDefault()
        setSubmitTee({
          ...submitTee, 
          [event.target.name]: event.target.value
        })
      }
      console.log(allTeeTimes)
    return (
        <div className="white"> <strong>Showing Tee Times for:</strong> {time}
        <section className="coursess">
            <Calendar onChange={onChange} style={colorCal} onClickDay={onClickDay} value={date} className="react-calendar"/>
            <h1 className="posty">Post a Tee Time:
                <p></p>
                <p></p>
                <button className="postyy" onClick={handleClick}>Click Here</button>
            </h1>
            {clicked ? (
            <form onSubmit={handleSubmit}>
                <label> Players: <br/>
                    <input
                    type="text"
                    name="players"
                    value={submitTee.players}
                    onChange={handleChange}>
                    </input>
                </label>
                <br/>
                <label> Price: <br/>
                    <input
                    type="text"
                    name="price"
                    value={submitTee.price}
                    onChange={handleChange}>
                    </input>
                </label>
                <br/>
                <label> Holes: <br/>
                    <input
                    type="text"
                    name="holes"
                    value={submitTee.holes}
                    onChange={handleChange}>
                    </input>
                </label>
                <br/>
                <label> Time: <br/>
                    <input
                    type="text"
                    name="time"
                    value={submitTee.time}
                    onChange={handleChange}>
                    </input>
                </label>
                <br/>
                <label> Date: {today} </label>
                <br/>
                <button type="submit">Submit Tee Time</button>
            </form>) : allTeeTimes.map((teetime) => (
                <section className="gray" key={teetime.id}>
                    <div className="card-content">
                        <h2 className="categoryy category__03">{teetime.time}:</h2>
                    </div>

                    <h1 className="categoryyy">${teetime.price}</h1>
                    
                    <footer className="size">
                        <span>Player: ({teetime.players})</span> 
                        <p></p> 
                        <span>Holes: ({teetime.holes})</span>
                        <p></p>
                        <button>
                         <Link to={`/teetimes/book/${teetime.id}`} >Book Now</Link>
                        </button>
                    </footer>

                </section>
            ))}
            

            {/* {allTeeTimes.map((teetime) => (
                <section className="gray" key={teetime.id}>
                    <div className="card-content">
                        <h2 className="categoryy category__03">{teetime.time}:</h2>
                    </div>

                    <h1 className="categoryyy">${teetime.price}</h1>
                    
                    <footer className="size">
                        <span>Player: ({teetime.players})</span> 
                        <p></p> 
                        <span>Holes: ({teetime.holes})</span>
                        <p></p>
                        <button>
                         <Link to={`/teetimes/book/${teetime.id}`} >Book Now</Link>
                        </button>
                    </footer>

                </section>
            ))} */}
            
        </section>
        </div>
     )
}
export default TeeTimes