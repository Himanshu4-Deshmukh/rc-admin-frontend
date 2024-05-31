import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';

interface User {
  _id: string;
  name: string;
  email: string;
  companyname: string;
  number: string;
  credits: number;
  Rcadvtask: number;
  Rcchallantask: number;
  Rcbasictask: number;
  date: string;
}

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [credits, setCredits] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    axios.get(`https://rc-admin-backend.onrender.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setCredits(response.data.credits); // Initialize credits state with user's current credits
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleCreditsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredits(Number(event.target.value));
  };

  const handleUpdateCredits = () => {
    axios.put(`https://rc-admin-backend.onrender.com/users/${id}`, { credits })
      .then(response => {
        setUser(response.data);
        setStatusMessage('Credits updated successfully');
      })
      .catch(error => {
        console.error('Error updating credits:', error);
        setStatusMessage('Credits update failed');
      });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            User Details
          </h4>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Name</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">ID</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user._id}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Email</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Company Name</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.companyname}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Number</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.number}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Credits</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.credits}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Rcadvtask</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.Rcadvtask}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Rcchallantask</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.Rcchallantask}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Rcbasictask</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{user.Rcbasictask}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Date</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{new Date(user.date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Update Credits Section */}
        <div className="py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Update Credits
          </h4>
          <div className="flex items-center">
            <input
              type="number"
              value={credits}
              onChange={handleCreditsChange}
              className="mr-4 p-2 border rounded"
            />
            <button
              onClick={handleUpdateCredits}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
          {statusMessage && (
            <div className={`mt-4 ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UserDetail;
