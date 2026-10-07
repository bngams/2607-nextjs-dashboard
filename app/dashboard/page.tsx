import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
 
export default async function Page() {
  // done on backend / server side
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  // another idea to use client side fetching
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/dashboard');
  //       const data = await response.json();
  //       setRevenue(data.revenue);
  //       setLatestInvoices(data.latestInvoices);
  //       setNumberOfInvoices(data.numberOfInvoices);
  //       setNumberOfCustomers(data.numberOfCustomers);
  //       setTotalPaidInvoices(data.totalPaidInvoices);
  //       setTotalPendingInvoices(data.totalPendingInvoices);
  //     } catch (error) {
  //       console.error('Error fetching dashboard data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}