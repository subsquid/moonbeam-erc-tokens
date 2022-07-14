export function getTokenId(address: string) {
  return `${address.substring(0, 6)}-${address.substring(
    address.length - 6,
    address.length
  )}`;
}

export function getNftId(address: string, tokenId: string) {
  return `${getTokenId(address)}-${tokenId}`;
}
