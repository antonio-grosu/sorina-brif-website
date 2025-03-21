import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-red-100 w-full text-black flex flex-col md:flex-row min-h-screen justify-center">
        <div className="bg-rose-100 w-5/7  mt-20 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-12 w-5/12">
            <h1 className="font-semibold text-5xl">Cum ma poti contacta?</h1>
            <p className="max-w-7/12">
              Daca ai intrebari sau doresti sa programezi o sedinta, ma poti
              contacta astfel:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
                <p>+40756 879 234</p>
              </div>
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                </svg>
                <p>contact@sorina-brif.ro</p>
              </div>
            </div>
          </div>
          <div className="w-7/12 h-inerit flex">
            <form action="">
              {/*  */}
              <div className="flex justify-between h-full">
                <div className="flex gap-12 flex-col h-full">
                  <div className="flex flex-col">
                    <label htmlFor="nume">Nume</label>
                    <input
                      type="text"
                      placeholder="ex.Ion Popescu"
                      id="nume"
                      className="pl-3 bg-white rounded-md text-grey-100/70 pr-8 py-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="mail" className="text-grey-100/70">
                      Nume
                    </label>
                    <input
                      type="mail"
                      placeholder="ex.ion.popescu@gmail.com"
                      id="mail"
                      className="pl-3 bg-white rounded-md pr-8 py-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-grey-100/70">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    className="pl-3 bg-white h-full rounded-md "
                  ></textarea>
                </div>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
