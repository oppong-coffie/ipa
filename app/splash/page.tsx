"use client";

import { useRouter } from "next/navigation";
import SplashScreen from "../components/SplashScreen";

export default function SplashPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.push("/");
  };

  return <SplashScreen onComplete={handleComplete} isStandalone={true} />;
}
