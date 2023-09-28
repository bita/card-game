import { ReduxProvider } from "@/redux/Provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pair Player: The Memory Match Quest",
  description: "Complete the Game before time's up!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div id="backdrop-root"></div>
          <div id="overlay-root"></div>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
