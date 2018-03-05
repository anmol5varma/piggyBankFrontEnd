const defaultState = {
  noteIndex: -1,
  allNote: [],
  showScreen: 1,
  noteTitle: '',
  noteContent: '',
};

const notes = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTES': {
      return {
        ...prevState,
        allNote: prevState.allNote.concat(action.payload),
      };
    }
    case 'EDIT_NOTES': {
      const newArray = prevState.allNote;
      newArray[action.payload.noteIndex] = action.payload.note;
      return {
        ...prevState,
        allNote: newArray,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default notes;
