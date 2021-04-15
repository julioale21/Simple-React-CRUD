import React from "react";
import CrudApp from "./components/CrudApp";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-4xl uppercase text-center font-bold text-blue-400 mt-6">
        React Crud App
      </h1>
      <CrudApp />
    </div>
  );
};

export default App;
