import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizMaker AI — Generate Quizzes from Any Content",
  description: "Convert blog posts, PDFs, or videos into interactive quizzes automatically with AI. Perfect for teachers, course creators, and corporate trainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b75ba9e8-40ff-4838-9593-da9d27fb26af"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
