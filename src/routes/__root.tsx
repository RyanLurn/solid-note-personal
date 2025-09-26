/// <reference types="vite/client" />

import { scan } from "react-scan";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import { Providers } from "@/components/providers";
import { ModeToggle } from "@/components/utils/mode-toggle";
import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    links: [{ href: appCss, rel: "stylesheet" }],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Solid Note",
      },
    ],
  }),
});

function RootComponent() {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return (
    <RootDocument>
      <Providers>
        <Outlet />
        <ModeToggle className="fixed top-2 right-2" variant="outline" />
      </Providers>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="/vite.svg" rel="icon" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
