import { BsThreeDots } from 'react-icons/bs'

const TableSwitch = () => {
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex items-center justify-between px-[24px] pt-[24px] '>
        <div className='flex items-center gap-4 text-[#ff971d] text-[16px]'>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent'>
            Active Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent'>
            Filled and Cancelled Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-4 border-transparent'>
            My Trades
          </div>
        </div>
        <div className='pb-7 cursor-pointer'>
          <BsThreeDots size={20} />
        </div>
      </div>
      <div className='line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
      <div>
        {/* <table className='mx-auto'>
          <tr className=''>
            <th className='font-medium text-[14px] py-2 px-4 '>TIME(+07)</th>
            <th className='font-medium text-[14px] py-2 px-4'>PRICE(BTC)</th>
            <th className='font-medium text-[14px] py-2 px-4'>TOTAL AMOUNT($)</th>
            <th className='font-medium text-[14px] py-2 px-4'>AVERAGE PRICE(BTC)</th>
            <th className='font-medium text-[14px] py-2 px-4'>TOTAL(BTC)</th>
          </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 1, 14:13:24</td>
            <td className='py-2 text-[14px]'>0.0292561 BTC</td>
            <td className='py-2 text-[14px]'>800.34 $</td>
            <td className='py-2 text-[14px]'>0.002447 BTC</td>
            <td className='py-2 text-[14px]'>0.0292561 BTC</td>
        </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 2, 10:45:12</td>
            <td className='py-2 text-[14px]'>0.0312345 BTC</td>
            <td className='py-2 text-[14px]'>900.12 $</td>
            <td className='py-2 text-[14px]'>0.003456 BTC</td>
            <td className='py-2 text-[14px]'>0.0312345 BTC</td>
        </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 3, 16:27:56</td>
            <td className='py-2 text-[14px]'>0.0278912 BTC</td>
            <td className='py-2 text-[14px]'>750.67 $</td>
            <td className='py-2 text-[14px]'>0.002345 BTC</td>
            <td className='py-2 text-[14px]'>0.0278912 BTC</td>
        </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 4, 09:15:34</td>
            <td className='py-2 text-[14px]'>0.0309876 BTC</td>
            <td className='py-2 text-[14px]'>850.45 $</td>
            <td className='py-2 text-[14px]'>0.003567 BTC</td>
            <td className='py-2 text-[14px]'>0.0309876 BTC</td>
        </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 5, 12:59:18</td>
            <td className='py-2 text-[14px]'>0.0287654 BTC</td>
            <td className='py-2 text-[14px]'>780.90 $</td>
            <td className='py-2 text-[14px]'>0.002678 BTC</td>
            <td className='py-2 text-[14px]'>0.0287654 BTC</td>
        </tr>
        <tr className='text-center'>
            <td className='py-2 text-[14px]'>May 6, 15:42:47</td>
            <td className='py-2 text-[14px]'>0.0321098 BTC</td>
            <td className='py-2 text-[14px]'>920.76 $</td>
            <td className='py-2 text-[14px]'>0.003789 BTC</td>
            <td className='py-2 text-[14px]'>0.0321098 BTC</td>
        </tr>
        </table> */}
      </div>
    </div>
  )
}

export default TableSwitch
