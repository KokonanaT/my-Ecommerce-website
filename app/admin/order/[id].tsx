"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'; 

export default function OrderDetails() {
  const router = useRouter(); 
  const { id } = useParams(); 

  const order = {
    id: id || 'N/A',
    customer: 'Nanak',
    items: [
      { name: 'Product 1', quantity: 2, price: '$50.00' },
      { name: 'Product 2', quantity: 1, price: '$50.00' },
    ],
    totalAmount: '$150.00',
    status: 'Processing',
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Order Details for ID: {order.id}</h1>
      <div className="mb-4">
        <strong>Customer:</strong> {order.customer}
      </div>
      <div className="mb-4">
        <strong>Order Status:</strong> {order.status}
      </div>
      <div className="mb-4">
        <strong>Items:</strong>
        <ul className="list-disc ml-5">
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Total Amount:</strong> {order.totalAmount}
      </div>
      <button
        onClick={() => router.push('/checkout')}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
