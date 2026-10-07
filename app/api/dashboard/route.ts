import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";

export async function GET(request: Request) {
    // done on backend / server side
      const revenue = await fetchRevenue();
      const latestInvoices = await fetchLatestInvoices();
      const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();
      return new Response(JSON.stringify({
        revenue,
        latestInvoices,
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices
      }));
  }