import { ethers } from "ethers";

const connectWallet = async () => {
  // Verifica se MetaMask está instalado
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log("Endereço do usuário:", address);
    } catch (error) {
      console.error("Erro ao conectar a carteira:", error);
    }
  } else {
    console.error("MetaMask não está instalado");
  }
};

const WalletComponent = () => {
  return (
    <div>
      <button onClick={connectWallet}>Conectar MetaMask</button>
    </div>
  );
};

export default WalletComponent;
