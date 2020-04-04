export const createProject = (project) => {
  return (dispatch, getState, { getFireBase, getFirestore }) => {
    // async call
    const fireStore = getFirestore();
    fireStore.collection('projects').add({
      ...project,
      authorFirstName: 'Zenda',
      authorLastName: 'Hoshi',
      authorId: '132e',
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      });
    }).catch((err) => {
      dispatch({
        type: 'CREATE_PROJECT_ERROR',
        err
      });
    })
  };
};