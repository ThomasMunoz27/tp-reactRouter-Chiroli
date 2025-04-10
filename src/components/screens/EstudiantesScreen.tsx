import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllCursos } from "../../http/api"
import { ICurso } from "../../types/ICurso"
import { EstudianteCard } from "../ui/EstudianteCard"
import { Button } from "react-bootstrap"
import styles from "./EstudiantesScreen.module.css"

export const EstudiantesScreen = () => {
    //array de los cursos
    const [cursos, setCursos] = useState<ICurso[]>([])
    //obtiene el id del query param
    const { cursoid } = useParams()
    
    

    //curso del query param
    const [selectedCurso, setSelectedCurso] = useState<ICurso | null>(null)

    //al hacer click se navega a la vista de cursos
    


    useEffect(()=> {
            //segunda llamada a los cursos
            const secondGetCursos = async() =>{
                const response = await getAllCursos()
                setCursos(response ?? [])
                
            }
    
            secondGetCursos()
            
          }, [])

     useEffect(() => {
        if (cursos.length === 0) return
            
        const foundCurso = cursos.find((curso) => curso.id == Number(cursoid))
        setSelectedCurso(foundCurso ?? null)
        }, [cursoid, cursos])


    //si no existe un query param devuelve un mensaje
    if(!cursoid){
        return (
        <>
            <h2>No se ha seleccionado un curso</h2>
        </>
        )
    }


  return (
    <div>
        <div className={styles.headerScreenStudents}>
            <Link to={"/"} ><Button >Volver</Button></Link>
            
            <h1>Estudiantes Screen</h1>

        </div>
        <h2>Nombre del Curso: {selectedCurso?.nombre}</h2>
        <div className={styles.studentsContainer}>


            {selectedCurso?.estudiantes.map((estudiante) => (
                <EstudianteCard key={estudiante.id} estudiante={estudiante}></EstudianteCard>
            ))}

        </div>

        


    </div>
  )
}
