import TableSwitch from '../../components/Table/TableSwitch'
import Account from '../../components/account/Account'
import Footer from '../../components/footer/Footer'
import Graph from '../../components/graph/Graph'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Transaction from '../../components/transaction/Transaction'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='container h-screen'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main bg-[#0c0c0c0;]'>
        <Navbar />
        <div className=' w-100% grid grid-cols-6 grid-rows-5 gap-[32px]'>
          <div className='col-span-4 row-span-3  mt-[32px] ml-[32px]'>
            <Graph />
          </div>
          <div className='col-span-2 row-span-4 mt-[32px] mr-[32px]'>
            <Transaction />
          </div>
          <div className='col-span-4 row-span-2 bg-black  ml-[32px]'>
            <TableSwitch />
          </div>
          <div className='col-span-2 row-span-1 mr-[32px]'>
            <Account />
          </div>
        </div>
        <div className='col-span-5 bg-black mt-2'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
