import "./globals.css";

export const metadata = {
  title: "Pulse Tweaks",
  description: "Premium PC Optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
