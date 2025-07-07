import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "LokaMarket - Indonesia Market",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="font-outfit antialiased text-gray-700">
        <Toaster />
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
