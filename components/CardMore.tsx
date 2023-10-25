import image from "../public/image.png";
import Image from "next/image";

const CardMore = () => {
  return (
    <div className=" shadow-lg border border-green-500 bg-white flex flex-row w-full h-auto rounded-lg ">
      <div className="relative overflow-hidden object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg">
        <Image src={image} alt="image" fill objectFit="fill" />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default CardMore;