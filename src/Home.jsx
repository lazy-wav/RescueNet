import { FaPython } from "react-icons/fa6";
import { ReactComponent as CLang} from './assets/icons8-c-programming.svg';

const Home = ()=>{
    return(
        <>
        <div className="text-black w-full pb-10">
          <img className="w-full h-96 " src="/images/homeBanner.png" alt="banner"/>
          <div className=" text-start flex flex-col gap-8 px-8 py-8">
            <h1 className=" text-5xl font-[900]">Our Core Services</h1>
            <div className=" flex flex-col gap-3">
            <div>
              <h2 className=" text-3xl font-[900]">Swift Response</h2>
              <p>Rapid deployment to disaster-stricken locations worldwide.</p>
            </div>
            <div>
              <h2 className=" text-3xl font-[900]">Expert Planning</h2>
              <p>Implementing well-researched strategies to maximize effectiveness.</p>
            </div>
            <div>
              <h2 className=" text-3xl font-[900]">On-Site Support</h2>
              <p>Providing essential resources and relief to those in need.</p>
            </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Home;