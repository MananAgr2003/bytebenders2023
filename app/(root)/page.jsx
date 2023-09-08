//app/page.tsx
"use client"
import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the /signin route when accessing the root UR
  
    if (router.pathname === ' ' || router.pathname === '/' ) {
      console.log("hi");
      router.push('/signin');
    }
  }, []);
  return (
    <div>
   <h1 className="text-white">Homththe</h1>
    </div>
  )
}