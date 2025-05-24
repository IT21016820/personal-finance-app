import './globals.css'; // Tailwind/global styles
import Navbar from '../components/Navbar/navbar.jsx'; // ✅ Import Navbar

export const metadata = {
  title: 'FinGuard',
  description: 'Manage your money smartly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar /> {/* ✅ Add Navbar at the top */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
