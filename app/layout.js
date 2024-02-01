import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContextProvider from "@/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

//! metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix",
  description: "a movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
