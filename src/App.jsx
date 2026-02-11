import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [thinkClicks, setThinkClicks] = useState(0);
  const [thinkPosition, setThinkPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setAnswer("yes");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleThinkClick = () => {
    if (thinkClicks < 3) {
      setThinkClicks((prev) => prev + 1);
      setThinkPosition({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 120,
      });
    } else {
      setAnswer("thinking");
    }
  };

  const confessionMessage = `Dear Valencia,

Halo bott!!! Hmm.. harusnya sekarang jumat malem, bener gaa?? First of all, I MAU NGOMONG INI GA GPTT!! and I juga mau minta maaf karena I ga bisa sampein ini ke u in person karena as you may know, I engga terlalu jago ngomong.. and I tau I bakal gugup kalo ngomong ini ke u. Tapi the main reason is I mau u pikirin ini dulu baik - baik. I tau we have our differences and I gamau put pressure on u by saying this in person. Hmm.. Ever since I saw u in X6, I've always known that you are different...

Swipe up bott!!, oh iya, dont forget to build the lego bott!!`;

  const images = [
    "/memories/1.jpg",
    "/memories/2.jpg",
    "/memories/3.jpg",
    "/memories/4.jpg",
    "/memories/5.jpg",
    "/memories/6.jpg",
    "/memories/7.jpg",
    "/memories/8.jpg",
  ];

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100">

      {/* SECTION 1 */}
      <section className="min-h-screen flex items-center justify-center snap-start px-6 text-center">
        <div>
          <h1 className="text-4xl text-rose-600 font-serif mb-6">
            For My Special One 💖
          </h1>
          <p className="text-rose-500 italic">Swipe Up Bott!!</p>
        </div>
      </section>

      {/* SECTION 2 - LETTER */}
      <section className="min-h-screen flex items-center justify-center snap-start px-4 py-8">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-3xl text-rose-500 text-center mb-6">
            A Letter For You
          </h2>

          {/* Scrollable Letter */}
          <div className="h-[60vh] overflow-y-auto pr-2 overscroll-contain">
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {confessionMessage}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - GALLERY */}
      <section className="min-h-screen flex items-center justify-center snap-start px-4 py-8">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-3xl text-rose-500 text-center mb-6">
            Our Beautiful Memories ✨
          </h2>

          {/* Scrollable Gallery */}
          <div className="h-[60vh] overflow-y-auto overscroll-contain">
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={src}
                    alt={`memory-${i}`}
                    className="w-full h-52 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - QUESTION */}
      <section className="min-h-screen flex items-center justify-center snap-start px-6 text-center">
        <div>
          <h2 className="text-3xl text-rose-600 mb-8">
            Will You Be My Girlfriend? 💕
          </h2>

          {!answer && (
            <div className="flex flex-col gap-6 items-center">
              <button
                onClick={handleYesClick}
                className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-2xl shadow-lg"
              >
                Yes 💖
              </button>

              <motion.button
                onClick={handleThinkClick}
                animate={{ x: thinkPosition.x, y: thinkPosition.y }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border border-gray-400 px-10 py-4 rounded-2xl"
              >
                Let Me Think 😳
              </motion.button>
            </div>
          )}

          {answer === "yes" && (
            <p className="mt-8 text-2xl text-rose-600 font-semibold">
              You just made me the happiest person alive 🥹💞
            </p>
          )}

          {answer === "thinking" && (
            <p className="mt-8 text-lg text-gray-600 italic">
              I'll Respect Your Decision, Makasii Yaa
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
