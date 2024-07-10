// frontend/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-4 text-gray-300">
      <Link href="/apostas">Apostas</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  );
}
