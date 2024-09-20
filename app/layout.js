import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Quint",
  description: "Luxury Men's Clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
