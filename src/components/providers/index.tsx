import { ClientOnly } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly fallback={null}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster closeButton position="top-center" richColors />
      </ThemeProvider>
    </ClientOnly>
  );
}

export { Providers };
