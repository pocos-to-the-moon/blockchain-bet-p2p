import Link from "next/link";

function Logo() {
  return (
    <Link
      className="flex items-center space-x-1"
      href="/"
      aria-label="Ir para a página inicial da BetChain"
    >
      <span className="text-3xl text-white font-poppins font-extrabold">
        Bet
      </span>
      <span className="text-3xl text-gray-300 font-poppins font-bold">
        Chain
      </span>
    </Link>
  );
}

export default Logo;
