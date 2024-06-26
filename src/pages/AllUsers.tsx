import React from 'react';

import DefaultLayout from '../layout/DefaultLayout';
import Table from '../components/Tables/Table';
 
const AllUsers: React.FC = () => {
  return (
    <DefaultLayout>

<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <Table />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AllUsers;