

const Times = ({times}) => {
    console.log("helllllllll",times)
    return (
        <div>
            <h1 className=" bg-green-200 p-2 m-2 rounded-xl text-xl font-semibold md:text-2xl font-semibold text-center">Spent Time on Read: {times}</h1>
        </div>
    );
};

export default Times;