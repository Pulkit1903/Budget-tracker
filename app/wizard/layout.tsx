import React, { ReactNode} from "react";

function layout({children}: {children: ReactNode}) {
    return (
        <div className="relative flex h-screen w-full flex-colitems-centre justify-centre">
            {children} 
                </div>
           
    );
}

export default layout;