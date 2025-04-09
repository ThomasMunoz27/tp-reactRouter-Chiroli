import { IStudent } from "./IStudent"

export interface ICurso{
    id: number
    nombre: string
    estudiantes: IStudent[]
}