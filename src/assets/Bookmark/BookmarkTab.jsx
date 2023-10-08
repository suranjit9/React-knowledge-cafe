
import TotalTime from "./TotalTime";


const BookmarkTab = ({bookmark}) => {
    
    
    
    return (
        <div>
            
            <h1 className="bg-slate-200 p-4 m-2 rounded-xl text-center font-semibold text-3xl">Bookmarked Blogs: {bookmark.length} </h1>
           <div>
           {
            bookmark.map(bookmark => <TotalTime 
                key={bookmark.id}
                bookmark={bookmark}
            ></TotalTime>)
           }
           </div>
            
        </div>
    );
};

export default BookmarkTab;