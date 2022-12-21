
const Blur = () => {
  return (
    <span className='w-6 h-72 absolute -top-10 md:right-96 right-0'>
        <span className='bg-sky-600 blur-2xl w-full h-full absolute md:right-64 right-96 -top-24 rounded-bl-3xl -rotate-45'></span>
        <span className='bg-sky-500 blur-2xl w-full h-full absolute md:right-44 right-32 -top-20 rounded-bl-3xl -rotate-45'></span>
        <span className='bg-sky-500 blur-2xl w-full h-full absolute md:left-0 hidden md:block -top-20 rounded-bl-3xl -rotate-45'></span>
        <span className='bg-sky-500 blur-2xl w-full h-full absolute md:left-10 hidden md:block -top-20 rounded-bl-3xl -rotate-45'></span>
        <span className='bg-sky-500 blur-2xl w-full h-full absolute md:left-64 hidden md:block -top-20 rounded-bl-3xl -rotate-45'></span>
    </span>
  )
}

export default Blur