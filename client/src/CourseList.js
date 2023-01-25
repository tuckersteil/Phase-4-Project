import React, { useEffect, useState } from "react";

function CourseList(){
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch("/courses")
        .then((r)=> r.json())
        .then((courses)=> setCourses(courses));
    }, []);

    console.log(courses)

    return (
        <section className="courses">
            {courses.map((course) => (
                <article className="course" key={course.id}>
                    <picture className="thumbnail">
                        <img src={course.img}/>
                    </picture>

                    <div className="card-content">
                        <h2 class="category category__03">{course.name}:</h2>
                    </div>

                    <footer>
                        <div className="post-meta">
                            <span>{course.location}--</span>
                            <span className="comments">(Par: {course.par}),</span>
                            <span className="comments">(Holes: {course.holes}),</span>
                            <span className="comments">(length: {course.length})</span>
                        </div>
                    </footer>               
                   
                </article>
            ))}
        </section>
    )
}
export default CourseList;