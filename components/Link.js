function Link({name, image, link}) {
    return (
        <a
            className='flex items-center w-full max-w-md cursor-pointer p-3 my-3 mx-auto rounded-md scale-95 r-2 ring-[2px] ring-indigo-400 text-gray-700 backdrop-filter backdrop-blur-2xl bg-white transition duration-200 ease-in-out hover:text-white hover:bg-indigo-300 transform hover:-translate-x-1 hover:scale-90 hover:shadow-xl active:scale-90 '
            target='_blank'
            href={link}
            >
            {image && <img src={image} className='h-10 w-10' alt={name} />}
            <h2 className='text-xl font-semibold ml-3 md:ml-6'>{name}</h2>
            
        </a>
    )
}

export default Link
