

const Blog = ({blog}) => {
    console.log(blog);
    const {title, img,authorimg,authorname,postiongdate}=blog;
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <img src={authorimg} alt="" />
                <h2>{authorname}</h2>
                <p>{postiongdate}</p>
            </div>
        </div>
    );
};

export default Blog;