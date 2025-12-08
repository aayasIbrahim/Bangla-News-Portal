"use client";
import React, { useEffect, useState } from "react";

export default function LogoList() {
  const [logos, setLogos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
console.log(logos,"logos")
  useEffect(() => {
    // define async function inside effect
    const fetchLogos = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/settings/logo");
        const data = await res.json();
        setLogos(data.logos || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos(); // call it here
  }, []); // runs once on mount

  const deleteLogo = async (id: string) => {
    if (!confirm("Delete this logo?")) return;

    await fetch(`/api/settings/logo/${id}`, { method: "DELETE" });
    // Refresh the list after deletion
    setLoading(true);
    try {
      const res = await fetch("/api/settings/logo");
      const data = await res.json();
      setLogos(data.logos || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
      {logos.map((logo) => (
        <div
          key={logo._id}
          className="border rounded-xl p-3 flex flex-col items-center"
        >
          <img src={logo.logoUrl} className="h-20 object-contain" alt="" />

          <button
            onClick={() => deleteLogo(logo._id)}
            className="mt-3 text-sm text-white bg-red-500 px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
