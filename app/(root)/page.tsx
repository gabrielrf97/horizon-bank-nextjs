import React from 'react';
import {HeaderBox} from '@/components/headerBox';
import TotalBalanceBox from "@/components/totalBalanceBox";
import RightSideBar from "@/components/RightSideBar";

const Dashboard = () => {
    const loggedInUser = {firstName: 'Gabriel', lastName: 'Rodrigues', email: 'gabriel@gmail.com'};

    return (
        <section className="home">
            <div className="home-content">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedInUser.firstName}
                    subtext="Access and manage your transactions efficiently"
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.50}/>
                Recent Transactions
            </div>
            <RightSideBar
                user={loggedInUser}
                transactions={[]}
                banks={[{currentBalance: 123.40}, {currentBalance: 99.00}]}
            />
        </section>
    );
};

export default Dashboard;