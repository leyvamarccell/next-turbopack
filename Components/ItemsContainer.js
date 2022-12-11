import React from 'react'

export default function ItemsContainer() {

    const coins = [
        {
            name: 'BTC',
            image: 'https://www.svgrepo.com/show/428654/bitcoin-btc-cryptocurrency-2.svg',
            id:1
        },
        {
            name: 'ETH',
            image: 'https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg',
            id:2
        },
        {
            name: 'LTC',
            image: 'https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg',
            id:3
        },
        {
            name: 'TRX',
            image: 'https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg',
            id:4
        },
        {
            name: 'USDT',
            image: 'https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg',
            id:5
        },
        {
            name: 'USDC',
            image: 'https://www.svgrepo.com/show/428649/usdc-usd-coin.svg',
            id:6
        },
        {
            name: 'XRP',
            image: 'https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg',
            id:7
        },
        {
            name: 'MON',
            image: 'https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg',
            id:8
        },
        {
            name: 'MON',
            image: 'https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg',
            id:9
        },
        {
            name: 'MON',
            image: 'https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg',
            id:10
        },
        {
            name: 'MON',
            image: 'https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg',
            id:11
        },
        {
            name: 'MON',
            image: 'https://www.svgrepo.com/show/428661/monero-crypto-cryptocurrency-coins.svg',
            id:12
        },
    ]

    return (
    <div className='grid grid-cols-3 py-6'>
        {
            coins.map(coin => {
                return(
                    <div key={coin.id} className='border cursor-pointer rounded-md flex mt-2 items-center border-gray-300 h-14 w-28 '>
                        <img src={coin.image} alt={coin.name} className='my-1  w-12 h-12 mx-1'></img>
                        <p className='ml-1'>{coin.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
