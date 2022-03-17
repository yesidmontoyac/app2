import { db } from "../firebase/firebase";

export const loadTareas = async () => {
    const tareasSnap = await db.collection('tareas').get();
    const tareas = [];
    tareasSnap.forEach( snapHijo => {
        tareas.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });
    console.log(tareas);
    return tareas;
}