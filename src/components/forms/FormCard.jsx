import React from 'react'

const FormCard = ({title, children, isAdd}) => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h1 className='text-2xl font-medium'>{title}</h1>

       {isAdd && <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add {title}
          </button>}
      </div>
      <div className="px-4 py-5 sm:p-6 ">{children}</div>
    </div>
  )
}

export default FormCard