import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});
const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});





export const metadata = {
  title: "Abhinav - Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience building scalable, production-ready MERN applications. Skilled in React, Node.js, MongoDB, Redis, AWS, Docker, CI/CD, and real-time systems.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
