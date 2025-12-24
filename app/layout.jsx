import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100","200", "300", "400", "500", "600","700", "800"],
});

export const metadata = {
  title: "Tuhin Portfolio - Robotics Engineer & Cybersecurity Researcher",
  description: "Portfolio of Md. Tanjim Mahmud Tuhin - Robotics Engineer, Cybersecurity Researcher, Network Enthusiast, and Game Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={jetbrainsMono.variable}>
        <BackgroundEffects />
        <CustomCursor />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
