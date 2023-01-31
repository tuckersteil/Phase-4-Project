import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeeTimes from "./TeeTimes";
function Course({user}){
    const [courseInfo, setCourseInfo] = useState([]);
    let { id } = useParams();
   console.log(user)
    useEffect(() => {
        fetch(`/courses/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => setCourseInfo(data));
          }
        });
      }, [id]);

      console.log(courseInfo.id)

    return (
        <div className="white">
            <div  className="numeral" key={courseInfo.id} to="/course" >
                <picture className="new-thumb">
                    <img src={courseInfo.img}/>
                </picture>

                <div className="card-content-new">
                    <h2 className="category-new category__03">{courseInfo.name}:</h2>
                </div>

                <footer>
                    <div className="post-meta">
                        <strong className="comments-new">{courseInfo.location}--</strong>
                        <span className="comments-new">(Par: {courseInfo.par}),</span>
                        <span className="comments-new">(Holes: {courseInfo.holes}),</span>
                        <span className="comments-new">(length: {courseInfo.length})</span>
                    </div>
                </footer>      

                <strong className="comments-new">Description: </strong> {courseInfo.description}     
            </div>
            <p></p>
            <TeeTimes user={user}/>
        </div>

            
// today={today}

        
    )
}
export default Course;