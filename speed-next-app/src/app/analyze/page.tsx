import AnalysisList from "../../components/AnalysisList";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: false });

export default function AnalyzePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <AnalysisList />
      </Suspense>
    </main>
  );
}
