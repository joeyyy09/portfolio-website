import React from "react";

type Props={}
export default function SkillsCard({}:Props){
    return <div className="flex flex-col rounded-lg items-center space-y-7 pb-4 pt-4 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[460px] snap-center bg-orange-700 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration 200 overflow-hidden">
        <img className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center   "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpMgjV_xFjpbVUiUu4sYv_2YOZQ8CEegtVF9DuIwK&s" alt="" />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl mb-2 font-light">PROJECT 1</h4>
            <ul className="list-disc  ml-5 text-lg">
                <li>
                   Joey
                </li>
                <li>
                   Joey
                </li>
                <li>
                   Joey
                </li>
                <li>
                   Joey
                </li>
                <li>
                   Joey
                </li>
                
            </ul>
        </div>
    </div>;
        
}