import { Route, Routes } from "react-router";
import AddUser from "./AddUser";
import Api from "./api";
import JsonApi from "./jsonApi";
import EditUser from "./EditUser";
import ReducerComponent from "./Reducer";

export default function RoutesPath() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Api />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/json" element={<JsonApi />} />
          <Route path="/reducer" element={<ReducerComponent />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}
