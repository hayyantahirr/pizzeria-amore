"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current user session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error getting session:", error.message);
          router.push("/");
          return;
        }

        if (!session) {
          // No session, redirect to home
          router.push("/");
          return;
        }

        // Check if the user is the admin
        const userEmail = session.user.email;
        
        if (userEmail === "hayyantahirr@gmail.com") {
          // Admin user - redirect to admin dashboard
          router.push("/admin-dashboard");
        } else {
          // Regular user - redirect to home page
          router.push("/");
        }
      } catch (err) {
        console.error("Auth callback error:", err);
        router.push("/");
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Processing your authentication...</h2>
        <div className="w-16 h-16 border-t-4 border-[#DE6868] border-solid rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}