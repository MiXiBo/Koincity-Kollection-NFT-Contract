import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = ""
  export const SYMBOL: string = "";
  export const MINT_PRICE: u64 = ;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = <int>; // number of NFTs to be minted
  export const START_TIME: u64 = <int>; // Unix UTC time in milliseconds
  export const URI: string = "";
  export const OWNER: Uint8Array = Base58.decode(""); // NFT creator

  // token mint
  //export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju"); // testnet
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL"); // mainnet
  export const ADDRESS_PAY: Uint8Array = Base58.decode(""); // mint fees receiver
}
