import Wrapper from "~/components/main/Wrapper";
import Footer from "~/components/main/Footer";
import { Theme, ThemeProvider } from "~/Store/ThemeProvider";
import Navbar from "~/components/main/Navbar";
import Profile from "~/components/main/Profile";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ThemeProvider defaultTheme={Theme.system} storageKey="vite-ui-theme">
      <Wrapper>
        <Navbar />
        <Profile />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
