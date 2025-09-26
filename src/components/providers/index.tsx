import { ClientOnly } from "@tanstack/react-router";
import { ThemeProvider } from "./theme";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly fallback={null}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </ClientOnly>
  );
}

export { Providers };
