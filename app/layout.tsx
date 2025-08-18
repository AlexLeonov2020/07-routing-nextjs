import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Next.js Routing project - NoteHub",
};

interface LayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode; // робимо modal опціональним
}

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
