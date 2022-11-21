import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Toggle from './components/Toggle'
import HideSideBar from './components/HideSideBar'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'

function App() {
  const [isSidebarHidden, setSidebarHidden] = useState(false)

  const handleOnHide = () => {
    setSidebarHidden(v => !v)
  }
  return (
    <div className="relative flex h-full bg-grey-50">
      <Sidebar onHide={handleOnHide} isHidden={isSidebarHidden} />
      <div id="main-content" className="relative flex flex-grow flex-col">
        <AppBar isSidebarHidden={isSidebarHidden} />
        <div id="content" className="flex flex-grow items-center justify-center px-6">
          {/* EMPTY STATE */}
          <div className="flex  flex-col space-y-8 text-center">
            <p className="heading-lg text-grey-200">This board is empty. Create a new column to get started.</p>
            <div className="max-w-content">
              <Button text="+ Add New Column" />
            </div>
          </div>
          {/*  BOARDS */}
          <div className="mt-6 grid hidden auto-cols-board grid-flow-col gap-6">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-cyan-400"></span>
                <span className="text-sm font-semibold uppercase tracking-widest text-grey-200">todo (4)</span>
              </div>
              <div className="flex h-[814px]  items-center justify-center rounded-lg bg-grey-100">
                <span className="heading-xl inline-block">+ New Column</span>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-purple-400"></span>
                <span className="text-sm font-semibold uppercase tracking-widest text-grey-200">doing (6)</span>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-teal-400"></span>
                <span className="text-sm font-semibold uppercase tracking-widest text-grey-200">done (7)</span>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <span className="mr-2 h-4 w-4 rounded-full bg-grey-400"></span>
                <span className="text-xs uppercase tracking-widest text-grey-200"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* SHOW SIDEBAR */}
      <button
        onClick={handleOnHide}
        className="smooth-colors absolute left-0 bottom-8 flex h-12 items-center justify-center rounded-r-full bg-primary-subtle/75 pr-6 pl-3  text-white hover:bg-primary-subtle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  )
}

export default App
