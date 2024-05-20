
const Disasters=[
    {
        title:"EARTHQUAKES",
        img:"/images/earthquake.png"
    },
    {
        title:"LANDSLIDES",
        img:"/images/landslide.png"
    },
    {
        title:"FLOODS",
        img:"/images/flood.png"
    },
    {
        title:"TSUNAMIS",
        img:"/images/tsunami.png"
    },
    {
        title:"LIGHTNING",
        img:"/images/lightning.png"
    },
    {
        title:"TORNADOES",
        img:"/images/tornado.png"
    },
    {
        title:"WILDFIRES",
        img:"/images/wildfire.png"
    },
    {
        title:"HURRICANES",
        img:"/images/hurricane.png"
    },
    {
        title:"EXTREME HEAT",
        img:"/images/heat.png"
    },
]
const SafetyInfo = ()=>{
    return(
        <>
        <h1 className=" font-mono text-6xl pt-10">SAFETY INFORMATION</h1>
        <div className=" grid grid-cols-3 gap-8 py-10">
        {Disasters.map((item,index)=>{
            return(
                <div className="flex flex-col gap-2 justify-center items-center bg-indigo-950 text-white font-mono text-4xl px-8 py-5 cursor-pointer">
                <img src={item.img} className=" w-36" alt="disaster"/>
                <p>{item.title}</p>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default SafetyInfo;