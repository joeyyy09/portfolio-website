import React from "react";

type Props={
    directionLeft: boolean;
};

function SkillsImages({directionLeft}:Props){
    return <div className="flex relative flex-col text-center md:text-left xl:flex-lg max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center
    
    ">
            
<img src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" className="rounded-full border border-orange-500 object-fill w-32 h-32 mb-20"/>

    </div>;
}

export default SkillsImages;