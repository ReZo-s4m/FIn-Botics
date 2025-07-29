import React, { Suspense } from 'react'
import DashboardPage from './page';
import {BarLoader} from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-5 py-10">
      <h1 className="text-6xl font-extrabold tracking-tighter pr-2 pb-2 mb-5 text-transparent bg-clip-text bg-gradient-to-br from-[#E63946] to-pink-500">
        Dashboard
      </h1>

      {/* dashboard page */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#df2b0bff" />}>

        <DashboardPage/>
      </Suspense>
      
    </div>
  );
};

export default DashboardLayout;
