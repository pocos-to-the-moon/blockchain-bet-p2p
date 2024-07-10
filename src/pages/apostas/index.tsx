import React from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import MetaMaskComponent from '@/components/MetaMaskComponent';

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
      <div className="max-w-md mx-auto bg-gray-900 p-4 rounded-lg w-full bg-gray-800 text-white font-sans">
        
        <div className="flex justify-center items-center mb-4">
          <MetaMaskComponent></MetaMaskComponent>
        </div>
        
        <div className="max-w-md mx-auto bg-gray-900 p-4 rounded-lg">
          <h1 className="text-2xl text-gray-300 font-semibold">Apostas</h1>
          <div className="flex justify-between items-center">
            <span className="text-xs">10/07 • 16:00</span>
            <span className="text-xs text-green-500"></span>
          </div>
          <div className="text-lg font-bold mt-2">
            Euro 2024 • Europa
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex-1 text-center" onClick={() => handleBet('team1')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Time 1</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.team1}</div>
            </div>
            <div className="flex-1 text-center mx-1" onClick={() => handleBet('draw')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Empate</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.draw}</div>
            </div>
            <div className="flex-1 text-center" onClick={() => handleBet('team2')}>
              <div className="bg-gray-700 py-2 rounded-t-lg">Time 2</div>
              <div className="bg-gray-800 py-2 rounded-b-lg text-yellow-400">{odds.team2}</div>
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
  return {
    team1: 3.23,
    draw: 2.84,
    team2: 2.79,
  };
}
