import React from "react";
import CardProgram from "./CardProgram";

const Content = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-5xl" id="project">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">
        Incoming Program
      </h1>
      <hr className="max-w-4xl h-1 mx-auto my-4 bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex flex-row justify-between mx-3 my-3 gap-2">
        <CardProgram />
        <CardProgram />
      </div>
    </div>
  );
};

export default Content;
