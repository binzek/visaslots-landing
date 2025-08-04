import { ReactNode } from "react";
import type { Metadata } from "next";

import { HeaderComponent } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visaslots",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
