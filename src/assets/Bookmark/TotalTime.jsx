

const TotalTime = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-200 p-2 m-2 rounded-xl">
            <h1 className="md:text-2xl">{title}</h1>
        </div>
    );
};

export default TotalTime;