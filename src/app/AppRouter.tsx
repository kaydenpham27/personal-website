import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <h1> Hello </h1>
            </>
          }
        />
        <Route path="/posts" element={<></>} />
        <Route path="/contact" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
