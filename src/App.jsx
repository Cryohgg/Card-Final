import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [thinkClicks, setThinkClicks] = useState(0);
  const [thinkPosition, setThinkPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setAnswer("yes");
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

Halo bott!!! Hmm.. harusnya sekarang jumat malem, bener gaa?? First of all, I MAU NGOMONG INI GA GPTT!! and I juga mau minta maaf karena I ga bisa sampein ini ke u in person karena as you may know, I engga terlalu jago ngomong.. and I tau I bakal gugup kalo ngomong ini ke u. Tapi the main reason is I mau u pikirin ini dulu baik - baik. I tau we have our differences and I gamau put pressure on u by saying this in person. Hmm.. Ever since I saw u in X6, I've always known that you are different. Jujur, at first I cuma anggep u as one of the pretty girls that jago dance. Tapi, makin I perhatiin u, ternyata ur much more than that. You are hardworking, intelligent, and also cutee. I think I pernah ngomong ke u kalo I bakal suka seseorang not based on their look aja, but also based on their personality. Personally, for me, you are one of the most mature person Ive ever met. I know kadang u feel like u didn't handle me very well when I cerita, but I really do think u have always handled me very well. Thank you yaaa... I tau I kadang buat u bad mood or kesel or upset and i juga sering buat kita tengkar... I want to say sorry for everything yaaa.. Now, lets get to the main point of this text!! Hmm.. as you know, we have been talking for about 6 months now... I think its a very long time already and I also think its time to make things more serious. I just wanna say, I nyaman sama u. eww.. ummm.. rada geli" gimana gitu yak hehe.. Hmm yea.. I just want to say that I am very grateful to have u in my life, u have made my life much more colorful than it was.. Swipe up bott!!, oh iya, dont forget to build the lego bott!!`;

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100">

      {/* SECTION 1 */}
      <section className="min-h-screen flex items-center justify-center snap-start px-6">
        <div className="text-center">
          <h1 className="text-4xl text-rose-600 mb-6 font-serif">
            For My Special One 💖
          </h1>
          <p className="text-rose-400 italic">Swipe Up Bott!!</p>
        </div>
      </section>
