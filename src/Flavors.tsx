import React, { useState } from 'react';
import { IceCream, Star, ChevronDown, ChevronUp } from 'lucide-react';

function Flavors() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const products = [
    {
      type: "Cup Ice Cream",
      description: "Our classic ice cream served in convenient cups. Perfect for on-the-go enjoyment, available in small, medium, and large sizes. Each cup is packed with premium quality ice cream that maintains its creamy texture till the last bite.",
      image: "https://i.ibb.co/21phZpgX/Cup.jpg?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Chocolate Cup", price: "OUT OF STOCK", image: "https://i.ibb.co/HRq2S9L/maxresdefault.jpg?auto=format&fit=crop&q=80" },
        { name: "Vanilla Cup", price: "OUT OF STOCK", image: "https://i.ibb.co/1t4xC2JP/Screenshot-2025-03-09-224203.png?auto=format&fit=crop&q=80" },
        { name: "Butterscotch Cup", price: "OUT OF STOCK", image: "https://i.ibb.co/TqtXCgXL/butter-scotch-small-cup-ice-creams-261.jpg?auto=format&fit=crop&q=80" },
        { name: "Pista Cup", price: "OUT OF STOCK", image: "https://i.ibb.co/WNx1xB09/images-q-tbn-ANd9-Gc-QX9hpw5m-Ir5bx-Px-VDab-Tlq-ZN3-Xtn-Sge-BSty-A-s.jpg?auto=format&fit=crop&q=80" },
      ]
    },
    {
      type: "Chocobar Ice Cream",
      description: "Indulge in the rich, creamy delight of Chocobar Ice Cream—a perfect fusion of smooth vanilla ice cream enrobed in a luscious, crunchy chocolate shell. With every bite, experience the velvety sweetness of the ice cream melting in your mouth.",
      image: "https://i.ibb.co/YTcDyv40/chocobar.webp?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Classic Chocobar", price: "OUT OF STOCK", image: "https://i.ibb.co/YTcDyv40/chocobar.webp?auto=format&fit=crop&q=80" },
        { name: "Almond Chocobar", price: "OUT OF STOCK", image: "https://i.ibb.co/YTcPbSN4/haagen-dazs-vanilla-milk-chocolate-almond-ice-cream-bar-detail-280x330.jpg?auto=format&fit=crop&q=80" },
        { name: "Coffee Chocobar", price: "OUT OF STOCK", image: "https://i.ibb.co/ksTpXqvC/Screenshot-2025-03-09-225131.png?auto=format&fit=crop&q=80" },
        { name: "Caramel Chocobar", price: "OUT OF STOCK", image: "https://i.ibb.co/TDCJVRXK/Dark-Chocolate-Caramel-Crunch.png?auto=format&fit=crop&q=80" }
      ]
    },  
    {
      type: "Cone Ice Cream",
      description: "Crispy wafer cones filled with your favorite flavors. Our cones are freshly baked daily, creating the perfect combination of crunchy cone and smooth ice cream. Choose from regular or chocolate-dipped cones for extra indulgence.",
      image: "https://i.ibb.co/hF6zw8Ww/i-Cone-icecream.jpg?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Chocolate Cone", price: "OUT OF STOCK", image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80" },
        { name: "Vanilla Cone", price: "OUT OF STOCK", image: "https://i.ibb.co/qSmQhKD/images-q-tbn-ANd9-Gc-RHKMYVNBhhv-AEi-ATBMTJ6m-p-Vnka-9efhvi-Q-s.jpg?auto=format&fit=crop&q=80" },
        { name: "Butterscotch Cone", price: "OUT OF STOCK", image: "https://i.ibb.co/k64Q2VYv/butterscotch-cone-ice-cream-500x500.jpg?auto=format&fit=crop&q=80" },
        { name: "Strawberry Cone", price: "OUT OF STOCK", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80" },
        { name: "Chocolate-Dipped Cone", price: "OUT OF STOCK", image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&q=80" }
      ]
    },
    {
      type: "Matka Ice Cream",
      description: "Traditional clay pot ice cream that brings a unique earthen flavor. Served in handcrafted kulhads, this special preparation keeps the ice cream naturally cool and adds a distinctive taste that can't be replicated in any other container.",
      image: "https://i.ibb.co/9kNz0m5P/dodla-matka-kulfi-ice-cream-1000x1000.webp?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Classic Matka Kulfi", price: "OUT OF STOCK", image: "https://i.ibb.co/5hvrPrnm/DSC-5879-1-1.jpg?auto=format&fit=crop&q=80" },
        { name: "Malai Matka", price: "OUT OF STOCK", image: "https://i.ibb.co/6JL0FM9r/malai-matka-kulfi-ice-cream.jpg?auto=format&fit=crop&q=80" },
        { name: "Pista Matka", price: "OUT OF STOCK", image: "https://i.ibb.co/1D4RY4R/0af17c208fb747d9593fab0cb391574d.jpg?auto=format&fit=crop&q=80" },
        { name: "Kesar Matka", price: "OUT OF STOCK", image: "https://i.ibb.co/YTDcJ2G5/Potful-Comp-new-Fin-05-650-X480-COMPRESSED.jpg?auto=format&fit=crop&q=80" }
      ]
    },
    {
      type: "Sundae Specials",
      description: "Elaborate ice cream creations topped with premium garnishes. Each sundae is a work of art, featuring multiple ice cream flavors, fresh fruits, nuts, sauces, and whipped cream. Perfect for special occasions or when you want to treat yourself.",
      image: "https://i.ibb.co/whqs2N64/sundae.jpg?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Vanilla Sundae", price: "OUT OF STOCK", image: "https://i.ibb.co/r29NQwbN/sundae-vanilla.jpg?auto=format&fit=crop&q=80" },
        { name: "Butterscotch Delight Sundae", price: "OUT OF STOCK", image: "https://i.ibb.co/nMBSDTZN/ed2e5234badd4a9d967bc2a048660aed.jpg?auto=format&fit=crop&q=80" },
        { name: "Chocolate Fudge Sundae", price: "OUT OF STOCK", image: "https://i.ibb.co/1Gwk3bGQ/Screenshot-2025-03-09-231535.png?auto=format&fit=crop&q=80" },
        
      ]
    },
    {
      type: "Kulfi Ice Cream",
      description: "Kulfi Ice Cream is a rich and creamy traditional Indian dessert, known for its dense texture and indulgent flavors. Made with slow-cooked milk, sugar, and aromatic spices like cardamom and saffron, this frozen treat offers a velvety smooth experience with every bite.",
      image: "https://i.ibb.co/vx8jgY1g/kulfi-kesar-pista.jpg?auto=format&fit=crop&q=80",
      varieties: [
        { name: "Classic Kulfi", price: "OUT OF STOCK", image: "https://i.ibb.co/BHLWTq2g/05f39bee-87c6-4b92-b9e3-82e7cc5715f4.webp?auto=format&fit=crop&q=80" },
        { name: "Almond Kulfi", price: "OUT OF STOCK", image: "https://i.ibb.co/PBPqhdx/classic-creamy-rich-in-taste-sweet-delight-dessert-kulfi-ice-cream-471.jpg?auto=format&fit=crop&q=80" },
        { name: "Mango Kulfi", price: "OUT OF STOCK", image: "https://i.ibb.co/nNhGjJcf/images-q-tbn-ANd9-Gc-TG9m-Y0x-DB9e-I0yl-ILa-ZCE7-EVk-P7-Rk-Ht-F4u-Kw-s.jpg?auto=format&fit=crop&q=80" },
        { name: "Pistachio Kulfi", price: "OUT OF STOCK", image: "https://i.ibb.co/r23hz7mR/images-q-tbn-ANd9-Gc-TB8c-KQ1jl-Mbn-Vrx-CQSKIy-zd8-Zs-Tqud-Uhj5g-s.jpg?auto=format&fit=crop&q=80" }
      ]
    }
  ];

  const toggleSection = (type: string) => {
    setOpenSection(openSection === type ? null : type);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-gray-900 px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <IceCream className="w-8 h-8 text-pink-400" />
            <span className="text-2xl font-bold text-white">Khushboo Milk Ice</span>
          </a>
        </div>
      </nav>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Ice Cream Varieties</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our range of delicious ice cream servings, each crafted with care and premium ingredients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img 
                src={product.image} 
                alt={product.type}
                className="w-full h-63 object-cover aspect-[5/4]"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-pink-500" />
                    <h2 className="text-2xl font-bold">{product.type}</h2>
                  </div>
                  <button 
                    onClick={() => toggleSection(product.type)}
                    className="text-pink-500 hover:text-pink-600 transition"
                  >
                    {openSection === product.type ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                {openSection === product.type && (
                  <div className="mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Available Varieties:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {product.varieties.map((variety, idx) => (
                        <div 
                          key={idx}
                          className="flex flex-col sm:flex-row items-center bg-white p-3 rounded-md shadow-sm gap-4"
                        >
                          <img 
                            src={variety.image} 
                            alt={variety.name}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                          <div className="flex flex-grow justify-between items-center w-full">
                            <span className="font-medium">{variety.name}</span>
                            <span className="text-pink-500 font-semibold">{variety.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Khushboo Milk Ice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Flavors;