const initialState = {
  tareas: [],
  active: null,
};

export const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "agregar":
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
      };
    case "eliminar":
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case "listar":
      return {
        ...state,
        tareas: [...action.payload],
      };
    case "seleccionarTarea":
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case "modificar":
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload.note : tarea
        ),
        active: null,
      };
    case "deseleccionarTarea":
      return {
        ...state,
        active: null,
      };
    default:
      return state;
  }
};
