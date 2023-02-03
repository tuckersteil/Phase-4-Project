import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function MyTeeTimes({user}){
console.log(user)
const [userPostTimes, setUserPostTimes]= useState([])
const [userBookTimes, setUserBookTimes]= useState([])
const [placeHolder, setPlaceHolder]= useState([])
const navigate = useNavigate();


useEffect(() => {
    fetch(`/users/time/${user.id}`)
        .then((r)=> r.json())
        .then((data)=> 
        setUserPostTimes(data.filter((teetime)=> teetime.status === "Posted" )))
}, []);

useEffect(() => {
    fetch(`/users/time/${user.id}`)
        .then((r)=> r.json())
        .then((data)=> 
        setUserBookTimes(data.filter((teetime)=> teetime.status === "Booked" )))
}, []);


function unpostTime(teetime){
    console.log(teetime.id)
    fetch(`/teetimes/${teetime.id}`, {
        method: "DELETE",
      })
      .then((r)=> r.json())  
      .then((data)=>  setUserPostTimes(data))
}

function repostTime(teetime){
    console.log(teetime)
    fetch(`/teetimes/${teetime.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({status: "Posted"})
    })
    window.location.reload(false);
    // .then((r) => r.json())
    // .then((data) => console.log(data))
    // console.log(placeHolder)
    // const tuck = placeHolder.filter((teetime)=> teetime.status === "Booked" )
    // const tucky = placeHolder.filter((teetime)=> teetime.status === "Posted" )
    // console.log(tuck)
    
}

 

   
    return(
        <div className="whiter">
            <section className="coursess whiter"> 
                <h1>Posted Tee Times:</h1>
                {userPostTimes.map((teetime)=> (
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
                        <span>Date: ({teetime.date})</span> 
                        <p></p>
                        <span>Course: ({teetime.course.name})</span>
                        <p></p>
                        <button onClick={(e) => unpostTime(teetime)}>Unpost Tee Time</button>
                    </footer>

                </section>)
                )}
            </section>
            <p></p>
            
            <section className="coursess white"> 
                <h1>Booked Tee Times:</h1>
                {userBookTimes.map((teetime)=> (
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
                        <span>Date: ({teetime.date})</span> 
                        <p></p>
                        <span>Course: ({teetime.course.name})</span>
                        <p></p>
                        <button onClick={(e) => repostTime(teetime)}>Repost Tee Time</button>
                    </footer>

                </section>)
                )}
            </section>

        
                
        </div>
    
    )
}
export default MyTeeTimes;