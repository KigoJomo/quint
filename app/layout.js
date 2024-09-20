import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Quint",
  description: "Luxury Men's Clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 md:px-12">
        <Header />
        <main className="h-[90vh]">{children}</main>
        
      </body>
    </html>
  );
}
