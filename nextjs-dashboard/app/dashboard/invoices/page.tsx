import { fetchRevenue } from '@/app/lib/data'; 

export default async function Page() {
    const revenuc = await fetchRevenue();    
    return (
        <>
        This is the invoices page
        </>
    )
}