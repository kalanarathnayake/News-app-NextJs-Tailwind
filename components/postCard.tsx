import Image from "next/image";
import Link from "next/link";
import recentnewsimage from "../public/recentpost.jpg";
import logo from "../public/logo.png";
import moment from 'moment';



const PostCard = () => {
    return (
        <div className="grid col-span-2 p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
            <div className="relative mb-6 overflow-hidden shadow-md pb-80">
            <Image className="absolute object-cover object-top w-full rounded-t shadow-lg h-80 lg:roun" src={recentnewsimage} alt={''}/>
            </div>
            <h1 className="mb-8 text-3xl font-semibold text-center transition duration-100 cursor-pointer hover:text-pink-600">
            <Link className="" key={''} href={''} >
                        <span className="">Title Of the News</span>
            </Link>
            </h1>
            <div className="items-center justify-center block w-full mb-1 text-center lg:flex ">
            <Image className="align-middle rounded-full h=[60px] w-[60px]" src={logo} alt={''}/>
            <p className="inline ml-2 text-lg font-medium text-gray-700 align-middle">Auther Name</p>
            </div>
            <div className="items-center justify-center block w-full mb-1 font-medium text-center text-gray-700 lg:flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="align-middle">Date</span>
            </div>
            <p className="px-4 mb-8 text-lg font-normal text-center text-gray-700 lg:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reiciendis eaque quae cum quis dolorum voluptate necessitatibus sunt minus ducimus! Possimus, similique voluptatibus nulla natus beatae fugiat repudiandae modi dignissimos?
            </p>
        </div>
    );
}

export default PostCard;