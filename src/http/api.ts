import axios from "axios"
import { ICurso } from "../types/ICurso"

//llamada a la url del archivo .env
const URL_CURSOS = import.meta.env.VITE_URL_CURSOS

//obtiene todos los cursos con llamada de axios
export const getAllCursos = async () => {
    try{
        const response = await axios.get<ICurso[]>(URL_CURSOS)
    return response.data
    }catch (error){
        console.log("hay un error en getAllTareas")
    }
}