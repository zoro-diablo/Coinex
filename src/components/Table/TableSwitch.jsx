import { BsThreeDots } from 'react-icons/bs'

const TableSwitch = () => {
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex items-center justify-between px-[24px] pt-[24px] '>
        <div className='flex items-center gap-4 text-[#ff971d] text-[16px]'>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer'>
            Active Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer'>
            Filled and Cancelled Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent cursor-pointer'>
            My Trades
          </div>
        </div>
        <div className='pb-7 cursor-pointer'>
          <BsThreeDots size={20} />
        </div>
      </div>
      <div className='line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
      <div>
        <table className='mx-auto my-4'>
          <tr className='bg-[#19191a]'>
            <th className='font-medium text-[13px] py-4 px-7 '>BITCOIN</th>
            <th className='font-medium text-[13px] py-4 px-7'>PRICE(BTC)</th>
            <th className='font-medium text-[13px] py-4 px-7'>
              TOTAL AMOUNT($)
            </th>
            <th className='font-medium text-[13px] py-4 px-7'>
              AVERAGE PRICE(BTC)
            </th>
            <th className='font-medium text-[13px] py-4 px-7'>TOTAL(BTC)</th>
          </tr>
          <tr className='text-center pr-2'>
            <td className='py-[12px]  text-[14px] border-b border-[#d6d0d01d]'>Bitcoin BTC</td>
            <td className='py-[12px]  text-[14px] border-b border-[#d6d0d01d]'>0.29561 BTC</td>
            <td className='py-[12px]  text-[14px] border-b border-[#d6d0d01d]'>800.34 $</td>
            <td className='py-[12px]  text-[14px] border-b border-[#d6d0d01d]'>0.02447 BTC</td>
            <td className='py-[12px]  text-[14px] border-b border-[#d6d0d01d]'>0.029256 BTC</td>
          </tr>
          <tr className='text-center'>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>Ethereum ETH</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.032345 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>900.12 $</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.03456 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.032345 BTC</td>
          </tr>
          <tr className='text-center'>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>Monero XMR</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.027812 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>750.67 $</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.02345 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.028912 BTC</td>
          </tr>
          <tr className='text-center'>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>Litecoin LTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.03876 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>850.45 $</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.03567 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.03876 BTC</td>
          </tr>
          <tr className='text-center'>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>Solana</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.027654 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>780.90 $</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.02678 BTC</td>
            <td className='py-[12px] text-[14px] border-b border-[#d6d0d01d]'>0.027654 BTC</td>
          </tr>
          <tr className='text-center'>
            <td className='py-[12px] text-[14px]'>USD Coin</td>
            <td className='py-[12px] text-[14px]'>0.031098 BTC</td>
            <td className='py-[12px] text-[14px]'>920.76 $</td>
            <td className='py-[12px] text-[14px]'>0.03789 BTC</td>
            <td className='py-[12px] text-[14px]'>0.0321098 BTC</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TableSwitch
