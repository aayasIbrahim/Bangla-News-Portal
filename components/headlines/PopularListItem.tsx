"use client";
import Link from "next/link";

interface PopularItem {
  _id: string;  // Use _id
  title: string;
}

interface PopularListItemProps {
  item: PopularItem;
}

const PopularListItem: React.FC<PopularListItemProps> = ({ item }) => {
  return (
    <Link
      href={`/news/${item._id}`}
      className="flex items-start gap-3 p-4 border-b hover:bg-gray-50 cursor-pointer transition"
    >
      <p className="flex-1 font-solaiman font-normal text-[18px] leading-[1.2] tracking-normal line-clamp-2 hover:text-blue-600">
        {item.title}
      </p>
    </Link>
  );
};

export default PopularListItem;
