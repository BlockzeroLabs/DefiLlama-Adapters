const sdk = require('@defillama/sdk')
const { getUniTVL } = require('../helper/unknownTokens.js')

const TRON_FACTORY_V2 = 'TPvaMEL5oY2gWsJv7MDjNQh2dohwvwwVwx'
const TRON_FACTORY_V1 = 'TJL9Tj2rf5WPUkaYMzbvWErn6M8wYRiHG7'
const factories = {
  bsc: "0xFa51B0746eb96deBC619Fd2EA88d5D8B43BD8230",
  bittorrent: "0x5f4f1a36b7c141a12817580bc35277955c0afd78",
}

function chainTvl(chain) {
  module.exports[chain] = {
    tvl: getUniTVL({ factory: factories[chain], useDefaultCoreAssets: true, })
  }
}

module.exports = {
  timetravel: false,
  misrepresentedTokens: true
}

Object.keys(factories).map(chainTvl)

module.exports.tron = {
  tvl: sdk.util.sumChainTvls([
    getUniTVL({ factory: TRON_FACTORY_V1, useDefaultCoreAssets: true, }),
    getUniTVL({ factory: TRON_FACTORY_V2, useDefaultCoreAssets: true, }),
  ])
}