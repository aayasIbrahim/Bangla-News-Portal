"use client";

import { useGetVideosQuery } from "@/app/redux/features/youtubeVideo/videoApi";

interface Video {
  _id: string;
  title?: string;
  youtubeUrl: string;
  videoId: string;
}

export default function VideoPlayer() {
  const { data, isLoading, isError } = useGetVideosQuery([]);

  // Get the latest video directly from the query result
  const latestVideo: Video | undefined = data?.data?.[0];

  if (isLoading) return <p>Loading video...</p>;
  if (isError) return <p>Failed to load video.</p>;
  if (!latestVideo) return null;

  const embedUrl = `https://www.youtube.com/embed/${latestVideo.videoId}`;

  return (
    <div className="w-full aspect-video mb-2">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={latestVideo.title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {!latestVideo.videoId && (
        <p className="mt-2 text-center">
          Video cannot be embedded.{" "}
          <a
            href={latestVideo.youtubeUrl}
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
