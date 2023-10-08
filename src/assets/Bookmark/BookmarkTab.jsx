
import TotalTime from "./TotalTime";


const BookmarkTab = ({bookmark}) => {
    
    
    return (
        <div>
            <h1>Bookmarked Blogs: {bookmark.length} </h1>
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