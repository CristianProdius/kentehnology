import { Client } from '@/constants/data';
import { fakeClients } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { ClientTable } from './client-tables';
import { columns } from './client-tables/columns';

type ClientListingPage = {};

export default async function ClientListingPage({}: ClientListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('name');
  const pageLimit = searchParamsCache.get('perPage');
  const categories = searchParamsCache.get('category');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories: categories })
  };

  const data = await fakeClients.getClients(filters);
  const totalClients = data.total_clients;
  const clients: Client[] = data.clients;

  return (
    <ClientTable data={clients} totalItems={totalClients} columns={columns} />
  );
}
