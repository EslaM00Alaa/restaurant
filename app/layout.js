import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["400", "700"],
});

export const metadata = {
  title: "EL Resturant",
  description: "منيو كافيه ",
  keywords: ["كافيه", "قهوة", "منيو"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
