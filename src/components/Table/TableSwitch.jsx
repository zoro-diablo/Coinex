import { BsThreeDots } from 'react-icons/bs'

const TableSwitch = () => {
  return (
    <div className='bg-[#202022] rounded-md'>
      <div className='flex items-center justify-between px-[24px] pt-[24px] '>
        <div className='flex items-center gap-4 text-[#ff971d] text-[14px]'>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-6 border-transparent'>
            Active Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-6 border-transparent'>
            Filled and Cancelled Orders
          </div>
          <div className='border-b-[3px] hover:border-[#ff971d] pb-6 border-transparent'>
            My Trades
          </div>
        </div>
        <div className='pb-7 cursor-pointer'>
          <BsThreeDots size={20} />
        </div>
      </div>
      <div className='line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
      <div></div>
    </div>
  )
}

export default TableSwitch
