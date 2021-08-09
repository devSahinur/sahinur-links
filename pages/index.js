import Head from 'next/head'
import Link from '../components/Link'
import linkData from '../links.json'

export default function Home() {
  console.log(linkData)
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
        <h2 className='my-3 text-3xl font-bold text-center text-indigo-900 md:text-4xl'>
          Sahinur Islam
        </h2>
      </div>
      <div>
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
