import React from "react";

import { useDispatch } from "react-redux";
import { startLoadingTarea } from "./actions/tareas";
import { FormTarea } from "./components/Tareas/Form";
import { ListarTareas } from "./components/Tareas/List";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startLoadingTarea());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      <div className="row">
        <ListarTareas />
        <FormTarea />
      </div>
    </div>
  );
}

export default App;
