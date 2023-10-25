import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn, CiShare1 } from 'react-icons/ci';

interface Props {
  t: any;
}

const Homepage = (t: Props) => {
  return (
    <div className="mx-auto p-2 w-full max-w-7xl">
      <p className="text-5xl font-bold text-center mb-3">{t.t.NAMEPROJECT}</p>
      <div className="flex justify-between">
        <div className="flex flex-row items-center justify-center order-first gap-2">
          <IoCalendarOutline className="w-10 h-10" />
          <span className="text-2xl">10/2023-10/2024</span>
        </div>
        <div className="order-last">
          <CiLocationOn className="w-12 h-12" />
        </div>
      </div>
      <div className="shadow-2xl border border-gray-200 bg-white rounded-lg mt-5 my-3">
        <div className="flex flex-row gap-5">
          <iframe
            className="w-10/12 rounded-l-lg"
            height={450}
            src="https://www.youtube.com/embed/543jwFfCZvg?si=qPcHutduGIYha_68"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="flex flex-col justify-between p-4">
            <div>
              <p className="text-3xl font-bold">Project name</p>
              <p className="text-base">
                Description shdgajhd dáhjgda ádjgdjahs djasgdasjbd jasgd
                ádjasgdajs duiassgdasj
              </p>
            </div>
            <div className="flex flex-row-reverse w-full">
              <CiShare1 className=" w-6 h-6" />
            </div>
            <div className="flex flex-row justify-between my-2">
              <a className="font-bold underline" href="#">
                {t.t.DETAILS}
              </a>
              <a className="font-bold underline" href="#">
                {t.t.PLAN}
              </a>
              <a href="#">Details</a>
            </div>
            <div>
              <div className="flex flex-row gap-10 my-2">
                <span>{t.t.PROJECT}:</span>
                <span>40%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
            <button className="bg-red-300 rounded-lg p-2 font-bold">
              <div>{t.t.BUTTON_BE_THE_CONTRIBUTOR_OR_SPONSOR}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
