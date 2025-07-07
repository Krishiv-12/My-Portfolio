"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () =>
      setShow(window.scrollY > 300);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-white text-pink-500 p-3 rounded-full shadow-md hover:bg-pink-200 transition"
    >
      <FaArrowUp />
    </button>
  ) : null;
}
