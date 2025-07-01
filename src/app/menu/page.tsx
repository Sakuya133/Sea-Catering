"use client";

import { useState } from "react";

const mealPlans = [
  {
    title: "Diet Plan",
    price: "RpXXX.XXX",
    description:
      "Deskripsi lengkap tentang Diet Plan. Kamu bisa menambahkan info nutrisi, manfaat, dan lain-lain di sini.",
  },
  {
    title: "Meal Plan 1",
    price: "RpXXX.XXX",
    description:
      "Deskripsi lengkap tentang Meal Plan 1. Bisa memuat menu harian, kalori, atau bahan makanan yang digunakan.",
  },
  {
    title: "Meal Plan 2",
    price: "RpXXX.XXX",
    description:
      "Deskripsi lengkap tentang Meal Plan 2. Tambahkan info menarik seperti opsi vegan, halal, atau testimoni.",
  },
];

export default function MenuPage() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = (plan: any) => {
    setSelectedPlan(plan);
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
    setTimeout(() => setSelectedPlan(null), 300); // tunggu animasi selesai
  };

  return (
    <main className="relative min-h-screen bg-white text-black px-4 sm:px-12 py-10">
      <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md z-20">
        <ul className="flex justify-start gap-6">
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/home">Home</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/menu">Menu</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/sub">Subscription</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="#about">Contact Us</a>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl font-extrabold text-center mb-12 mt-24 text-[#4c6723]">
        Meal Plans
      </h1>

      <div className="flex flex-col gap-8">
        {mealPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#7b944a] text-white rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row gap-6 items-center shadow-md"
          >
            <div className="w-full sm:w-1/3">
              <div className="w-full aspect-square bg-gray-400 rounded-xl" />
            </div>
            <div className="w-full sm:w-2/3">
              <h2 className="text-2xl font-bold mb-1">{plan.title}</h2>
              <p className="mb-4 text-lg">{plan.price}</p>
              <p className="text-sm mb-4">{plan.description}</p>
              <p
                onClick={() => openDrawer(plan)}
                className="text-sm text-gray-300 underline cursor-pointer hover:text-white"
              >
                See more...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30 ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#4c6723]">Details</h2>
            <button
              className="text-xl font-bold text-gray-600 hover:text-black"
              onClick={closeDrawer}
            >
              ×
            </button>
          </div>
          {selectedPlan && (
            <div>
              <h3 className="text-xl font-semibold mb-2">{selectedPlan.title}</h3>
              <p className="text-md font-medium mb-4">{selectedPlan.price}</p>
              <p className="text-sm text-gray-800">{selectedPlan.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showDrawer && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
        />
      )}
    </main>
  );
}
