import ShowArticleList from "../components/ShowArticleList";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <ShowArticleList />
      </Suspense>
    </main>
  );
}
