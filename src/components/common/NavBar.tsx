import { useState } from "react";

export default () => {
  const [state, setState] = useState(false);

  // Replace / paths with your paths
  const navigation = [
    { title: "Works", path: "/works" },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full border-b bg-white md:static md:border-none md:text-sm">
      <div className="mx-auto max-w-6xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <a href="/">
            <img
              width="940"
              height="295"
              src="/logo/250-150.png"
              alt="netronk innovations"
              loading="eager"
              decoding="auto"
              srcSet="/logo/250-150.png 500w, /logo/400-100.png 1000w"
              className="hidden h-12 w-fit sm:block"
            />
            <img
              width="940"
              height="295"
              src="/logo/160-160.png"
              alt="netronk innovations"
              loading="eager"
              decoding="auto"
              className="h-8 w-fit sm:hidden"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${state ? "block" : "hidden"}`}
        >
          <ul className="items-center justify-end space-y-6 md:flex md:space-y-0 md:space-x-6">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden h-6 w-px bg-gray-300 md:block"></span>
            <li>
              <a
                href="/contact"
                className="group relative inline-block px-4 py-2 font-medium"
              >
                <span className="bg-primary absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="border-primary group-hover:bg-primary absolute inset-0 h-full w-full border-2 bg-white"></span>
                <span className="text-primary relative group-hover:text-white">
                  Let's Colliberate
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
