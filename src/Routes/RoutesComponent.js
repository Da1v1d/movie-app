import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<div>movie</div>}></Route>
      <Route index path="movies/:id" element={<div>ola</div>} />
    </Routes>
  );
};
