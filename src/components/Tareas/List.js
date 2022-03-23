import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTarea, startDeleting } from "../../actions/tareas";
export const ListarTareas = () => {
  const { tareas } = useSelector((state) => state.tareas);
  const dispatch = useDispatch();

  const eliminarTarea = (id) => {
    dispatch(startDeleting(id));
  };
  
  const editarTarea = (tarea) => {
    dispatch(selectTarea(tarea));
  };

  return (
    <div className="col-md-6">
      <h3>Listado de tareas</h3>
      <ul className="list-group">
        {tareas.map((item) => (
          <li className="list-group-item" key={item.id}>
            <span className="lead">{item.nombreTarea}</span>
            <button
              className="btn btn-danger btn-sm float-end mx-2"
              onClick={() => eliminarTarea(item.id)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-warning btn-sm float-end"
              onClick={() => editarTarea(item)}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
