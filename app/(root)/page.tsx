import React from 'react';
import {HeaderBox} from '@/components/headerBox';
import TotalBalanceBox from "@/components/totalBalanceBox";

const Dashboard = () => {
    const loggedInUser = {firstName: 'Gabriel'};

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
            </div>
        </section>
    );
};

export default Dashboard;