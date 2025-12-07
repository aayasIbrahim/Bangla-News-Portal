"use client";
import { useState, useEffect } from "react";

// Define category type
interface ICategory {
  _id: string;
  name: string;
  slug: string;
}

export default function AddCategory() {
  const [name, setName] = useState<string>("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Handle adding a new category
  const handleSubmit = async () => {
    if (!name.trim()) return; // prevent empty submission
    setLoading(true);
    try {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) throw new Error("Failed to add category");
      setName("");
      fetchCategories(); // refresh categories list
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Category</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>

      <div>
        {categories.length === 0 && <p>No categories yet.</p>}
        {categories.map((cat) => (
          <p key={cat._id} className="border p-2 rounded mb-1">
            {cat.name} → {cat.slug}
          </p>
        ))}
      </div>
    </div>
  );
}
