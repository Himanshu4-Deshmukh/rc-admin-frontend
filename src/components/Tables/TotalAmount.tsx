import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Payment {
  _id: string;
  customerName: string;
  customerPhone: string;
  orderAmount: number;
  orderId: string;
  status: string;
  createdAt: string; // Assuming createdAt is of type string, adjust it accordingly
}

const TotalAmount = () => {
  const [totalPayments, setTotalPayments] = useState<number>(0);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    // Fetch total payments made
    axios.get('https://rc-admin-backend.onrender.com/payments/total')
      .then(response => {
        setTotalPayments(response.data.totalAmount);
        setPayments(response.data.payments);
      })
      .catch(error => {
        console.error('Error fetching total payments:', error);
      });
  }, []);

  return (
    <div className="rounded-md border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Total Payments: ₹{totalPayments}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Customer Name
              </th>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Customer Phone
              </th>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Order Amount
              </th>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Order ID
              </th>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Status
              </th>
              <th className="px-4 py-2 text-sm font-medium uppercase bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className={`${index !== payments.length - 1 ? 'border-b border-gray-200 dark:border-gray-600' : ''}`}>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">{payment.customerName}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">{payment.customerPhone}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">₹{payment.orderAmount}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">{payment.orderId}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">{payment.status}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-white">{payment.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalAmount;
