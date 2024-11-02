import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedInUser = {
        firstName: "John",
        lastName: "Doe",
    }

    return (
        <main className="flex h-screen w-screen font-inter">
            <Sidebar user={loggedInUser} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                    <MobileNavBar user={loggedInUser} />
                </div>
                {children}
            </div>

        </main>
    );
}
