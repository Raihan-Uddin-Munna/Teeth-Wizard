import { Outlet } from "react-router-dom";

 

const MainLayout = () => {
    return (
        <div>
            I am MainLayout.jsx
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;