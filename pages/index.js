import Head from 'next/head'
import Link from '../components/Link'
import linkData from '../links.json'

export default function Home() {
  console.log(linkData)
  return (
    <div className="relative flex flex-col w-screen min-h-screen overflow-x-hidden bg-indigo-200 md:justify-center md:items-center">
      <Head>
        <title>Connect whit Sahinur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='!mt-5'>
        <img 
          src="https://i.ibb.co/BTh9gJ5/sahinur-dev.jpg" 
          alt="Sahinur Islam" 
          className='w-[190px] rounded-full mx-auto'
        />
        <h2 className='my-3 text-3xl font-bold text-center text-indigo-900 md:text-4xl'>
          Sahinur Islam
        </h2>
      </div>
      <div className='w-full max-w-lg p-6'>
        {linkData.map(({id, name, image, link}) => (
          <Link
              key={id}
              name={name}
              image={image}
              link={link}
           />
        ))}
      </div>
    </div>
  )
}
