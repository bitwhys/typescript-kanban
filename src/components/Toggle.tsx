import React from 'react'

export type ToggleProps = {}

const Toggle = ({}: ToggleProps) => {
  return (
    // <!-- TODO: Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
    <button
      type="button"
      className="smooth-colors relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary hover:bg-primary-subtle focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      role="switch"
      aria-checked="false"
    >
      <span className="sr-only">Use setting</span>
      {/* <!-- TODO: Enabled: "translate-x-5", Not Enabled: "translate-x-0" --> */}
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block h-4 w-4 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      ></span>
    </button>
  )
}

export default Toggle
