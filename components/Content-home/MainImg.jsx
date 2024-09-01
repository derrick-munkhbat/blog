export function MainImg() {
  return (
    <div className="flex relative max-sm:hidden">
      <img
        className="flex rounded-2xl"
        src="./images/img-main1.jpeg"
        alt="img-main1"
      />

      <div className="flex flex-col absolute bottom-0 left-0 m-2 p-5 rounded-2xl bg-white gap-3 w-1/3 h-46">
        <p className="bg-blue-700 w-20 text-center text-white rounded-xl text-sm">
          Category
        </p>
        <h1 className="text-2xl">
          Grid system for better Design User Interface
        </h1>
        <p>August 20, 2022</p>
      </div>
    </div>
  );
}
