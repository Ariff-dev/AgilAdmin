import RootLayout from '@/app/layout'
import '../auth.css'
import { FormSingUp } from '@/components/auth/FormSingUp'
import Link from 'next/link'

function SingUp() {
  return (
    <RootLayout>
      <main className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4 py-4 w-full text-center'>
          <h1 className='title'>ÁgilAdmin</h1>
          <h2 className='subTitle'>Crear Cuenta</h2>
        </div>
        <FormSingUp />
        <div className='py-4'>
          <p className='text-color-pink text-sm lg:text-base'>
            ¿Ya tienes cuenta?
            <span>
              <Link href={'/singup'}> Iniciar Sesión</Link>
            </span>
          </p>
        </div>
      </main>
    </RootLayout>
  )
}

export default SingUp
