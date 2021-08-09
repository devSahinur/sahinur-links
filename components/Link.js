function Link({name, image, link}) {
    return (
        <div className='flex items-center w-full max-w-md cursor-pointer p-3 my-3 mx-auto rounded-md r-2 ring-[2px] ring-indigo-400 text-gray-700 backdrop-filter backdrop-blur-2xl bg-white'>
            {image && <img src={image} className='h-10 w-10' alt={name} />}
            <h2 className='text-xl font-semibold ml-3 md:ml-6'>{name}</h2>
        </div>
    )
}

export default Link
