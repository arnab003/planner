import React from 'react';

export default function ProjectDetails(props) {
  console.log(props.match.params.id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni esse, nobis enim exercitationem mollitia delectus! Perferendis maxime corporis ipsum. Iure commodi molestias dolorum! Maxime repellendus a fugit quod veritatis nihil.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Arnab Saha</div>
          <div>31 Mar, 2am</div>
        </div>
      </div>
    </div>
  );
}
