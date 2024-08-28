import Image from 'next/image';

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  
  const product = {
    name: slug.replace(/-/g, ' ') || "Product",
    description: "This is a fantastic product that meets all your needs!",
    price: "$1200",
    image: "/images/laptop.jpg",
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 capitalize">{product.name}</h1>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={600} 
          height={400} 
          className="w-full mb-4 rounded-lg" 
        />
        <p className="text-xl mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-4">{product.price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
