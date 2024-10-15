import ModerationList from "../../components/Moderation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });

export default function ModerationPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <ModerationList />
      </Suspense>
    </main>
  );
}
