"use client";
import React from "react";
import MetricCard from "@/components/admin/MetricCard";
import { FiFileText, FiFolder, FiMonitor, FiUsers } from "react-icons/fi";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";
import { useGetUsersQuery } from "@/app/redux/features/user/userApi";

// Type for user API
interface UserData {
  totalUser: number;
  users?: {
    _id: string;
    name: string;
    email: string;
  }[];
}

const Dashboard = () => {
  const { data: newsData, isLoading: isNewsLoading, isError: isNewsError } =
    useGetNewsQuery("all");

  const { data: user } = useGetUsersQuery();

  const userCount: number = (user as UserData)?.totalUser  || 0;

  const isLoading = isNewsLoading;
  const isError = isNewsError;

  const totalNewsCount = newsData?.totalCount || 0;

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-lg font-medium text-blue-600">
        Loading dashboard metrics...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto p-6 text-lg font-medium text-red-600">
        Error fetching dashboard data. Please try again.
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Admin Overview
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total News"
            value={totalNewsCount.toLocaleString()}
            icon={FiFileText}
            color="blue-500"
          />
          <MetricCard
            title="Total Categories"
            value={7}
            icon={FiFolder}
            color="green-500"
          />
          <MetricCard title="ADS" value={0} icon={FiMonitor} color="teal-500" />
          <MetricCard
            title="Total User"
            value={userCount.toLocaleString()}
            icon={FiUsers}
            color="red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
