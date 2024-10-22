import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className="w-screen h-screen bg-[#e4e4e7]">
      <div className='flex justify-center'>
        <h2 className=' pt-40 text-4xl '>
          React Exerices
        </h2>
      </div>

      <div className='flex justify-evenly'>
          <div className="w-60 h-72 bg-white text-black pt-2 ml-56 rounded-md">
            <h3 className='flex m-0 justify-center'>
              Counter
            </h3>
              <hr className="border-t-1 mt-[8px] border-[#e2e8f0] w-40"/>
                <p className='mx-4 h-[190px] break-words overflow-y-scroll no-scrollbar'>
                  A simple counting app with added functionality consisting in indicating the exact number by which we want to increse or reduce the current using <b>Redux Toolkit, React Hook Form and useState. React Router</b> and <b>React Icons</b> were also used. 
                </p>
                  <div className='flex justify-end mr-4 m'>
                    <a href="https://www.geeksforgeeks.org/how-to-create-a-simple-counter-using-reactjs/" target="_blank" rel="noopener noreferrer">
                      <button className='rounded-md cursor-pointer border-none bg-gray-200 border-white hover:bg-blue-200 active:bg-slate-300 hover:text-white h-6 text-[15px] drop-shadow-lg'>
                        FIND MORE
                      </button>
                    </a>
                  </div>
          </div>

          <div className="w-60 h-72 bg-white text-black pt-2 rounded-md">
            <h3 className='flex m-0 justify-center'>
              Form
            </h3>
            <hr className="border-t-1 mt-[8px] border-[#e2e8f0] w-40"/>
              <p className='mx-4 h-[190px] break-words overflow-y-scroll no-scrollbar'>
                An extension form that was created to pratice the possibilities offered by <b>React Hook Form </b>with the use of <b>date-fns.React Router</b> and <b>React Icons</b> were also used.dddddddaaafsafsdfsdfghfgkwghwvbvbsvbsjvbdsjgjhghfhejghjbhsbjksd ension form that was created to pratice the possibilities offered by <b>React Hook Form </b>with the use of <b>date-fns.React Router</b> and <b>React Icons</b> were also used.dddddddaaafsafsdfsdfghfgkwghwvbvbsvbsjvbdsjgjhghfhejghjbhsbjksds
              </p>
                <div className='flex justify-end mr-4 '>
                  <a href="https://www.geeksforgeeks.org/reactjs-forms/" target="_blank" rel="noopener noreferrer">
                    <button className='rounded-md cursor-pointer border-none bg-gray-200 border-white hover:bg-blue-200 active:bg-slate-300 hover:text-white h-6 text-[15px] drop-shadow-lg'>
                      FIND MORE
                    </button>
                  </a>
                </div>
          </div>

          <div className="w-60 h-72 bg-white text-black pt-2 rounded-md">
            <h3 className='flex m-0 justify-center'>
              Fetch API
            </h3>
            <hr className="border-t-1 mt-[8px] border-[#e2e8f0] w-40"/>
              <p className='mx-4 h-[190px] break-words overflow-y-scroll no-scrollbar'>
                A very simple application to pratice fetching basic data from API using <b>Fetch API</b> along with <b>useState</b> and <b>useEffect</b> and display data on the page. <b>React Router</b> and <b>React Icons</b> were also used. 
              </p>
                <div className='flex justify-end mr-4 m'>
                  <a href="https://www.geeksforgeeks.org/different-ways-to-fetch-data-using-api-in-react/" target="_blank" rel="noopener noreferrer">
                    <button className='rounded-md cursor-pointer border-none bg-gray-200 border-white hover:bg-blue-200 active:bg-slate-300 hover:text-white h-6 text-[15px] drop-shadow-lg'>
                      FIND MORE
                    </button>
                  </a>
                </div>
          </div>

          <div className="w-60 h-72 bg-white text-black pt-2 mr-56 rounded-md">
            <h3 className='flex m-0 justify-center '>
              RTK Query
            </h3>
            <hr className="border-t-1 mt-[8px] border-[#e2e8f0] w-40"/>
              <p className='mx-4 h-[190px] break-words overflow-y-scroll no-scrollbar'>
               A very simple application to pratice fetching bacis data from API using<b>RTK Query</b> and display data on the page.<b>React Router</b> and <b>React Icons</b> were also used.
              </p>
                <div className='flex justify-end mr-4 m'>
                <a href="https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl" target="_blank" rel="noopener noreferrer">
                    <button className='rounded-md cursor-pointer border-none bg-gray-200 border-white hover:bg-blue-200 active:bg-slate-300 hover:text-white h-6 text-[15px] drop-shadow-lg'>
                      FIND MORE
                    </button>
                  </a>
                </div>

          </div>
      </div>

    </div>
  )
}

export default App
