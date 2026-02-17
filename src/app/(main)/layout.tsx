import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </section>
  );
}
