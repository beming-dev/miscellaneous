import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "password generator",
  description: "Create your own strong password!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
