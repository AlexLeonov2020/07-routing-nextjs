import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Next.js Routing project - NoteHub",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
