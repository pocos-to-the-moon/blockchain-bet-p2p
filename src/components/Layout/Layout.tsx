import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutProps } from "./Layout.types";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Layout({ children }: LayoutProps) {
  return (
    <main className={`${poppins.className} flex flex-col justify-between `}>
      <Header />

      <div className="min-h-[calc(100vh-8.75rem)] flex flex-col items-center justify-center">
        {children}
      </div>

      <Footer />
    </main>
  );
}

export default Layout;
