import { Alchemy, Network } from 'alchemy-sdk';
import { Chain } from 'wagmi';

const alchemy = (network: Chain) => {
  let filteredNetwork: Network = Network.ETH_MAINNET;

  switch (network?.id) {
    case 1:
      filteredNetwork = Network.ETH_MAINNET;
      break;
    case 5:
      filteredNetwork = Network.ETH_GOERLI;
      break;
    case 137:
      filteredNetwork = Network.MATIC_MAINNET;
      break;
    case 80001:
      filteredNetwork = Network.MATIC_MUMBAI;
      break;
    default:
      filteredNetwork = Network.ETH_MAINNET;
      break;
  }

  return new Alchemy({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: filteredNetwork,
  });
};

export default alchemy;
