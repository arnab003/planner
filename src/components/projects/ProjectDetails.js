import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails(props) {
  if (props.project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{props.project.title}</span>
            <p>{props.project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Arnab Saha</div>
            <div>31 Mar, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let projects = state.firestore.ordered.projects;
  let project = projects ? projects.find(project => project.id === id) : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
}]))(ProjectDetails);
