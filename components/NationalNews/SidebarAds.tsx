import React from 'react';

export const SidebarAds = () => (
  <>
    <div className="p-4 bg-yellow-50 rounded-xl shadow-md text-center border border-yellow-200">
      <p className="text-sm font-semibold text-yellow-800">Advertisement</p>
      <div className="h-20 bg-yellow-200 mt-2 flex items-center justify-center rounded-lg">
        <span className="text-yellow-700 font-bold">News TV Ad</span>
      </div>
    </div>

    <div className="p-4 bg-green-50 rounded-xl shadow-md text-center border border-green-200">
      <p className="text-sm font-semibold text-green-800">Advertisement</p>
      <div className="h-32 bg-green-200 mt-2 flex items-center justify-center rounded-lg">
        <span className="text-green-700 font-bold">PRAN Energy Drink Ad</span>
      </div>
    </div>
  </>
);
