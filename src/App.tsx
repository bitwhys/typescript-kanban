import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/Button'
import Toggle from './components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-full bg-grey-50">
      <div id="side-nav" className="flex w-72 flex-col border-r-2 border-grey-100 bg-white pb-8">
        {/* BRAND */}
        <div className="px-6 pt-8">
          <svg width="153" height="26" viewBox="0 0 153 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.56 24.9999V19.6559L46.48 17.5439L50.928 24.9999H56.368L50.064 14.5679L56.4 7.52788H50.48L44.56 13.8319V0.775879H39.76V24.9999H44.56ZM63.92 25.3839C66.096 25.3839 67.8453 24.7119 69.168 23.3679V24.9999H73.648V13.4799C73.648 12.2212 73.3333 11.1172 72.704 10.1679C72.0747 9.21855 71.1947 8.47721 70.064 7.94388C68.9333 7.41055 67.632 7.14388 66.16 7.14388C64.304 7.14388 62.6773 7.57055 61.28 8.42388C59.8827 9.27721 58.928 10.4292 58.416 11.8799L62.256 13.7039C62.5547 12.9359 63.0293 12.3172 63.68 11.8479C64.3307 11.3785 65.0827 11.1439 65.936 11.1439C66.832 11.1439 67.5413 11.3679 68.064 11.8159C68.5867 12.2639 68.848 12.8185 68.848 13.4799V13.9599L64.016 14.7279C61.9253 15.0692 60.368 15.7199 59.344 16.6799C58.32 17.6399 57.808 18.8559 57.808 20.3279C57.808 21.9065 58.3573 23.1439 59.456 24.0399C60.5547 24.9359 62.0427 25.3839 63.92 25.3839ZM63.376 21.4159C63.7813 21.7145 64.2827 21.8639 64.88 21.8639C66.0747 21.8639 67.0347 21.4905 67.76 20.7439C68.4853 19.9972 68.848 19.0905 68.848 18.0239V17.4799L64.88 18.1839C64.1973 18.3119 63.6747 18.5305 63.312 18.8399C62.9493 19.1492 62.768 19.5919 62.768 20.1679C62.768 20.7012 62.9707 21.1172 63.376 21.4159ZM81.968 24.9999V14.7919C81.968 13.7892 82.2667 12.9839 82.864 12.3759C83.4613 11.7679 84.2293 11.4639 85.168 11.4639C86.1067 11.4639 86.8747 11.7679 87.472 12.3759C88.0693 12.9839 88.368 13.7892 88.368 14.7919V24.9999H93.168V13.7679C93.168 12.4452 92.8907 11.2879 92.336 10.2959C91.7813 9.30388 91.008 8.53055 90.016 7.97588C89.024 7.42121 87.8667 7.14388 86.544 7.14388C85.4347 7.14388 84.4533 7.35188 83.6 7.76788C82.7467 8.18388 82.096 8.81855 81.648 9.67188V7.52788H77.168V24.9999H81.968ZM110.704 24.1679C109.36 24.9785 107.835 25.3839 106.128 25.3839C105.061 25.3839 104.064 25.2079 103.136 24.8559C102.208 24.5039 101.435 23.9972 100.816 23.3359V24.9999H96.336V0.775879H101.136V8.99988C102.373 7.76255 104.048 7.14388 106.16 7.14388C107.824 7.14388 109.328 7.54921 110.672 8.35988C112.016 9.17055 113.083 10.2639 113.872 11.6399C114.661 13.0159 115.056 14.5572 115.056 16.2639C115.056 17.9492 114.667 19.4852 113.888 20.8719C113.109 22.2585 112.048 23.3572 110.704 24.1679ZM105.552 21.0639C104.251 21.0639 103.189 20.6212 102.368 19.7359C101.547 18.8505 101.136 17.6932 101.136 16.2639C101.136 14.8559 101.547 13.7039 102.368 12.8079C103.189 11.9119 104.251 11.4639 105.552 11.4639C106.875 11.4639 107.963 11.9172 108.816 12.8239C109.669 13.7305 110.096 14.8772 110.096 16.2639C110.096 17.6719 109.669 18.8239 108.816 19.7199C107.963 20.6159 106.875 21.0639 105.552 21.0639ZM128.528 23.3679C127.205 24.7119 125.456 25.3839 123.28 25.3839C121.403 25.3839 119.915 24.9359 118.816 24.0399C117.717 23.1439 117.168 21.9065 117.168 20.3279C117.168 18.8559 117.68 17.6399 118.704 16.6799C119.728 15.7199 121.285 15.0692 123.376 14.7279L128.208 13.9599V13.4799C128.208 12.8185 127.947 12.2639 127.424 11.8159C126.901 11.3679 126.192 11.1439 125.296 11.1439C124.443 11.1439 123.691 11.3785 123.04 11.8479C122.389 12.3172 121.915 12.9359 121.616 13.7039L117.776 11.8799C118.288 10.4292 119.243 9.27721 120.64 8.42388C122.037 7.57055 123.664 7.14388 125.52 7.14388C126.992 7.14388 128.293 7.41055 129.424 7.94388C130.555 8.47721 131.435 9.21855 132.064 10.1679C132.693 11.1172 133.008 12.2212 133.008 13.4799V24.9999H128.528V23.3679ZM124.24 21.8639C123.643 21.8639 123.141 21.7145 122.736 21.4159C122.331 21.1172 122.128 20.7012 122.128 20.1679C122.128 19.5919 122.309 19.1492 122.672 18.8399C123.035 18.5305 123.557 18.3119 124.24 18.1839L128.208 17.4799V18.0239C128.208 19.0905 127.845 19.9972 127.12 20.7439C126.395 21.4905 125.435 21.8639 124.24 21.8639ZM141.328 14.7919V24.9999H136.528V7.52788H141.008V9.67188C141.456 8.81855 142.107 8.18388 142.96 7.76788C143.813 7.35188 144.795 7.14388 145.904 7.14388C147.227 7.14388 148.384 7.42121 149.376 7.97588C150.368 8.53055 151.141 9.30388 151.696 10.2959C152.251 11.2879 152.528 12.4452 152.528 13.7679V24.9999H147.728V14.7919C147.728 13.7892 147.429 12.9839 146.832 12.3759C146.235 11.7679 145.467 11.4639 144.528 11.4639C143.589 11.4639 142.821 11.7679 142.224 12.3759C141.627 12.9839 141.328 13.7892 141.328 14.7919Z"
              fill="#000112"
            />
            <rect y="1" width="6" height="25" rx="2" fill="#635FC7" />
            <rect opacity="0.75" x="9" y="1" width="6" height="25" rx="2" fill="#635FC7" />
            <rect opacity="0.5" x="18" y="1" width="6" height="25" rx="2" fill="#635FC7" />
          </svg>
        </div>
        {/* NAVIGATION */}
        <nav className="mt-14 flex flex-grow flex-col">
          <div className="flex items-center space-x-1 px-6 text-xs font-semibold uppercase text-grey-200">
            <h2 className="tracking-widest">all boards</h2>
            <span>(3)</span>
          </div>
          {/* LINKS */}
          <ul className="col mt-5 flex flex-col pr-6 text-grey-200">
            <li className="block flex h-12 cursor-pointer items-center rounded-r-full bg-primary text-white">
              <div className="inline-flex items-center px-6">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </span>
                <span className="heading-md ">Platform Launch</span>
              </div>
            </li>
            <li className="smooth-colors block flex h-12 cursor-pointer items-center rounded-r-full hover:bg-primary/10 hover:text-primary">
              <div className="inline-flex items-center px-6">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </span>
                <span className="heading-md ">Marketing</span>
              </div>
            </li>
            <li className="smooth-colors block flex h-12 cursor-pointer items-center rounded-r-full hover:bg-primary/10 hover:text-primary">
              <div className="inline-flex items-center px-6">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </span>
                <span className="heading-md ">Roadmap</span>
              </div>
            </li>
            <li className="smooth-colors block flex h-12 cursor-pointer items-center rounded-r-full text-primary hover:bg-primary/10 hover:text-primary">
              <div className="inline-flex items-center px-6">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </span>
                <span className="heading-md ">+ Create New Board</span>
              </div>
            </li>
          </ul>
        </nav>
        {/* THEME TOGGLE */}
        <div className="mx-6 flex items-center justify-center space-x-6 rounded-lg bg-grey-50 py-4 text-grey-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>

          <Toggle />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
        {/* SIDEBAR TOGGLE */}
        <div className="mt-2 pr-6">
          <div className="smooth-colors block flex h-12 cursor-pointer items-center rounded-r-full text-primary hover:bg-primary/10">
            <div className="inline-flex items-center px-6">
              <span className="mr-2">
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
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  ></path>
                </svg>
              </span>
              <span className="heading-md text-sm ">Hide Sidebar</span>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content" className="relative flex flex-grow flex-col">
        <header id="header" className="flex h-24 items-center border-b-2 border-grey-100 bg-white ">
          <div className="flex hidden h-full items-center justify-center border-r-2 pr-8 pl-6">
            <svg width="153" height="26" viewBox="0 0 153 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.56 24.9999V19.6559L46.48 17.5439L50.928 24.9999H56.368L50.064 14.5679L56.4 7.52788H50.48L44.56 13.8319V0.775879H39.76V24.9999H44.56ZM63.92 25.3839C66.096 25.3839 67.8453 24.7119 69.168 23.3679V24.9999H73.648V13.4799C73.648 12.2212 73.3333 11.1172 72.704 10.1679C72.0747 9.21855 71.1947 8.47721 70.064 7.94388C68.9333 7.41055 67.632 7.14388 66.16 7.14388C64.304 7.14388 62.6773 7.57055 61.28 8.42388C59.8827 9.27721 58.928 10.4292 58.416 11.8799L62.256 13.7039C62.5547 12.9359 63.0293 12.3172 63.68 11.8479C64.3307 11.3785 65.0827 11.1439 65.936 11.1439C66.832 11.1439 67.5413 11.3679 68.064 11.8159C68.5867 12.2639 68.848 12.8185 68.848 13.4799V13.9599L64.016 14.7279C61.9253 15.0692 60.368 15.7199 59.344 16.6799C58.32 17.6399 57.808 18.8559 57.808 20.3279C57.808 21.9065 58.3573 23.1439 59.456 24.0399C60.5547 24.9359 62.0427 25.3839 63.92 25.3839ZM63.376 21.4159C63.7813 21.7145 64.2827 21.8639 64.88 21.8639C66.0747 21.8639 67.0347 21.4905 67.76 20.7439C68.4853 19.9972 68.848 19.0905 68.848 18.0239V17.4799L64.88 18.1839C64.1973 18.3119 63.6747 18.5305 63.312 18.8399C62.9493 19.1492 62.768 19.5919 62.768 20.1679C62.768 20.7012 62.9707 21.1172 63.376 21.4159ZM81.968 24.9999V14.7919C81.968 13.7892 82.2667 12.9839 82.864 12.3759C83.4613 11.7679 84.2293 11.4639 85.168 11.4639C86.1067 11.4639 86.8747 11.7679 87.472 12.3759C88.0693 12.9839 88.368 13.7892 88.368 14.7919V24.9999H93.168V13.7679C93.168 12.4452 92.8907 11.2879 92.336 10.2959C91.7813 9.30388 91.008 8.53055 90.016 7.97588C89.024 7.42121 87.8667 7.14388 86.544 7.14388C85.4347 7.14388 84.4533 7.35188 83.6 7.76788C82.7467 8.18388 82.096 8.81855 81.648 9.67188V7.52788H77.168V24.9999H81.968ZM110.704 24.1679C109.36 24.9785 107.835 25.3839 106.128 25.3839C105.061 25.3839 104.064 25.2079 103.136 24.8559C102.208 24.5039 101.435 23.9972 100.816 23.3359V24.9999H96.336V0.775879H101.136V8.99988C102.373 7.76255 104.048 7.14388 106.16 7.14388C107.824 7.14388 109.328 7.54921 110.672 8.35988C112.016 9.17055 113.083 10.2639 113.872 11.6399C114.661 13.0159 115.056 14.5572 115.056 16.2639C115.056 17.9492 114.667 19.4852 113.888 20.8719C113.109 22.2585 112.048 23.3572 110.704 24.1679ZM105.552 21.0639C104.251 21.0639 103.189 20.6212 102.368 19.7359C101.547 18.8505 101.136 17.6932 101.136 16.2639C101.136 14.8559 101.547 13.7039 102.368 12.8079C103.189 11.9119 104.251 11.4639 105.552 11.4639C106.875 11.4639 107.963 11.9172 108.816 12.8239C109.669 13.7305 110.096 14.8772 110.096 16.2639C110.096 17.6719 109.669 18.8239 108.816 19.7199C107.963 20.6159 106.875 21.0639 105.552 21.0639ZM128.528 23.3679C127.205 24.7119 125.456 25.3839 123.28 25.3839C121.403 25.3839 119.915 24.9359 118.816 24.0399C117.717 23.1439 117.168 21.9065 117.168 20.3279C117.168 18.8559 117.68 17.6399 118.704 16.6799C119.728 15.7199 121.285 15.0692 123.376 14.7279L128.208 13.9599V13.4799C128.208 12.8185 127.947 12.2639 127.424 11.8159C126.901 11.3679 126.192 11.1439 125.296 11.1439C124.443 11.1439 123.691 11.3785 123.04 11.8479C122.389 12.3172 121.915 12.9359 121.616 13.7039L117.776 11.8799C118.288 10.4292 119.243 9.27721 120.64 8.42388C122.037 7.57055 123.664 7.14388 125.52 7.14388C126.992 7.14388 128.293 7.41055 129.424 7.94388C130.555 8.47721 131.435 9.21855 132.064 10.1679C132.693 11.1172 133.008 12.2212 133.008 13.4799V24.9999H128.528V23.3679ZM124.24 21.8639C123.643 21.8639 123.141 21.7145 122.736 21.4159C122.331 21.1172 122.128 20.7012 122.128 20.1679C122.128 19.5919 122.309 19.1492 122.672 18.8399C123.035 18.5305 123.557 18.3119 124.24 18.1839L128.208 17.4799V18.0239C128.208 19.0905 127.845 19.9972 127.12 20.7439C126.395 21.4905 125.435 21.8639 124.24 21.8639ZM141.328 14.7919V24.9999H136.528V7.52788H141.008V9.67188C141.456 8.81855 142.107 8.18388 142.96 7.76788C143.813 7.35188 144.795 7.14388 145.904 7.14388C147.227 7.14388 148.384 7.42121 149.376 7.97588C150.368 8.53055 151.141 9.30388 151.696 10.2959C152.251 11.2879 152.528 12.4452 152.528 13.7679V24.9999H147.728V14.7919C147.728 13.7892 147.429 12.9839 146.832 12.3759C146.235 11.7679 145.467 11.4639 144.528 11.4639C143.589 11.4639 142.821 11.7679 142.224 12.3759C141.627 12.9839 141.328 13.7892 141.328 14.7919Z"
                fill="#000112"
              />
              <rect y="1" width="6" height="25" rx="2" fill="#635FC7" />
              <rect opacity="0.75" x="9" y="1" width="6" height="25" rx="2" fill="#635FC7" />
              <rect opacity="0.5" x="18" y="1" width="6" height="25" rx="2" fill="#635FC7" />
            </svg>
          </div>
          {/* TODO: padding-left is conditional on the presence of its sibling */}
          <div className="flex w-full items-center justify-between px-6">
            <h1 className="heading-xl text-black">Platform launch</h1>
            <div className="flex items-center space-x-6">
              <Button text="Add New Task" disabled />
              <span className="flex cursor-pointer flex-col space-y-1">
                <span className="h-1.5 w-1.5 rounded-full bg-grey-200"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-grey-200"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-grey-200"></span>
              </span>
            </div>
          </div>
        </header>
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
    </div>
  )
}

export default App
