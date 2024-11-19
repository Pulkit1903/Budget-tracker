import React from "react";

async function page(){
    const user = await currentUser();
    if (!user) {
        redirect("/sign-in");

    }
    const userSettings = await prisma.userSettings.findUnique({
        where: {
            userId: user.id,
    },
    });

    if(!userSettings){
        redirect("/wizard");

        
    }
    return( <div> className= "h-full-background">
        <div> className="border-b bg-background">
            <div> className= "container flex flex-wrap items-centre justify-between gap-6 py-8">
                <p className="text-3xl font-bold">Hello, {user.firstname}! ✌️</p>
            </div>
        </div>
    </div>
    );
}

export default page;