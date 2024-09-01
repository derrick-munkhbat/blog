export function Content() {
  return (
    <>
      <div className="mt-32 mb-32 gap-5">
        <div className="flex flex-col gap-5 mb-10">
          <h1 className="text-2xl">Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div className="flex justify-between gap-5">
            <div className="rounded-xl border p-4">
              <h6>Address</h6>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="rounded-xl border p-4">
              <h6>Contact</h6>
              <p>313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-200 gap-5 rounded-xl pt-8 pl-20 pr-20 pb-8">
          <h2>Leave a message</h2>
          <div className="flex justify-between gap-5 max-md:flex-col">
            <input
              className="rounded-md text-center p-2 border-opacity-100"
              type="text"
              placeholder="your name"
            />
            <input
              className="rounded-md text-center p-2"
              type="text"
              placeholder="your email"
            />
          </div>

          <input
            className="rounded-md text-center p-2"
            type="text"
            placeholder="subject"
          />
          <textarea
            className="rounded-md text-center p-2"
            type="text"
            placeholder="Write a message"
          ></textarea>
          <button className="bg-blue-700 w-32 text-center text-white rounded-xl p-1">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
