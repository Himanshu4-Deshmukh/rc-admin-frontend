import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardDataStats from '../../components/CardDataStats';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';

const ECommerce: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [todayTotalOrderAmount, setTodayTotalOrderAmount] = useState(0);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('https://rc-admin-backend.onrender.com/users/count');
        const usersData = await usersResponse.json();
        setTotalUsers(usersData.count);

        const paymentsResponse = await fetch('https://rc-admin-backend.onrender.com/payments/today-total');
        const paymentsData = await paymentsResponse.json();
        setTodayTotalOrderAmount(paymentsData.totalAmount);

        const totalPaymentsResponse = await fetch('https://rc-admin-backend.onrender.com/payments/total');
        const totalPaymentsData = await totalPaymentsResponse.json();
        setTotalOrderAmount(totalPaymentsData.totalAmount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000); // Refresh data every 24 hours

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Users" total={totalUsers.toString()} rate="0.43%" levelUp onClick={() => navigate('/all-users')}>
          {/* SVG Icon */}
        </CardDataStats>
        <CardDataStats title="Today's Total Amount" total={`₹${todayTotalOrderAmount}`} rate="4.35%" levelUp onClick={() => navigate('/total-payments')}>
          {/* SVG Icon */}
        </CardDataStats>
        <CardDataStats title="Total Payment Amount" total={`₹${totalOrderAmount}`} rate="" levelUp onClick={() => navigate('/amount')}>
          {/* SVG Icon */}
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          {/* SVG Icon */}
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          {/* <TableOne /> */}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
