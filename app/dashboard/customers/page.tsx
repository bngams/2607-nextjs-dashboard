import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {

  const customers = await fetchCustomers();
  
  return <p>Customers Page</p>;
}