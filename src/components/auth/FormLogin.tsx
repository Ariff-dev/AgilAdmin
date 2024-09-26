export const FormLogin = () => {
  return (
    <form
      action=''
      className='flex flex-col gap-4 w-[80%] py-4 md:w-[60] lg:w-[40%] lg:gap-6'
    >
      <input
        id='email'
        name='email'
        placeholder='Email'
        className='form-input'
      />
      <input
        id='password'
        name='password'
        placeholder='Contraseña'
        className='form-input'
      />
      <button type='submit' className='button-form'>
        <p>Iniciar Sesión</p>
      </button>
    </form>
  )
}
