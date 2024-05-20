const OrgRegister = ()=>{
    return(
        <div className="w-full p-10 flex flex-col justify-center items-center gap-10">
            <div className="w-full">
                <h1 className=" text-[#2041B0] italic font-[800] text-5xl">Create Account </h1>
                <p className=" text-[#998D8D] text-2xl font-[400]">Join our community and share our mission </p>
            </div>
            <div className="grid grid-cols-2 gap-10 items-center px-20 justify-center text-center">
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="name" placeholder="Agency Name" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="email" placeholder="Email" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="number" placeholder="Contact" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="text" placeholder="Location" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="text" placeholder="Proof of Identification" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="text" placeholder="Area of expertise" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="text" placeholder="Resources Available" />
                <input className="text-white bg-sky-200 px-10 rounded-lg w-80 py-4" type="number" placeholder="Quantity" />
            </div>
            <div className=" flex justify-center w-full px-20">
                <button className="text-2xl text-center bg-[#42658F] text-white px-8 py-2 rounded-2xl">Register</button>
            </div>
        </div>
    )
}
export default OrgRegister;