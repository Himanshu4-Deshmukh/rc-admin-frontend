import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Payment {
  _id: string;
  customerDetails: {
    customerId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
  orderAmount: number;
  companyName: string;
  address: string;
  selectedState: string;
  hasGst: boolean;
  gstNumber: string;
  orderId: string;
  status: string;
  createdAt: string;
  __v: number;
}

const TablePayment = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    // Fetch recent payments data from backend API
    axios.get('https://rc-admin-backend.onrender.com/payments/recent')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error('Error fetching payments data:', error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-meta-4">
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Customer Name
            </th>
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Customer Phone
            </th>
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Order Amount
            </th>
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Order ID
            </th>
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Status
            </th>
            <th className="px-4 py-2 text-sm font-medium uppercase text-black dark:text-white">
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, key) => (
            <tr
              key={key}
              className={`${key === payments.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'}`}
            >
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.customerDetails.customerName}</td>
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.customerDetails.customerPhone}</td>
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.orderAmount}</td>
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.orderId}</td>
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.status}</td>
              <td className="px-4 py-2 text-sm text-black dark:text-white">{payment.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePayment;
