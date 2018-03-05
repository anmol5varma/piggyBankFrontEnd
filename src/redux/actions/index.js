const add = 'ADD_NOTES';
const edit = 'EDIT_NOTES';

export const addNote = note => ({
  type: add,
  payload: note,
});

export const editNote = (note, index) => ({
  type: edit,
  payload: {
    noteIndex: index,
    note,
  },
});
