import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search-as-you-type';
import SearchFormSubmit from '@/app/ui/search-form-submit';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      {/* Démo : deux implémentations de recherche + action, sur une ligne */}
      <div className="mt-4 grid items-stretch gap-4 md:mt-8 md:grid-cols-[1fr_1fr_auto]">
        <div className="rounded-md bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Search-as-you-type{' '}
            <span className="font-normal text-gray-500">
              (Client, debounce + router.replace)
            </span>
          </p>
          <Search placeholder="Tape pour filtrer en direct..." />
        </div>
        <div className="rounded-md bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Form submit{' '}
            <span className="font-normal text-gray-500">
              (next/form, GET, sans JS d'app)
            </span>
          </p>
          <SearchFormSubmit
            placeholder="Tape puis Entrée..."
            defaultValue={query}
          />
        </div>
        <div className="flex flex-col justify-end p-4">
          {/* label fantôme pour aligner le bouton avec les champs */}
          <p className="mb-2 text-sm font-medium" aria-hidden="true">
            &nbsp;
          </p>
          <CreateInvoice />
        </div>
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
