"use client";

import { useState } from "react";

const plans = [
  { name: "Diet Plan", price: 50000 },
  { name: "Diet Plan", price: 60000 },
  { name: "Diet Plan", price: 70000 },
];

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [mealTypes, setMealTypes] = useState<string[]>([]);
  const [deliveryDays, setDeliveryDays] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [allergies, setAllergies] = useState("");

  const toggleMealType = (type: string) => {
    setMealTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleDay = (day: string) => {
    setDeliveryDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const totalPrice =
    selectedPlan !== null
      ? plans[selectedPlan].price * deliveryDays.length * mealTypes.length
      : 0;

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-12 py-12 max-w-3xl mx-auto">
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

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-[#4c6723]">
        Subscription Form
      </h1>

      <form className="flex flex-col gap-6">
        <div>
          <label className="font-bold block mb-1">*Full Name:</label>
          <input
            className="w-full border border-gray-400 px-4 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-bold block mb-1">*Active Phone Number:</label>
          <input
            type="tel"
            className="w-full border border-gray-400 px-4 py-2 rounded"
            placeholder="+62"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-bold block mb-1">*Plan Selection:</label>
          <small className="text-gray-600 mb-2 block">Displayed price per meal</small>
          <div className="flex gap-4 flex-wrap">
            {plans.map((plan, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPlan(idx)}
                className={`border-2 rounded-xl px-6 py-4 text-center font-bold ${
                  selectedPlan === idx
                    ? "bg-[#4c6723] text-white border-[#4c6723]"
                    : "text-[#4c6723] border-[#4c6723]"
                }`}
              >
                {plan.name}
                <br />
                Rp{plan.price.toLocaleString("id-ID")}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold block mb-1">*Meal Type:</label>
          <small className="text-gray-600 mb-2 block">Choose one or more</small>
          <div className="flex gap-4 flex-wrap">
            {["Breakfast", "Lunch", "Dinner"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={mealTypes.includes(type)}
                  onChange={() => toggleMealType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold block mb-1">*Delivery Days:</label>
          <small className="text-gray-600 mb-2 block">Choose one or more</small>
          <div className="flex flex-wrap gap-3">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`rounded-full px-5 py-2 border-2 font-bold ${
                  deliveryDays.includes(day)
                    ? "bg-[#4c6723] text-white border-[#4c6723]"
                    : "text-[#4c6723] border-[#4c6723]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold block mb-1">*Allergies:</label>
          <input
            className="w-full border border-gray-400 px-4 py-2 rounded"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="Write if any"
          />
        </div>

        <div className="text-xl font-bold mt-4">
          TOTAL PRICE:{" "}
          <span className="text-[#4c6723] text-2xl">
            Rp{totalPrice.toLocaleString("id-ID")}
          </span>
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#4c6723] text-white px-6 py-3 rounded-xl font-semibold w-fit self-end hover:bg-[#3b521e]"
        >
          Continue to payment
        </button>
      </form>
    </main>
  );
}
