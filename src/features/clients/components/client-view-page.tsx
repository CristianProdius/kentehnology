import { Client, fakeClients } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import ClientForm from './client-form';

type TClientViewPageProps = {
  clientId: string;
};

export default async function ClientViewPage({
  clientId
}: TClientViewPageProps) {
  let client = null;
  let pageTitle = 'Create New Client';

  if (clientId !== 'new') {
    const data = await fakeClients.getClientById(Number(clientId));
    client = data.client as Client;
    if (!client) {
      notFound();
    }
    pageTitle = `Edit Client`;
  }

  return <ClientForm initialData={client} pageTitle={pageTitle} />;
}
