import Graph from "../../components/graph/Graph"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./portfolio.scss"


const Portfolio = () => {
  return (
    <div className='container h-screen'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main bg-[#0c0c0c0;]'>
        <Navbar />
        <div className=' w-100% grid grid-cols-5 gap-[32px]'>
          <div className='col-span-3  mt-[32px] ml-[32px]'><Graph /></div>
          <div className='col-span-2 bg-black mt-[32px] mr-[32px]'>2</div>
          <div className='col-span-2 bg-black  ml-[32px]'>3</div>
          <div className='col-span-2 bg-black  mr-[32px]'>4</div>
          <div className='col-span-5 bg-black  '>5</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio