import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTheme, Theme } from "~/Store/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <Button
        className="cursor-pointer aspect-square w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-transparent hover:bg-theme-background dark:hover:bg-dark-theme-black shadow-none"
        variant="ghost"
        size="icon"
        onClick={() => {
          const currentTheme = theme === Theme.light ? Theme.dark : Theme.light;
          setTheme(currentTheme);
        }}
      >
        <Sun className="h-4 w-4 sm:!w-5 sm:!h-5 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 text-[#FD7E41]" />
        <Moon className="absolute h-4 w-4 sm:!w-5 sm:!h-5 rotate-00 scale-100 transition-all dark:rotate-90 dark:scale-0 text-dark-theme-bg" />
      </Button>
    </div>
  );
}
