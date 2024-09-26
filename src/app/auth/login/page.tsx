'use client'

import RootLayout from '@/app/layout'
import '../auth.css'
import Link from 'next/link'
import { FormLogin } from '@/components/auth/FormLogin'

function Login() {
  return (
    <RootLayout>
      <main className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4 py-4 w-full text-center'>
          <h1 className='title'>ÁgilAdmin</h1>
          <h2 className='subTitle'>Iniciar Sesión</h2>
        </div>
        <FormLogin />
        <div className='py-4'>
          <p className='text-color-pink text-sm lg:text-base'>
            ¿Aún no tienes cuenta?
            <span>
              <Link href={'/singup'}> Crear Cuenta</Link>
            </span>
          </p>
        </div>
      </main>
    </RootLayout>
  )
}

export default Login
