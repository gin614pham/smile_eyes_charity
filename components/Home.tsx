import React from "react";

const Homepage = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl">
      <h1 className="text-4xl font-bold text-center my-5">
        Pa-Ong Village Development Project
      </h1>
      <div className="flex flex-row justify-between mx-3">
        <h4 className="text-xl underline">10/2023 - 10/2024</h4>
        <h4 className="text-xl font-bold">Địa điểm</h4>
      </div>
      <div className="shadow-2xl border border-gray-200 bg-white rounded-lg mt-5 my-3">
        <div className="flex flex-row gap-5 mx-2 my-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vEpRyDuPVVU?si=KfFY1fWWuYcU5bX8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="flex flex-col content-start w-auto">
            <div>
              <h2 className="text-2xl font-bold">Project name</h2>
              <p className="text-base">
                Description shdgajhd dáhjgda ádjgdjahs djasgdasjbd jasgd
                ádjasgdajs duiassgdasj
              </p>
            </div>
            <button className="text-end">share</button>
            <div className="flex flex-row justify-between my-2">
              <a href="#">Details</a>
              <a href="#">Details</a>
              <a href="#">Details</a>
            </div>
            <div>
              <div className="flex flex-row gap-10 my-2">
                <span>Project:</span>
                <span>40%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-yellow-500">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
            <button className="bg-red-300 rounded-lg mx-5 my-5 px-2 py-2 font-bold">
              Be a contributor OR SPONSOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
