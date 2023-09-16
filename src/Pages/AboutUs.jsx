import HomeLayout from "../Layouts/HomeLayout";
import aboutImage from '../Assets/Images/girl.png';
import apj from '../Assets/Images/apj.jpg'
import bill from '../Assets/Images/bill.png'
import ein from '../Assets/Images/ein.png'
import mandela from '../Assets/Images/mandela.png'
function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality education</h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to privide the afoordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mandkind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img className="drop-shadow-2xl"
                        id="test1"
                        style={{
                            filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                        }}
                        alt = "about main image"
                        src={aboutImage}
                        />
                    </div>
                </div>

            

                <div className="carousel w-1/2 my-16 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className=" w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"Failure will never overtake me if my determination to succeed is strong enough. All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents."}
                            </p>
                            <h1 className="text-2xl font-semibold">A.P.J Abdul Kalam</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={bill} className=" rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"It's fine to celebrate success, but it is more important to heed the lessons of failure.” It's easy to get caught up in the excitement of success, but success on its own has very little to teach you"}
                            </p>
                            <h1 className="text-2xl font-semibold">Bill Gates</h1>
                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={ein} className=" rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."}
                            </p>
                            <h1 className="text-2xl font-semibold">Albert Einstein</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={mandela} className=" rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"Do not judge me by my successes, judge me by how many times I fell down and got back up again."}
                            </p>
                            <h1 className="text-2xl font-semibold">Nelson Mandela</h1>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    </div>





            </div>
        </HomeLayout>
    )
}
export default AboutUs;