import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Breads",
  description:
    "A Threads Knockoff using Next.Js (Secretly Better Than Threads)",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1 `}>
          <div className="flex flex-row items-center justify-center h-full w-full p-24">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
