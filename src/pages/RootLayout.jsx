import { Outlet } from "react-router-dom"
import Sidebar from "../component/Sidebar"

const RootLayout = () => {
  return (
    <div className="flex ">
        <Sidebar cl/>
        <Outlet/>
    </div>
  )
}

export default RootLayout