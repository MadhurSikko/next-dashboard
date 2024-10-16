import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById } from '@/app/lib/data';
import { fetchCustomers } from '@/app/lib/data';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import { notFound } from 'next/navigation';

export default async  function Page({params}: { params: {id: string}}) {
    // getting the id from the URL
    const id = params.id;
    
    // fetching using promise 
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])

    if (!invoice) {
      notFound();
    }

    return (
        <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
    )
}