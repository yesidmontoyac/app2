const initialState = {
    tareas: [],
    active: null
}

export const tareasReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "agregar":
            return {
                ...state,
                tareas: state.tareas.map(
                    tarea => tarea.id === action.payload.id ? action.payload.tarea : tarea
                )
            }
        case "eliminar":
            return {
                ...state,
                active: null,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case "listar":
            return {
                ...state,
                tareas: [...action.payload]
            }
            default : return state
    }
}