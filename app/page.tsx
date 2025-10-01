// app/page.tsx
import PagesLayout from "./pages/layout";
import Pages from "./pages/page";

export default function Home() {
  return (
    <PagesLayout>
      <Pages />
    </PagesLayout>
  );
}
