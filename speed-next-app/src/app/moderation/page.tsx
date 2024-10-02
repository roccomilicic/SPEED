import ModerationList from "../../components/Moderation";
import NavBar from "../../components/Navbar";

export default function ModerationPage() {
  return (
    <main className="container mx-auto p-4">
      <NavBar />
      <ModerationList />
    </main>
  );
}
