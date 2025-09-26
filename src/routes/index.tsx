import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={() => toast.info("Hello world!")}>Click me</Button>
    </div>
  );
}
