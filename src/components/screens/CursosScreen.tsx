import { useEffect, useState } from "react"
import { getAllCursos } from "../../http/api"
import { ICurso } from "../../types/ICurso"
import { CursoCard } from "../ui/CursoCard"
import styles from "./CursosScreen.module.css"

export const CursosScreen = () => {
  //array de los cursos
    const [cursos, setCursos] = useState<ICurso[]>([])
    
    useEffect(()=> {
        //primer llamada a los cursos
        const firstGetCursos = async() =>{
            const response = await getAllCursos()
            setCursos(response ?? [])
            
        }

        firstGetCursos()
        
      }, [])
      
      return (
    <div>

      <div className={styles.headerCursosScreen}>
        <h1>Crusos Screen</h1>
      </div>

      <div className={styles.cursosContainer}>

          {cursos.length > 0 ? (
          cursos.map((curso) => (
            <CursoCard key={curso.id} curso={curso}/>
          ))
        ) : (
          <p>Cargando cursos...</p>
        )}
      </div>
    </div>
  )
}
