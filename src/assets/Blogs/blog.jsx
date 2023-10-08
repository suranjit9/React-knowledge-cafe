

const Blog = ({ blog,handlerBook,handlerTime }) => {
    // console.log(blog);
    const { title, img, authorimg, authorname, postiongdate, time } = blog;
    return (
        <div className="space-y-2 md:space-y-3 mb-5">
            <img className="w-full rounded-lg" src={img} alt="" />

            <div className="flex justify-between mx-auto">
                <div className="flex">
                    <img className="w-14" src={authorimg} alt="" />
                    <div className="pl-2 ">
                        <h2 className="font-semibold text-xl">{authorname}</h2>
                        <p className="text-base">{postiongdate}</p>
                    </div>
                </div>
                <div className="flex">
                    <h2>{time} Munits </h2>
                    <img onClick={()=>handlerBook(blog)} className="w-5" src="/src/images/bookmark.png" alt="" />
                </div>
            </div>
            <div>
            <h1 className="text-2xl font-semibold md:text-4xl font-semibold">{title}</h1>
            <p>#NewesBangla #blogenew</p>
            </div>
            <div className="text-end active:text-Black-700"><button onClick={()=>handlerTime(time)} className="text-orange-700 underline underline-offset-4">Red More</button></div>
            
            
        </div>
    );
};

export default Blog;