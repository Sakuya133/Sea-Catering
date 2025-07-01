"use client";
import { useState } from "react";
import Image from "next/image";


interface MealPlan {
  title: string;
  price: string;
  description: string;
  image: string;
}

const mealPlans: MealPlan[] = [
  {
    title: "Diet Plan",
    price: "RpXXX.XXX",
    description:
      "Diet Plan dirancang khusus untuk membantu Anda mencapai tujuan kesehatan dan kebugaran dengan cara yang seimbang dan terstruktur. Setiap rencana makan dalam Diet Plan ini dirancang untuk memenuhi kebutuhan nutrisi harian Anda, dengan kombinasi yang tepat antara protein, karbohidrat, lemak sehat, vitamin, dan mineral. Kami memastikan setiap menu mengandung bahan-bahan berkualitas tinggi yang mendukung metabolisme tubuh, meningkatkan energi, dan membantu proses penurunan berat badan secara alami. Diet Plan ini tidak hanya fokus pada pengendalian kalori, tetapi juga memperhatikan kualitas makanan yang dikonsumsi, untuk mendukung keseimbangan hormonal dan fungsi tubuh secara keseluruhan. Anda akan mendapatkan informasi lengkap tentang jumlah kalori, ukuran porsi, serta manfaat kesehatan dari setiap bahan makanan yang digunakan, sehingga Anda bisa lebih bijak dalam memilih apa yang Anda makan. Manfaat utama dari mengikuti Diet Plan kami adalah meningkatkan energi tubuh, memperbaiki pola makan, dan mencapai berat badan ideal dengan cara yang tidak ekstrem. Rencana ini juga dapat membantu Anda mengatur kadar gula darah, meningkatkan metabolisme, dan mendukung kesehatan pencernaan. Tidak hanya itu, Diet Plan kami juga memberikan fleksibilitas untuk menyesuaikan dengan berbagai preferensi diet, seperti opsi vegetarian, vegan, atau bebas gluten. Dengan Diet Plan, Anda tidak hanya mendapatkan menu yang lezat dan bergizi, tetapi juga mendukung gaya hidup sehat jangka panjang yang bisa Anda nikmati dengan mudah setiap hari.",
    image: "/sereal.webp", 
  },
  {
    title: "Meal Plan 1",
    price: "RpXXX.XXX",
    description:
      "Meal Plan 1 dirancang untuk memenuhi kebutuhan nutrisi harian Anda dengan pilihan menu yang sehat dan seimbang. Setiap paket mencakup menu harian yang bervariasi, lengkap dengan informasi tentang kandungan kalori untuk memastikan Anda tetap menjaga asupan energi yang optimal. Kami menggunakan bahan makanan berkualitas tinggi yang tidak hanya lezat tetapi juga mendukung gaya hidup sehat Anda. Meal Plan ini juga memberikan opsi untuk menyesuaikan bahan makanan berdasarkan preferensi diet, seperti rendah karbohidrat, tinggi protein, atau bebas gluten. Dengan Meal Plan 1, Anda dapat menikmati makanan yang bergizi tanpa khawatir tentang perencanaan atau penghitungan kalori, sehingga Anda dapat fokus pada aktivitas harian Anda sambil tetap menjaga kesehatan tubuh.",
    image: "/apayaa.jpeg", 
  },
  {
    title: "Meal Plan 2",
    price: "RpXXX.XXX",
    description:
      "Meal Plan 2 menawarkan pilihan menu yang tidak hanya sehat tetapi juga disesuaikan dengan berbagai kebutuhan diet. Setiap paket dirancang dengan mempertimbangkan keberagaman preferensi, seperti opsi vegan, halal, atau bebas gluten, memastikan bahwa Anda dapat menikmati makanan yang sesuai dengan gaya hidup dan keyakinan Anda. Kami menggunakan bahan-bahan segar dan alami yang tidak hanya menyehatkan tetapi juga lezat, memberikan pengalaman makan yang memuaskan setiap hari. Meal Plan 2 juga dilengkapi dengan informasi detail tentang kalori dan kandungan gizi, sehingga Anda dapat dengan mudah mengatur asupan nutrisi harian Anda. Berbagai testimoni dari pelanggan yang telah mencoba Meal Plan ini menunjukkan betapa mereka merasa lebih sehat, bertenaga, dan puas dengan pilihan menu yang kami tawarkan. Dengan Meal Plan 2, Anda mendapatkan makanan yang tidak hanya baik untuk tubuh, tetapi juga selaras dengan nilai-nilai pribadi Anda.",
    image: "/apaya.jpeg",
  },
];

export default function MenuPage() {
  
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);

  
  const openDrawer = (plan: MealPlan) => {
    setSelectedPlan(plan);
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
    setTimeout(() => setSelectedPlan(null), 300); 
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
            <a className="text-white hover:text-blue-400 font-medium" href="/contact">Contact Us</a>
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
              <div className="w-full h-64 sm:h-80 bg-gray-400 rounded-xl overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
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
