import CardCompleted from "./CardCompleted";
import CardMore from "./CardMore";

const Completed = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">
        Completed Projects
      </h1>
      <hr className="max-w-4xl h-1 mx-auto my-4 bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex flex-row gap-2 mx-3">
        <div className="max-w-3xl w-full">
          <CardCompleted />
        </div>

        <div className="shadow-lg border border-gray-200 bg-emerald-400 rounded-lg mt-5 my-3  w-full max-w-lg">
          <span className="text-xl font-bold ps-5 pt-5">More</span>
          <div className="mx-5 my-5 flex flex-col gap-4">
            <CardMore />
            <CardMore />
            <CardMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
