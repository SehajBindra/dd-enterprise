import React from "react";

function Banner() {
  return (
    <div>
      <section>
        <header className="bg-black/80 border-b border-gray-800">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              <div className="flex items-center flex-shrink-0">
                <a href="#" title="" className="inline-flex">
                  <span className="sr-only"> Rice Enterprise </span>
                  <img className="w-auto h-8" src="" alt="" />
                </a>
              </div>

              <div className="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"
                >
                  {" "}
                  Live Preview{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"
                >
                  {" "}
                  Documentation{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"
                >
                  {" "}
                  Help{" "}
                </a>
              </div>

              <div className="flex items-center justify-end space-x-5">
                <button
                  type="button"
                  className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>

                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                    {" "}
                    3{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover opacity-80 object-right-bottom w-full h-full"
              src="https://img.freepik.com/free-photo/front-view-raw-rice-inside-plate-dark-grey-space_140725-87463.jpg?w=996&t=st=1680852629~exp=1680853229~hmac=083235736af36e0191d83f78be22f02eba3aa890ace781b824dc8fe9b86e5699"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                The Best Rice, Sustainably Grown and Harvested with Care
              </h1>
              <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
                nisl eu consectetur. Mi massa elementum odio eu viverra amet.
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                  role="button"
                >
                  Get UI Kit Now
                </a>

                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-transparent
                            border border-transparent
                            rounded-md
                            sm:px-4
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                            hover:bg-gray-700
                        "
                  role="button"
                >
                  Check live preview
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;