import { FC } from "react"
import { ICurso } from "../../types/ICurso"
import { useNavigate } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

interface ICursoCard{
    curso: ICurso
}

export const CursoCard: FC<ICursoCard> = ({curso}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/estudiantes?cursoId=${curso.id}`);
  }

  return (
    <div>
      <Card style={{ width: '17rem' }}>
      
      <Card.Body>
        <Card.Title>{curso.nombre}</Card.Title>
        <Card.Text>
          Cantidad de estudiantes: {curso.estudiantes.length}
        </Card.Text>
        <Button onClick={handleClick}>Entrar al Curso</Button>
      </Card.Body>
    </Card>
        
         
    </div>
  )
}
