"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error.message);
      } else {
        console.log("User session:", session);
        router.push("/"); // redirect to homepage (or dashboard)
      }
    };

    handleSession();
  }, [router]);

  return <p>Loading...</p>;
}
