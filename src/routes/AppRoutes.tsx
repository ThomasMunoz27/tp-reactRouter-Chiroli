import { Route, Routes } from "react-router-dom"
import { CursosScreen } from "../components/screens/CursosScreen"
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen"

export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element= {<CursosScreen/>}></Route>
        <Route path="/estudiantes" element= {<EstudiantesScreen/>}></Route>
    </Routes>
    </>
  )
}
