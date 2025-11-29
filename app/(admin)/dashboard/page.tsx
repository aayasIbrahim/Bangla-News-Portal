// Dashboard.jsx
"use client"
import React from 'react';
import MetricCard from '@/components/admin/MetricCard';
// Example icons from 'react-icons/fi' (Feather Icons)
import { FiBookOpen, FiList } from 'react-icons/fi'; 
import { useGetNewsQuery } from '@/app/redux/features/news/newsApi'; 


const Dashboard = () => {
  // 2. RTK Query Hooks ব্যবহার করে ডেটা ফেচ করা
  
  // Total News Count ফেচ করা (কোনো ফিল্টার ছাড়া, 'all' ক্যাটাগরি পাস করা হয়েছে)
  const { 
    data: newsData, 
    isLoading: isNewsLoading, 
    isError: isNewsError 
  } = useGetNewsQuery('all'); 
  

  const isLoading = isNewsLoading 
  const isError = isNewsError 
  
  // Default values
  const totalNewsCount = newsData?.totalCount || 0;
  // ধরে নেওয়া হলো categoryData সরাসরি সংখ্যা বা {count: number} অবজেক্ট দেয়
  // const totalCategoryCount = categoryData?.count || categoryData || 0; 
  
  // Loading State
  if (isLoading) {
    return <div className="p-6 text-lg font-medium text-blue-600">Loading dashboard metrics...</div>;
  }
  

  if (isError) {
    return <div className="p-6 text-lg font-medium text-red-600">Error fetching dashboard data. Please try again.</div>;
  }

  // 4. Component Render
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Overview</h1>
      
      {/* 5. The Metric Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Total News Card */}
        <MetricCard 
          title="Total News"
          // totalNewsCount ব্যবহার করা হচ্ছে
          value={totalNewsCount.toLocaleString()} 
          icon={FiBookOpen} 
          color="blue-500" 
        />

        {/* Total Categories Card */}
        <MetricCard 
          title="Total Categories"
          // totalCategoryCount ব্যবহার করা হচ্ছে
          value={7}
          icon={FiList} 
          color="green-500" 
        />
        
        {/* You can add more cards here */}
      </div>

      <div className="mt-8">
        {/* ... tables, charts, etc. */}
      </div>
    </div>
  );
};

export default Dashboard;