import { useState, useEffect } from 'react';
import axios from 'axios';

interface Payment {
  _id: string;
  customerName: string;
  customerPhone: string;
  orderAmount: number;
  orderId: string;
  status: string;
}

const TotalPayment = () => {
  const [totalPayments, setTotalPayments] = useState<number>(0);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    // Fetch total payments made
    axios.get('https://rc-admin-backend.onrender.com/payments/total')
      .then(response => {
        setTotalPayments(response.data.totalAmount);
      })
      .catch(error => {
        console.error('Error fetching total payments:', error);
      });

    // Fetch recent payments data from backend API
    axios.get('https://rc-admin-backend.onrender.com/payments')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error('Error fetching payments data:', error);
      });
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Total Payments: ${totalPayments}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Customer Name
            </h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Customer Phone
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Order Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Order ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {payments.map((payment, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === payments.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{payment.customerName}</p>
            </div>
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{payment.customerPhone}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{payment.orderAmount}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{payment.orderId}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{payment.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalPayment;
