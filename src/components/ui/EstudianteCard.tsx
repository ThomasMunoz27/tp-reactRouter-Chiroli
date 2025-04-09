import { FC } from "react"
import { IStudent } from "../../types/IStudent"
import { Card } from "react-bootstrap"


interface IEstudianteCard {
    estudiante: IStudent
}

export const EstudianteCard:FC<IEstudianteCard> = ({estudiante}) => {

    

  return (
    <div>
        <Card style={{ width: '17rem' }}>
      
      <Card.Body>
        <Card.Title>Nombre del Estudiante: {estudiante.nombre}</Card.Title>
        <Card.Text>
          Edad: {estudiante.edad}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
