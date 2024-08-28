
import Link from 'next/link';
import { ProductAdminProvider } from '../context/ProductAdminContext'; 

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProductAdminProvider>
      <div className="min-h-screen flex">
        <nav className="bg-gray-800 text-white w-1/4 p-8">
          <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/admin/products">Manage Products</Link>
            </li>
            <li>
              <Link href="/admin/orders">Manage Orders</Link>
            </li>
          </ul>
        </nav>
        <main className="w-3/4 p-8">
          {children}
        </main>
      </div>
    </ProductAdminProvider>
  );
}
