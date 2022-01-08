import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import CollectibleService from '../../services/CollectibleService';

export default class NFTContract {
	private provider: JsonRpcProvider;
	private contract: Contract;

	constructor(contractAddress: string, providerURL: string) {
		this.provider = new JsonRpcProvider(providerURL);
		this.contract = new Contract(contractAddress, this.abi, this.provider);

		this.onMint = this.onMint.bind(this);
		this.contract.on(this.filter, this.onMint);
	}

	async onMint(from: any, to: any, amount: any, event: any) {
		try {
			const tokenId = event.args.tokenId.toNumber();
			const tokenURI = await this.contract.tokenURI(tokenId);

			await CollectibleService.updateTokenId(tokenURI, tokenId);
		} catch {}
	}

	get filter() {
		return this.contract.filters.Transfer(
			'0x0000000000000000000000000000000000000000',
			null,
			null
		);
	}

	get abi(): string[] {
		return [
			'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
			'function tokenURI(uint256 tokenId) public view returns (string memory)',
		];
	}
}
