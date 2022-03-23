import React, { useEffect, useRef } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectTarea,
  startNewTarea,
  startUpdateTarea,
} from "../../actions/tareas";
import { useForm } from "../../hooks/useForm";

const initStateForm = {
  id: "",
  nombreTarea: "",
};

export const FormTarea = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.tareas);
  if(active){
    initStateForm.id = active.id;
    initStateForm.nombreTarea = active.nombreTarea;
}
  const [formValues, handleInputChange, reset] = useForm(initStateForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(initStateForm);

    if(formValues.id){
        dispatch(startUpdateTarea(formValues));
    }else{
        dispatch(startNewTarea(formValues.nombreTarea));
    }
    reset(initStateForm);
  };

  const cancelarTarea = () => {
    dispatch(deselectTarea());
    reset(initStateForm);
  };

  return (
    <div className="col-4">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center">
          {active ? "Editar Tarea" : "Agregar Tarea"}
        </h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingresse Tarea"
          name="nombreTarea"
          value={formValues.nombreTarea}
          onChange={handleInputChange}
        />
        {active ? (
          <>
            <button
              className="btn btn-warning btn-block"
              onClick={handleSubmit}
            >
              Editar
            </button>
            <button
              className="btn btn-dark btn-block mx-2"
              onClick={cancelarTarea}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button className="btn btn-dark btn-block" onClick={handleSubmit}>
            Agregar
          </button>
        )}
      </form>
    </div>
  );
};
