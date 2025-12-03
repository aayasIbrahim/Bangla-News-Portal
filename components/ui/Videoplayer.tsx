"use client";
import { useEffect, useState } from "react";

interface VideoData {
  youtubeUrl: string;
  title?: string;
}

export default function VideoPlayer() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideo() {
      try {
        const res = await fetch("/api/video")
        const data = await res.json();
        const latestVideo: VideoData = data?.data?.[0]; // take latest video
        const id = getYouTubeId(latestVideo?.youtubeUrl);

        if (id) {
          setVideoId(id);
          setYoutubeUrl(latestVideo.youtubeUrl || null);
        }
      } catch (err) {
        console.error("Failed to load video:", err);
      } finally {
        setLoading(false);
      }
    }

    loadVideo();
  }, []);

  function getYouTubeId(url?: string | null): string | null {
    if (!url) return null;
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  if (loading) return <p>Loading video...</p>;
  if (!videoId || !youtubeUrl) return <p>No video available</p>;

  // Try iframe first, fallback to YouTube link
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full aspect-video mb-2">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={() => setVideoId(null)} // fallback if embed blocked
      />
      {!videoId && (
        <p className="mt-2 text-center">
          Video cannot be embedded.{" "}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
}
