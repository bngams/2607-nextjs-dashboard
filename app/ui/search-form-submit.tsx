import Form from 'next/form';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Version "search on submit" : un <Form> next/form qui soumet sur la MEME page
// en GET (?query=...). Pas de 'use client', pas de JS d'app : progressive
// enhancement (marche même JS désactivé). La page lit searchParams.query
// exactement comme pour la version client-side.
export default function SearchFormSubmit({
  placeholder,
  defaultValue,
}: {
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <Form action="" className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search-submit" className="sr-only">
        Search
      </label>
      <input
        id="search-submit"
        name="query"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button type="submit" className="sr-only">
        Search
      </button>
    </Form>
  );
}
