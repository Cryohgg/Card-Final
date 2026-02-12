import { useState } from "react";
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

      const maxX = window.innerWidth / 4;
      const maxY = window.innerHeight / 6;

      setThinkPosition({
        x: (Math.random() - 0.5) * maxX,
        y: (Math.random() - 0.5) * maxY,
      });
    } else {
      setAnswer("thinking");
    }
  };

  const confessionMessage = "Dear Valencia, 
  
  Halo bott!!! Hmm.. harusnya sekarang kamis atau jumat malem, bener gaa?? First of all, I MAU NGOMONG INI GA GPTT!! and I juga mau minta maaf karena I ga bisa sampein ini ke u in person karena as you may know, I engga terlalu jago ngomong.. and I tau I bakal gugup kalo ngomong ini ke u. Tapi the main reason is I mau u pikirin ini dulu baik - baik. I tau we have our differences and I gamau put pressure on u by saying this in person. Hmm.. Ever since I saw u in X6, I've always known that you are different. Jujur, at first I cuma anggep u as one of the pretty girls that jago dance. Tapi, makin I perhatiin u, ternyata ur much more than that. You are hardworking, intelligent, and also cutee. I think I pernah ngomong ke u kalo I bakal suka seseorang not based on their look aja, but also based on their personality. Personally, for me, you are one of the most mature person Ive ever met. I know kadang u feel like u didn't handle me very well when I cerita, but I really do think u have always handled me very well. Thank you yaaa... I tau I kadang buat u bad mood or kesel or upset and i juga sering buat kita tengkar... I want to say sorry for everything yaaa.. Now, lets get to the main point of this text!! Hmm.. as you know, we have been talking for about 6 months now... I think its a very long time already and I also think its time to make things more serious. I just wanna say, I nyaman sama u. eww.. ummm.. rada geli" gimana gitu yak hehe.. Hmm yea.. I just want to say that I am very grateful to have u in my life, u have made my life much more colorful than it was.. Swipe up bott!!";

  return (
    <div
      className="relative h-screen w-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* SECTION 1 */}
      <section className="min-h-screen w-full flex flex-col justify-center snap-start px-6 py-24 text-center">
        <h1
          className="text-4xl sm:text-5xl text-rose-600"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          For My Special One 💕
        </h1>
        <p className="mt-6 text-rose-500 italic">Swipe Up Bott!!</p>
      </section>

      {/* SECTION 2 - LETTER */}
      <section className="min-h-screen w-full flex flex-col justify-center snap-start px-6 py-24">
        <div className="max-w-3xl mx-auto bg-white/95 p-8 rounded-3xl shadow-2xl">
          <h2
            className="text-3xl sm:text-4xl text-rose-500 mb-6 text-center"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            A Letter For You
          </h2>
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm sm:text-base">
            {confessionMessage}
          </p>
        </div>
      </section>

      {/* SECTION 3 - GALLERY */}
      <section className="min-h-screen w-full flex flex-col justify-center snap-start px-6 py-24">
        <div className="max-w-6xl mx-auto bg-white/95 p-8 rounded-3xl shadow-2xl">
          <h2
            className="text-3xl sm:text-4xl text-rose-500 mb-10 text-center"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our Beautiful Memories ✨
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[1,2,3,4,5,6,7,8].map((num) => (
              <div
                key={num}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={`/memories/${num}.jpg`}
                  alt={`memory-${num}`}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - QUESTION */}
      <section className="min-h-screen w-full flex flex-col justify-center snap-start px-6 py-24 text-center">
        <h2
          className="text-3xl sm:text-4xl text-rose-600 mb-8"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Will You Be My Girlfriend? 💖
        </h2>

        {!answer && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              animate={{
                boxShadow: [
                  "0 0 0px rgba(244,63,94,0.4)",
                  "0 0 25px rgba(244,63,94,0.8)",
                  "0 0 0px rgba(244,63,94,0.4)"
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleYesClick}
              className="w-48 text-lg py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl"
            >
              Yes 💖
            </motion.button>

            <motion.button
              animate={{ x: thinkPosition.x, y: thinkPosition.y }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleThinkClick}
              className="w-48 text-lg py-4 border border-rose-400 rounded-2xl"
            >
              Let Me Think 😳
            </motion.button>
          </div>
        )}

        {answer === "yes" && (
          <p className="mt-8 text-xl sm:text-2xl text-rose-600 font-semibold">
            You just made me the happiest person alive 🥹💞
          </p>
        )}

        {answer === "thinking" && (
          <p className="mt-8 text-lg italic text-gray-600">
            I'll Respect Your Decision, Makasii Yaa
          </p>
        )}
      </section>
    </div>
  );
}
