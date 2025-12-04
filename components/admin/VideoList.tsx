"use client";

import { useState } from "react";
import {
  useGetVideosQuery,
  useDeleteVideoMutation,
} from "@/app/redux/features/youtubeVideo/videoApi";

interface Video {
  _id: string;
  title: string;
  youtubeUrl: string;
  videoId: string;
}

export default function VideoList() {
  const { data, isLoading } = useGetVideosQuery([]);
  const videos = data?.data ?? [];  // <-- default to []
  const [deleteVideo] = useDeleteVideoMutation();
  const [deletingId, setDeletingId] = useState<string>("");

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    setDeletingId(id);
    try {
      await deleteVideo(id).unwrap();
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Failed to delete video.");
    } finally {
      setDeletingId("");
    }
  };

  if (isLoading) return <p className="text-center py-4">Loading videos...</p>;

  if (videos.length === 0)
    return <p className="text-center text-gray-500 mt-4">No videos found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Video List</h2>

      <div className="space-y-4">
        {videos?.map((video: Video) => (
          <div
            key={video._id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center gap-3">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                alt={video.title}
                className="w-20 h-14 rounded object-cover"
              />
              <p className="font-semibold">{video.title}</p>
            </div>

            <button
              onClick={() => handleDelete(video._id)}
              disabled={deletingId === video._id}
              className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              {deletingId === video._id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
