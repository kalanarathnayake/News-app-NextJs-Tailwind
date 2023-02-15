import Image from "next/image";
import Link from "next/link";
import recentnewsimage from "../public/recentpost.jpg";

const recentNews = [
    { topic: "first News topic",date:"Oct/20/2021", slug: "react" },
];

const Sidewidget = () => {
    return (
    <div className="col-span-1 p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
        <h3 className="text-xl font-semibold border-b h-7">Recent Posts</h3>
        <div className="overflow-auto scroll-smooth">
            <div className="flex items-center w-full mt-4 mb-4">
                <div className="flex-none w-16">
                    <Image className="h-[60px] w-[60px] align-middle rounded-full" src={recentnewsimage} alt={''}/>
                </div>
                <div className="flex-grow ml-4">
                    {recentNews.map((recentNews)=>(
                        <Link className="" key={recentNews.slug} href={`recentNews/${recentNews.slug}`} > 
                            <span className="text-lg">{recentNews.topic}</span><br />
                            <span className="text-xs">{recentNews.date}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center w-full mt-4 mb-4">
                <div className="flex-none w-16">
                    <Image className="h-[60px] w-[60px] align-middle rounded-full" src={recentnewsimage} alt={''}/>
                </div>
                <div className="flex-grow ml-4">
                    {recentNews.map((recentNews)=>(
                        <Link className="" key={recentNews.slug} href={`recentNews/${recentNews.slug}`} > 
                            <span className="text-lg">{recentNews.topic}</span><br />
                            <span className="text-xs">{recentNews.date}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center w-full mt-4 mb-4">
                <div className="flex-none w-16">
                    <Image className="h-[60px] w-[60px] align-middle rounded-full" src={recentnewsimage} alt={''}/>
                </div>
                <div className="flex-grow ml-4">
                    {recentNews.map((recentNews)=>(
                        <Link className="" key={recentNews.slug} href={`recentNews/${recentNews.slug}`} > 
                            <span className="text-lg">{recentNews.topic}</span><br />
                            <span className="text-xs">{recentNews.date}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center w-full mt-4 mb-4 ">
                <div className="flex-none w-16">
                    <Image className="h-[60px] w-[60px] align-middle rounded-full" src={recentnewsimage} alt={''}/>
                </div>
                <div className="flex-grow ml-4">
                    {recentNews.map((recentNews)=>(
                        <Link className="" key={recentNews.slug} href={`recentNews/${recentNews.slug}`} > 
                            <span className="text-lg">{recentNews.topic}</span><br />
                            <span className="text-xs">{recentNews.date}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};


export default Sidewidget;
