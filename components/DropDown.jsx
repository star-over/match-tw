import { LanguageIcon } from '@heroicons/react/20/solid'


export const DropDown = () => {
  return (
      <div
        className="inline-flex items-center rounded-lg border border-gray-300  bg-gray-200
        focus-within:border-indigo-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-indigo-500">
        <label className=" mx-2 " htmlFor="message-type">
          <LanguageIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </label>
        <select
          id="message-type"
          name="message-type"
          className="block w-full rounded-l-none rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
          focus:outline-none focus:ring-0 outline-none border-transparent focus:border-transparent
          "
        >
          <option>En</option>
          <option>Ru</option>
          <option>Jp</option>
        </select>

      </div>

  )
};
