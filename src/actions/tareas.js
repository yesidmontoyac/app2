import { db } from "../firebase/firebase";
import { loadTareas } from "../helpers/loadTareas";

export const startNewTarea = (tarea) => {
    return async (dispatch, getState) => {
        const nuevaTarea = {
            nombreTarea: tarea
        }
        const data = await db.collection('tareas').add(nuevaTarea)
        dispatch(newTarea(data.id, nuevaTarea));
    }
}
export const newTarea = (id, tarea) => {
    return {
        type: "agregar",
        payload: {
            id,
            ...tarea
        }
    }
}

export const startLoadingTarea = () => {
    return async (dispatch) => {
        const tareas = await loadTareas();
        dispatch(setTareas(tareas));
    }
}

export const setTareas = (tareas) => ({
    type: "listar",
    payload: tareas
});