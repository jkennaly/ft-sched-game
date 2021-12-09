/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from '@heroicons/react/solid'
import { ModalPopper } from './Modal'
import { createFestival } from '../services/active'
import React, { useState } from 'react';
import FestivalName from './FestivalName'


export default function Example() {
	const [hidden, hideModal] = useState(true)
	function closeModal(val) {
		console.log('creating festival', val)
		hideModal(true)
		return createFestival(val)
	}
	const [newName, setNewName] = useState('')
  return (
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No festivals</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new festival.</p>
      <div className="mt-6">

          <ModalPopper
          	title="Create New Festival"
          	withSubmit={false}
          	submission={[closeModal, {name: newName}]}
          	forceClose={hidden}
          	allowOpen={() => hideModal(false)}
          	content={<FestivalName nameChange={setNewName} save={closeModal} />}
          	buttonClasses="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          	buttonContent={<span><PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Festival</span>}
          />
      </div>
    </div>
  )
}
