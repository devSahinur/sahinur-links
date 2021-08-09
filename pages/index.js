import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Connect whit Sahinur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <img 
          src="https://avatars.githubusercontent.com/u/68515168?v=4" 
          alt="Sahinur Islam" 
          className='w-[220px] rounded-full mx-auto'
        />
      </div>
      
    </div>
  )
}
