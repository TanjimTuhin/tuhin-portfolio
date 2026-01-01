import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//Components
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import AppShell from "@/components/AppShell";

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
