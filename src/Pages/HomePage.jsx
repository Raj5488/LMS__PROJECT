import HomeLayout from "../Layouts/HomeLayout";
import { Link } from 'react-router-dom';
// import { HomePageImages } from '../Assets/Images/homeimgaes.png';

function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh] ">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find Out Best
                        <span className="text-yellow-500 font-bold">
                                Online Courses
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses tought by highly skilled and qualified  faculties at a very affordable rate cost.
                    </p>
                    <div className="space-x-6">
                        <Link to='/Courses'>
                            <button className="bg-yellow-600 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-800 ">
                                Explore Courses
                            </button>
                        </Link>
                        <Link to='/Contact Us'>
                            <button className="bg-yellow-600 border-yellow-500px px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-800 ">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                        {/* <img src={HomePageImages} alt="home image" /> */}
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage;