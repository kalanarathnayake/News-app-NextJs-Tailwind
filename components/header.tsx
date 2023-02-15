import Link from "next/link";

const categories = [
    { name: "React", slug: "react" },
    { name: "Web Delopment", slug: "web-dev" },
];

const Header = () => {
    return (
    <div className="grid col-span-3 mb-8 ">
        <div className="inline-block w-full py-8 border-b border-blue-400">
            <div className="block p-2 md:float-left">
                <Link href="/">
                <span className="text-4xl font-bold cursor-pointer">Daily News</span>
                </Link>
            </div>
            <div className="float-right gap-4 font-bold">
                    <Link href={``}>
                        <div className="p-2 mx-5 text-lg text-white transition duration-500 transform bg-red-500 rounded-lg cursor-pointer px-7 ease hover:-translate-y-1"> 
                            Login
                        </div>
                    </Link>
            </div>
            <div className="float-right gap-4 p-2 font-bold">
                {categories.map((categories)=>(
                    <Link className="" key={categories.slug} href={`categories/${categories.slug}`} > 
                        <span className="mx-5 text-lg">{categories.name}</span>
                    </Link>
                ))}
            </div>

        </div>
    </div>
    );
};

export default Header;
