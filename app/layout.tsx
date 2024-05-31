import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>
       {/* When you use inter.className, it provides a class name string that Next.js automatically generates and associates with the Inter font.
This class ensures that the Inter font is applied correctly to any elements that use this class. */}

{/* How next/font Works:
Automatic Class Generation: The Inter function from next/font/google returns an object containing metadata about the font, including a className property. This property is a string representing a CSS class that Next.js generates. This class includes the necessary @font-face declarations and ensures the font is correctly loaded and applied. */}

        {children}</body>
    </html>
  );
}
