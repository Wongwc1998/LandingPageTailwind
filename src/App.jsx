export default function App() {
  return (
    <>
      <header className="bg-darkblue grid grid-cols-12">
        <div className="col-start-3 col-span-8">

        <div className="flex flex-row items-center justify-between pt-4">
          <h3 className="text-gray-50 font-bold">Header Logo</h3>
          <div className="justify-end items-end flex gap-5 text-gray-200">
            <div>header link one</div>
            <div>header link one</div>
            <div>header link one</div>
          </div>
        </div>

        <section className="grid grid-cols-2 gap-2 py-20">
          <div className="flex flex-col items-start">

            <h1>
              This website is awesome
            </h1>
            <p className="text-gray-200">This website has some subtext that goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatem.</p>
            <button className="px-5 bg-lightblue py-1 text-gray-200 rounded">Sign up</button>
          </div>
          <div className="bg-slate-500 flex items-center justify-center text-gray-200">
            Picture here

          </div>
        </section>
        </div>
      </header>
      <main className="grid grid-cols-12">
        <section className="text-center col-start-3 col-span-8">

          <h2 className="py-5 font-black">Some random info</h2>
          <div className="flex flex-row text-slate-500 gap-10 px-20">
            <div className="flex flex-col">
              <div className="p-10 border-4 border-lightblue rounded-lg aspect-square"></div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, fugiat?</div>
            </div>
            <div>
              <div className="p-10 border-4 border-lightblue rounded-lg aspect-square"></div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, fugiat?</div>
            </div>
            <div>
              <div className="p-10 border-4 border-lightblue rounded-lg aspect-square"></div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, fugiat?</div>
            </div>
            <div>
              <div className="p-10 border-4 border-lightblue rounded-lg aspect-square"></div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, fugiat?</div>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 my-10 py-20 px-40 col-start-1 col-span-12">
          <h2 className="font-light italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia?</h2>
          <div className="text-right">-Lorem, ipsum dolor.</div>
        </section>
        <section className="px-20  mx-20 bg-lightblue text-white col-start-2 col-span-10 items-center rounded-lg">
        <div className="grid grid-cols-12 gap-2 py-10">

          <div  className="col-start-1 col-span-9">

          <h3>Call to action</h3>
          <div>sign up for product</div>
          </div>
          <div  className="col-span-3 justify-center">
            <button className="border-2 border-white rounded-lg px-5 py-2">Sign up</button>
          </div>
        </div>
        </section>
      </main>
      <footer className="py-5 mt-10 bg-darkblue text-slate-50 text-center">Copyright</footer>
    </>
  )
}