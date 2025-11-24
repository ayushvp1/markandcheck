"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WysiwygEditor = dynamic(() => import("@/components/WysiwygEditor"), {
  ssr: false,
});

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const [newsTitle, setNewsTitle] = useState("");
  const [newsShortDescription, setNewsShortDescription] = useState("");
  const [newsFullDescription, setNewsFullDescription] = useState("");
  const [newsCategory, setNewsCategory] = useState("News");
  const [newsReadTime, setNewsReadTime] = useState("5 min read");
  const [newsPublishDate, setNewsPublishDate] = useState("");
  const [newsTags, setNewsTags] = useState("");
  const [newsImageFile, setNewsImageFile] = useState(null);
  const [newsSubmitting, setNewsSubmitting] = useState(false);
  const [newsError, setNewsError] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsHtmlContent, setNewsHtmlContent] = useState("");
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  async function checkAuth() {
    try {
      const res = await fetch("/api/admin/me", { cache: "no-store" });
      const data = await res.json();
      if (data.authenticated) {
        setAuthenticated(true);
        setCurrentUser(data.username);
      } else {
        setAuthenticated(false);
        setCurrentUser("");
      }
    } catch {
      setAuthenticated(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  async function loadNews() {
    try {
      setNewsLoading(true);
      const res = await fetch("/api/admin/news", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setNewsList(data);
    } catch {
      // ignore for now
    } finally {
      setNewsLoading(false);
    }
  }

  useEffect(() => {
    if (authenticated) {
      loadNews();
    }
  }, [authenticated]);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to login");
        return;
      }

      setUsername("");
      setPassword("");
      await checkAuth();
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setCurrentUser("");
  }

  async function handleCreateNews(e) {
    e.preventDefault();
    setNewsSubmitting(true);
    setNewsError("");

    if (!newsImageFile) {
      setNewsError("Please select a cover image");
      setNewsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", newsTitle);
      formData.append("shortDescription", newsShortDescription);
      formData.append("fullDescription", newsFullDescription);
      formData.append("category", newsCategory);
      formData.append("readTime", newsReadTime);
      formData.append("publishDate", newsPublishDate || new Date().toISOString());
      formData.append("tags", newsTags);
      formData.append("image", newsImageFile);
      formData.append("htmlContent", newsHtmlContent);

      console.log("Submitting news with htmlContent:", {
        hasHtmlContent: !!newsHtmlContent,
        htmlContentLength: newsHtmlContent.length,
        htmlContentPreview: newsHtmlContent.substring(0, 100)
      });

      const res = await fetch("/api/admin/news", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({ message: "Failed" }));
        setNewsError(data.message || "Failed to create news item");
        return;
      }

      setNewsTitle("");
      setNewsShortDescription("");
      setNewsFullDescription("");
      setNewsCategory("News");
      setNewsReadTime("5 min read");
      setNewsPublishDate("");
      setNewsTags("");
      setNewsImageFile(null);
      setNewsHtmlContent("");
      setEditingNewsId(null);
      setCurrentImageUrl("");
      setImagePreview("");

      await loadNews();
    } catch {
      setNewsError("Something went wrong while creating news");
    } finally {
      setNewsSubmitting(false);
    }
  }

  function handleEditNews(item) {
    setEditingNewsId(item._id);
    setNewsTitle(item.title);
    setNewsShortDescription(item.shortDescription);
    setNewsFullDescription(item.fullDescription || "");
    setNewsCategory(item.category || "News");
    setNewsReadTime(item.readTime || "5 min read");
    setNewsPublishDate(item.publishDate ? new Date(item.publishDate).toISOString().split('T')[0] : "");
    setNewsTags(item.tags?.join(", ") || "");
    setNewsHtmlContent(item.htmlContent || "");
    setCurrentImageUrl(item.image || "");
    setImagePreview(item.image || "");
    setNewsImageFile(null);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditingNewsId(null);
    setNewsTitle("");
    setNewsShortDescription("");
    setNewsFullDescription("");
    setNewsCategory("News");
    setNewsReadTime("5 min read");
    setNewsPublishDate("");
    setNewsTags("");
    setNewsImageFile(null);
    setNewsHtmlContent("");
    setCurrentImageUrl("");
    setImagePreview("");
  }

  async function handleUpdateNews(e) {
    e.preventDefault();
    setNewsSubmitting(true);
    setNewsError("");

    try {
      const updateData = {
        title: newsTitle,
        shortDescription: newsShortDescription,
        fullDescription: newsFullDescription,
        category: newsCategory,
        readTime: newsReadTime,
        publishDate: newsPublishDate || new Date().toISOString(),
        tags: newsTags,
        htmlContent: newsHtmlContent,
      };

      // If new image is uploaded, we need to use FormData
      if (newsImageFile) {
        const formData = new FormData();
        Object.keys(updateData).forEach(key => {
          formData.append(key, updateData[key]);
        });
        formData.append("image", newsImageFile);

        const res = await fetch(`/api/admin/news/${editingNewsId}`, {
          method: "PUT",
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({ message: "Failed" }));
          setNewsError(data.message || "Failed to update news item");
          return;
        }
      } else {
        // No new image, just update metadata
        const res = await fetch(`/api/admin/news/${editingNewsId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateData),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({ message: "Failed" }));
          setNewsError(data.message || "Failed to update news item");
          return;
        }
      }

      handleCancelEdit();
      await loadNews();
    } catch {
      setNewsError("Something went wrong while updating news");
    } finally {
      setNewsSubmitting(false);
    }
  }

  async function handleDeleteNews(id) {
    const confirmed = confirm("Delete this news item?");
    if (!confirmed) return;

    try {
      await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
      setNewsList((prev) => prev.filter((item) => item._id !== id));
    } catch {
      // no-op for now
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-center">Admin Login</h1>
          {error && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {error}
            </p>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-gray-600">Logged in as {currentUser}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm px-3 py-1 border rounded"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {editingNewsId ? "Edit News" : "Create News"}
              </h2>
              {editingNewsId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="text-sm px-3 py-1 border rounded text-gray-600 hover:bg-gray-50"
                >
                  Cancel Edit
                </button>
              )}
            </div>
            {newsError && (
              <p className="text-sm text-red-600" role="alert">
                {newsError}
              </p>
            )}
            <form onSubmit={editingNewsId ? handleUpdateNews : handleCreateNews} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 text-sm"
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-600">Slug (auto-generated)</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 text-sm bg-gray-50 text-gray-600"
                  value={newsTitle ? slugify(newsTitle) : ""}
                  readOnly
                  placeholder="Will be generated from title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Short Description</label>
                <textarea
                  className="w-full border rounded px-3 py-2 text-sm"
                  rows={3}
                  value={newsShortDescription}
                  onChange={(e) => setNewsShortDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Full Description (optional)</label>
                <textarea
                  className="w-full border rounded px-3 py-2 text-sm"
                  rows={3}
                  value={newsFullDescription}
                  onChange={(e) => setNewsFullDescription(e.target.value)}
                  placeholder="Brief summary (optional, use rich editor below for main content)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rich Content Editor</label>
                <WysiwygEditor
                  value={newsHtmlContent}
                  onChange={setNewsHtmlContent}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Read Time</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={newsReadTime}
                    onChange={(e) => setNewsReadTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Publish Date</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={newsPublishDate}
                    onChange={(e) => setNewsPublishDate(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty for today's date</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={newsTags}
                    onChange={(e) => setNewsTags(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Cover Image {editingNewsId && "(leave empty to keep current)"}
                </label>
                
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mb-2 relative">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded border"
                    />
                    <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                      {newsImageFile ? "New Image" : "Current Image"}
                    </span>
                  </div>
                )}
                
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-sm"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setNewsImageFile(file);
                      // Create preview URL for new image
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setImagePreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  required={!editingNewsId}
                />
              </div>
              <button
                type="submit"
                disabled={newsSubmitting}
                className="w-full bg-black text-white py-2 rounded text-sm font-medium disabled:opacity-60"
              >
                {newsSubmitting ? (editingNewsId ? "Updating..." : "Creating...") : (editingNewsId ? "Update News" : "Create News")}
              </button>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Manage News</h2>
              {newsLoading && (
                <span className="text-xs text-gray-500">Loading...</span>
              )}
            </div>
            {newsList.length === 0 && !newsLoading ? (
              <p className="text-sm text-gray-500">No news items yet.</p>
            ) : (
              <ul className="space-y-3 max-h-[420px] overflow-y-auto">
                {newsList.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-start justify-between gap-3 border rounded px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditNews(item)}
                        className="text-xs text-blue-600 border border-blue-200 rounded px-2 py-1 hover:bg-blue-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNews(item._id)}
                        className="text-xs text-red-600 border border-red-200 rounded px-2 py-1 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
