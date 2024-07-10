import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";

function Betting({ odds }:any) {
  const handleBet = (team:any) => {
    axios.post('/api/place-bet', { team })
      .then((response) => {
        console.log("Bet placed successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error placing the bet:", error);
      });
  };

  return (
    <Layout>
      <div className="bg-gray-800 text-white font-sans">
        <h1 className="text-2xl text-gray-300 font-semibold">Apostas</h1>
        <div className="max-w-md mx-auto bg-gray-900 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xs">10/07 • 16:00</span>
            <span className="text-xs text-green-500">AO VIVO</span>
          </div>
          <div className="text-lg font-bold mt-2">
            Euro 2024 • Europa
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex-1 text-center" onClick={() => handleBet('Holanda')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Holanda</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.Holanda}</div>
            </div>
            <div className="flex-1 text-center mx-1" onClick={() => handleBet('Empate')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Empate</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.Empate}</div>
            </div>
            <div className="flex-1 text-center" onClick={() => handleBet('Inglaterra')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Inglaterra</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.Inglaterra}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const odds = await fetchOdds(); // Sua lógica para buscar odds aqui
  return {
    props: {
      odds,
    },
  };
}

export default Betting;

async function fetchOdds() {
  // Sua lógica para buscar odds aqui
  return {
    Holanda: 3.23,
    Empate: 2.84,
    Inglaterra: 2.79,
  };
}
