import React from 'react';
import useMetaMask from '../hooks/useMetaMask';

const MetaMaskComponent = () => {
  const { account }:any = useMetaMask();

  return (
    <div>
      {!!account ? (
        <div className='bg-gray-800 text-white font-sans'>
          <h1 className="text-2xl text-gray-300 font-semibold">Conectar</h1>
          <p>Conectado à conta: {account}</p>
        </div>
      ) : (
        <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
          Conectar MetaMask
        </button>
      )}
    </div>
  );
};

export default MetaMaskComponent;
