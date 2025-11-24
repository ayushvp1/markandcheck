"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

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
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
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
        <p className="text-sm text-gray-700">
          This is a placeholder admin dashboard. You can extend this page to
          manage content, view enquiries, or perform other admin tasks.
        </p>
      </div>
    </div>
  );
}
