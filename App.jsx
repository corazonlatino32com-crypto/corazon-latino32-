import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Warmth Within Tee", price: 39, image: "https://via.placeholder.com/800x900?text=Tee", desc: "Premium cotton essential." },
  { id: 2, name: "Corazón Vertical Tee", price: 39, image: "https://via.placeholder.com/800x900?text=Corazon", desc: "Minimal identity piece." },
  { id: 3, name: "Island Memory Tee", price: 39, image: "https://via.placeholder.com/800x900?text=Island", desc: "Latin inspired design." }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const add = (p) => setCart([...cart, p]);
  const total = cart.reduce((a,b)=>a+b.price,0);

  return (
    <div className="min-h-screen text-[#2f2a26]">

      <header className="flex justify-between px-8 py-6 border-b">
        <h1 className="tracking-[0.3em] uppercase">Corazón Latino</h1>
        <div className="flex gap-2 items-center">
          <ShoppingCart size={18}/>
          <span>{cart.length}</span>
        </div>
      </header>

      <section className="text-center py-20">
        <h2 className="text-5xl">Warmth & Identity</h2>
        <p className="text-gray-500 mt-3">Latin roots × Nordic minimalism</p>
      </section>

      <section className="grid md:grid-cols-3 gap-10 px-10">
        {products.map(p=>(
          <div key={p.id} className="p-4">
            <img src={p.image} className="rounded-2xl"/>
            <h3 className="mt-3">{p.name}</h3>
            <p className="text-sm text-gray-500">€{p.price}</p>
            <button onClick={()=>add(p)} className="mt-2 px-4 py-2 bg-black text-white rounded-full">
              Add to cart
            </button>
          </div>
        ))}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between">
        <div>{cart.length} items • €{total}</div>
        <div className="font-bold">Checkout (demo)</div>
      </footer>

    </div>
  );
}
