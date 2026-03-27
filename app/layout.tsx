import "./globals.css";
export const metadata = {
  title: "Harsha Portfolio",
  description: "Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
