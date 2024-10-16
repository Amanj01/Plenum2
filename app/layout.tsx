import "./globals.css";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

// Dynamically import the smooth scroll provider, disabling SSR
const SmoothScrollProvider = dynamic(() => import("./components/SmoothScrollProvider"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <div style={{ flex: 1 }}>
            <main>{children}</main>
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
