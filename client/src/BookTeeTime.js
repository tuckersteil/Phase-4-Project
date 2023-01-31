import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Confirm from "./Confirm";
function BookTeeTime(){
    let { id } = useParams();
    const [teetime, setTeeTime] = useState([])
    const [course, setCourse] = useState([])


    useEffect(() => {
        fetch(`/teetimes/book/${id}`)
        .then((r)=> r.json())
        .then((time)=> setCourse(time));
    }, [id]);

    useEffect(() => {
        fetch(`/teetimes/time/${id}`)
        .then((r)=> r.json())
        .then((time)=> setTeeTime(time));
    }, [id]);

    console.log(teetime)
    console.log(course)
    return (
        <div className="white">
            <div  className="numeral"  >
                <picture className="new-thumb">
                    <img src={course.img}/>
                </picture>

                <div className="card-content-new">
                    <h2 className="category-new category__03">{course.name}:</h2>
                </div>

                <footer>
                    <div className="post-meta">
                        <strong className="comments-new">{course.location}--</strong>
                        <span className="comments-new">(Par: {course.par}),</span>
                        <span className="comments-new">(Holes: {course.holes}),</span>
                        <span className="comments-new">(length: {course.length})</span>
                    </div>
                </footer>      

                <strong className="comments-new">Description: </strong> {course.description}  
                <p></p>   
                <p></p>   
            </div>
            
            <Confirm teetime={teetime}/>
        </div>
    )
}
export default BookTeeTime;

{/* <section>
                    <div className="card-content grayy" >
                        <h2 className="categoryy category__03">{teetime.time}:</h2>
                        <h1 className="categoryyy grayy">${teetime.price}</h1>
                    
                    <footer className="size grayy">
                        <span>Player: ({teetime.players})</span> 
                        <p></p> 
                        <span>Holes: ({teetime.holes})</span>
                        <p></p>
                    </footer>
                    </div>

                    
                    </section>

                    <section>
                    fyf
                    </section> */}