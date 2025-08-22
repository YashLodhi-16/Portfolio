import Wrapper from "~/components/Wrapper";
import Footer from "~/components/Footer";
import { Theme, ThemeProvider } from "~/Store/ThemeProvider";

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
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
