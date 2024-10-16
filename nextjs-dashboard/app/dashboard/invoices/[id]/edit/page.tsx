import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById } from '@/app/lib/data';
import { fetchCustomers } from '@/app/lib/data';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';

export default async  function Page({params}: { params: {id: string}}) {
    // getting the id from the URL
    const id = params.id;
    console.log(id);
    
    // fetching using promise 
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])

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