"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminAccess = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error || !session) {
          // No session or error, redirect to home
          router.push("/");
          return;
        }

        // Verify this is the admin user
        if (session.user.email !== "hayyantahirr@gmail.com") {
          // Not the admin, redirect to home
          router.push("/");
          return;
        }

        setUser(session.user);
        setLoading(false);
      } catch (err) {
        console.error("Admin access check error:", err);
        router.push("/");
      }
    };

    checkAdminAccess();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading admin dashboard...</h2>
          <div className="w-16 h-16 border-t-4 border-[#DE6868] border-solid rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header - Not the regular Navbar */}
      <header className="bg-[#DE6868] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>Welcome, {user?.user_metadata?.name || user?.email}</span>
            <button 
              onClick={handleSignOut}
              className="bg-white text-[#DE6868] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">
            Welcome to your admin dashboard. Here you can manage your pizzeria website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Orders</h3>
            <p className="text-gray-600 mb-4">Manage customer orders and delivery status.</p>
            <button className="text-[#DE6868] font-medium hover:underline">View Orders</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Menu Items</h3>
            <p className="text-gray-600 mb-4">Add, edit or remove items from your menu.</p>
            <button className="text-[#DE6868] font-medium hover:underline">Manage Menu</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Users</h3>
            <p className="text-gray-600 mb-4">View and manage registered users.</p>
            <button className="text-[#DE6868] font-medium hover:underline">Manage Users</button>
          </div>
        </div>
      </main>
    </div>
  );
}