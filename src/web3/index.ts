import NFTContract from "./NFTContract";

export default class Web3Root {
  public nft: NFTContract;

  constructor() {
    this.nft = new NFTContract(
      process.env.NFT_CONTRACT_ADDRESS as string,
      process.env.RPC_URL_GANACHE as string
    );
  }
}
