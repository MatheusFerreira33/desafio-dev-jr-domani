import "./globals.css";
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "./providers/CartContext";

export default function RootLayout({ children }: {children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <ToastContainer />
        </CartProvider>
      </body>
    </html>
  );
}