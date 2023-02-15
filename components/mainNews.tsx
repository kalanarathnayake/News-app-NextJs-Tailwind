import Image from "next/image";
import backgroud from "../public/bg.jpeg"

const MainNews = () => {
    return (
    <div className="grid grid-cols-2 col-span-2 p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
        <div className="border-4 rounded-lg border-stone-500">
            <Image className="object-contain object-fill w-full h-full rounded-md" src={backgroud} alt={''} />
        </div>
        <div className="m-8 mb-5 ">
            <p className="mb-4 text-3xl font-extrabold text-center">
            Topic of the news
            </p>
            <p className="mb-4 font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, unde sint. Atque, vero commodi minus laboriosam earum nemo excepturi molestiae aliquid tenetur qui optio ut ex ad eligendi voluptatibus beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, unde sint. Atque, vero commodi minus laboriosam earum nemo excepturi molestiae aliquid tenetur qui optio ut ex ad eligendi voluptatibus beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, unde sint. Atque, vero commodi minus laboriosam earum nemo excepturi molestiae aliquid tenetur qui optio ut ex ad eligendi voluptatibus beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, unde sint. Atque, vero commodi minus laboriosam earum nemo excepturi molestiae aliquid tenetur qui optio ut ex ad eligendi voluptatibus beatae.
            </p>
            <p className="">
                <p className="italic text-left text-gray-500 text-s">time</p>
            </p>
        </div>
    </div>)
}
//grid grid-cols-2 col-span-2 m-8 

export default MainNews;
