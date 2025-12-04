"use client";

import { useEffect, useState } from "react";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState("");

  // Fetch videos on load
  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/video");
      const data = await res.json();
      if (res.ok) {
        setVideos(data.data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Delete handler
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    setDeleting(id);

    try {
      const res = await fetch(`/api/video?id=${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        // Remove deleted video from UI
        setVideos(videos.filter((video) => video._id !== id));
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Delete Error:", error);
    } finally {
      setDeleting("");
    }
  };

  if (loading)
    return <p className="text-center py-4">Loading videos...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Video List</h2>

      <div className="space-y-4">
        {videos.map((video: any) => (
          <div
            key={video._id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            {/* Thumbnail + Title */}
            <div className="flex items-center gap-3">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                alt={video.title}
                className="w-20 h-14 rounded object-cover"
              />
              <p className="font-semibold">{video.title}</p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(video._id)}
              disabled={deleting === video._id}
              className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              {deleting === video._id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No videos found.
        </p>
      )}
    </div>
  );
}
