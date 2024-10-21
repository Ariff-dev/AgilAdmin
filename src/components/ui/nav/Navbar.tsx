import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiOutlineTable } from 'react-icons/ai'

function Navbar() {
  return (
    <nav className='bg-component-color-bg-nav w-full h-screen flex flex-col lg:w-[25%]'>
      <div className='m-4 flex flex-col gap-4'>
        <div className=' flex items-center w-full justify-between'>
          <h2 className='text-2xl font-bold'>ÁgilAdmin</h2>
          <AiOutlineMenu className='text-xl hidden' />
          <AiOutlineClose className='text-xl' />
        </div>
        <div>
          <button className=' bg-component-color-bg-button p-4 rounded-md w-full font-bold'>
            Iniciar Sesión
          </button>
        </div>
        <div>
          <Link href='/' className='flex  items-center font-semibold'>
            <AiOutlineTable size={24} />
            <span>Mi Tablero</span>
          </Link>
        </div>
      </div>
      <div>a</div>
    </nav>
  )
}

export default Navbar
