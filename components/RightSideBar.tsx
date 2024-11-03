import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import BankCard from "@/components/ui/BankCard";

const RightSideBar = ({user, banks, transactions }: RightSidebarProps) => {
    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner">
                    <div className="profile mt-[120px]">
                        <div className="profile-img">
                            <span className="text-5xl font-bold text-blue-500">
                                {user.firstName[0]}
                            </span>
                        </div>
                        <div className="profile-details">
                            <h1 className="profile-name">
                                {user.firstName} {user.lastName}
                            </h1>
                            <p className="profile-email">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banks mt-[120px]">
                <div className="flex w-full justify-between gap-8">
                    <h2 className="header-2">My Banks</h2>
                    <Link href="/" className="flex gap-2">
                        <Image
                            src="/icons/plus.svg"
                            alt="add bank"
                            width={20}
                            height={20}/>
                        <h2 className="text-14 font-semibold text-gray-600">
                            Add Bank
                        </h2>
                    </Link>
                </div>
                {banks?.length > 0 && (
                    <div className="relative flex flex-1 flex-col gap-5 items-center justify-center">
                        <div className="relative z-10">
                            <BankCard key={banks[0].$id} account={banks[0]} userName={`${user.firstName} ${user.lastName}`} showBalance={true}/>
                        </div>

                    </div>
                )}
            </section>
        </aside>
    );
};

export default RightSideBar;