"use client";

import Image from "next/image";
import { INews } from "@/types/news";

interface Props {
  item: INews;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const NewsManageCard = ({ item, onEdit, onDelete }: Props) => {
  return (
    <div className="p-4 bg-white shadow rounded border">
      <h3 className="text-xl font-semibold">শিরোনাম ঃ{item.title}</h3>
      <p className="text-sm text-red-500">ক্যাটেগরি: {item.category}</p>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold text-black">সংক্ষিপ্ত বিবরণ :</span>
        {item.summary}
      </p>

      {item.content && (
        <p className="mt-2 text-gray-700">
          <span className="font-semibold text-black">
            বিস্তারিত সংবাদ : 
          </span>
          {item.content}
        </p>
      )}

      <Image
        src={item.imageSrc}
        width={300}
        height={200}
        alt={item.title}
        className="mt-3 rounded"
      />

      {/* Edit / Delete Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit(item?._id)}
          className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(item?._id)}
          className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsManageCard;
