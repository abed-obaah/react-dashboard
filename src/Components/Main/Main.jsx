import React from 'react';
function Main() {
    return(
        <>
              <div className='container'>
              <main>
            <h1 id="mainTitle">Dashboard</h1>
            <div class="date">
                <input type="date"/>
            </div>
            <div class="insight">
                <div class="sales">
                    <span class="fa fa-chart-line"></span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total sales</h3>
                            <h1>$25,024</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF SALES --> */}
                <div class="expenses">
                    <span class="fa fa-chart-bar"></span>
                    
                    <div class="middle">
                        <div class="left">
                            <h3>Total expenses</h3>
                            <h1>$14,160</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF EXPENSES --> */}
                <div class="income">
                    <span class="fa fa-chart-area"></span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total income</h3>
                            <h1>$10,864</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF INCOME--> */}
            </div>
            <div class="insight1">
                <div class="sales">
                    <span class="fa fa-chart-line"></span>
                    <div class="middle">
                        <div class="left">
                            <h3>sales</h3>
                            <h1>$5,024</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF SALES --> */}
                <div class="expenses">
                    <span class="fa fa-chart-bar"></span>
                    
                    <div class="middle">
                        <div class="left">
                            <h3>Total expenses</h3>
                            <h1>$14,160</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF EXPENSES --> */}
                <div class="income">
                    <span class="fa fa-chart-area"></span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total income</h3>
                            <h1>$10,864</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="36" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- =======END OF INCOME--> */}
            </div>
            

            <div class="recent-orders">
                <h2>Recent Order</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <a href="#!"> Show All</a>
            </div>
        </main>
              </div>
        </>
    )
}

export default Main;