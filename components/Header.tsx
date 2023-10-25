import Image from "next/image";
import { useState } from "react";

interface props {
  language: string;
  setLanguage: any;
  t: any;
}

const Header = (props: props) => {
  const option = [
    {
      value: "en",
      label: "English",
    },
    { value: "vn", label: "Vietnamese" },
    { value: "ja", label: "Japanese" },
  ];
  const flag = [
    {
      value: "en",
      label: (
        <img
          className="w-6 h-6"
          src="https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg"
          alt=""
        />
      ),
    },
    {
      value: "vn",
      label: (
        <img
          className="w-6 h-6"
          src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
          alt=""
        />
      ),
    },
    {
      value: "ja",
      label: (
        <img
          className="w-6 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png"
          alt=""
        />
      ),
    },
  ];
  return (
    <div className="bg-green-700 flex flex-row justify-between h-16 items-center">
      <div className="mx-5 flex flex-row items-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1 className=" text-yellow-300 mx-5">SMILE EYES CHARITY</h1>
      </div>
      <div className="flex flex-row justify-between gap-5 mx-5">
        <a className="text-lg text-white hover:text-yellow-300" href="#project">
          {props.t.PROJECT}
        </a>
        <a
          className="text-lg text-white hover:text-yellow-300"
          href="#achievements"
        >
          {props.t.ACHIEVEMENT}
        </a>
        <a className="text-lg text-white hover:text-yellow-300" href="#blog">
          {props.t.BLOG}
        </a>
        <a
          className="text-lg text-white hover:text-yellow-300"
          href="#sponsors"
        >
          {props.t.SPONSORS}
        </a>
        <a className="text-lg text-white hover:text-yellow-300" href="#">
          {props.t.QACONTACT}
        </a>
        <div className="flex flex-row gap-1">
          {flag.map((item, index) =>
            item.value === props.language ? (
              <span key={index}>{item.label}</span>
            ) : (
              <span key={index}></span>
            )
          )}
          <select
            name="language"
            id="language"
            className=""
            onChange={(e) => props.setLanguage(e.target.value)}
            value={props.language}
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            {option.map((item, index) => (
              <option key={index} style={{ color: "black" }} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
