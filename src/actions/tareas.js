import { db } from "../firebase/firebase";
import { loadTareas } from "../helpers/loadTareas";

export const startNewTarea = (tarea) => {
  return async (dispatch) => {
    const nuevaTarea = {
      nombreTarea: tarea,
    };
    const data = await db.collection("tareas").add(nuevaTarea);
    dispatch(addNewNote(data.id, nuevaTarea));
  };
};

export const addNewNote = (id, note) => ({
  type: "agregar",
  payload: {
    id,
    ...note,
  },
});

export const startLoadingTarea = () => {
  return async (dispatch) => {
    const tareas = await loadTareas();
    dispatch(setTareas(tareas));
  };
};

export const setTareas = (tareas) => ({
  type: "listar",
  payload: tareas,
});

export const startDeleting = (id) => {
  return async (dispatch) => {
    await db.doc(`tareas/${id}`).delete();
    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: "eliminar",
  payload: id,
});

export const selectTarea = (tarea) => ({
  type: "seleccionarTarea",
  payload: tarea,
});

export const deselectTarea = () => ({
  type: "deseleccionarTarea",
  payload: null,
});

export const startUpdateTarea = ( tarea ) => {
    return async( dispatch ) => {
        const tareaToFirestore = { ...tarea };

        delete tareaToFirestore.id;
        
        await db.doc(`tareas/${ tarea.id }`).update( tareaToFirestore );

        dispatch( refreshNote( tarea.id, tareaToFirestore ) );
    }
}

export const refreshNote = ( id, note ) => ({
    type: "modificar",
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});