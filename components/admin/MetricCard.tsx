// MetricCard.tsx
import React, { FC } from 'react';

// 1. Props-এর জন্য ইন্টারফেস বা টাইপ ডিফাইন করা হয়েছে।
interface MetricCardProps {
  title: string;
  value: string | number; // 'value' string বা number হতে পারে
  // 'icon' হল একটি React কম্পোনেন্ট যা props হিসাবে একটি className নেয়
  icon: FC<React.SVGProps<SVGSVGElement>>; 
  color: string; // 'color' একটি Tailwind CSS কালার ক্লাস স্ট্রিং (e.g., 'blue-500')
}

// 2. কম্পোনেন্টকে FC (Function Component) টাইপ দিয়ে এবং props-এ ইন্টারফেস ব্যবহার করে টাইপ করা হয়েছে
const MetricCard: FC<MetricCardProps> = ({ title, value, icon: IconComponent, color }) => {
  // Utility for dynamic text color based on prop (e.g., 'blue-500')
  const textColor = `text-${color}`;
  // Utility for dynamic background/ring color for the icon container
  const iconBg = `bg-${color}/10`; // Light background
  const iconRing = `ring-${color}`; // Ring for focus or subtle border

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center justify-between">
        {/* Metric Icon */}
        <div 
          className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg} ${textColor} ring-4 ${iconRing}/20`}
        >
          {/* The IconComponent will be passed as a prop (e.g., a React Feather icon) */}
          {/* IconComponent-কে তার প্রয়োজনীয় props (className) পাস করা হয়েছে */}
          <IconComponent className="w-6 h-6" />
        </div>
        
        {/* Metric Content */}
        <div className="text-right">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className={`mt-1 text-3xl font-bold ${textColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;