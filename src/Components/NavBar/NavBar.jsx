import React, { Component } from 'react';
// import { render } from 'react-dom';
import Svgchart from '../images/Svgchart.png'
import Doughnut from '../images/Doughnut.svg.png'


class NavBar extends Component {
    state = {OrderNo : "#876123",
    ProductName : 'Airmax pro',
    Buyer:'Adedamola Alausa',
    Date:'03 Aug,2022',
    // Status:
};
    render(){
    return(
        <>
              <div className='container'>
                        <nav>
                            <div class="tops">
                               
                                <div class="logos">
                                    <h2>Welcome, Misa Choice</h2>
                                </div>
                                <div class="close" id="close-btn">
                                    <span  class="fa fa-times"></span>
                                </div>
                            </div>

                          <div className='usersNameContainer'>
                            <ul>
                                <li className='usersNameDem'>Misa's choice</li>
                                <li className=''><span>A</span></li>
                                <li className=''><i class='bx bx-caret-down' ></i></li>
                            </ul>
                            
                          </div>
                    </nav>

                     <main>
                        <div className='dashboardHeader'>
                        <h1 id="mainTitle">Dashboard</h1>
                        <button> Add new product</button>
                        </div>
              
            
            <div class="insight">
                <div class="sales">
                    
                    <div class="middle">
                    <span class="fa fa-chart-line"><i class='bx bxs-package'></i></span>
                        <div class="left">
                            <h3>Total Product</h3>
                            <h1>300</h1>
                        </div>
                        <div class="progress">
                       
                            <p>2 New Added</p>
                        </div>
                    </div>

                </div>
                {/* <!-- =======END OF SALES --> */}
                <div class="expenses">
                    <div class="middle">
                    <span class="fa fa-chart-line"><i class='bx bxs-cart-alt alt-chartss'></i></span>
                        <div class="left">
                            <h3>Total Sales</h3>
                            <h1>230</h1>
                        </div>
                        <div class="progress">
                           
                                <p>4 Sales Today</p>
                            
                        </div>
                    </div>
                </div>
                {/* <!-- =======END OF EXPENSES --> */}
                <div class="income">
                    <div class="middle">
                    <span class="fa fa-chart-line"><i class='bx bxs-cart-alt chartss'></i></span>
                        <div class="left">
                            <h3>Total Orders</h3>
                            <h1>235</h1>
                        </div>
                        <div class="progress">
                                <p>4 Sales Today</p>
                        </div>
                    </div>
                </div>
                {/* <!-- =======END OF INCOME--> */}
            </div>
           

            <div className='insight2'>
            <div class="insight">
                <div class="sales">
                    
                    <div class="middle">
                        <div class="left">
                            <p className='svgimgs'>Reports For each month</p>
                           {/* <PieChart /> */}
                           <img className='image02' src={Svgchart} alt="" />
                        </div>
                        <div class="progress">
                         
                        </div>
                    </div>
                   
                </div>
                <div class="sales">
                    
                    <div class="middle">
                        <div class="left">
                        <p className='svgimgs'>Analytics</p>
                           {/* <PieChart /> */}
                           <img className='image01' src={Doughnut} alt="" />
                        </div>
                        <div class="progress">
                         
                        </div>
                    </div>
                   
                </div>
              
            
               
              
              
            </div>
                
                </div>
            

            <div class="recent-orders">
                <h2>Recent Order</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                disabled={true} />
                            </th>
                            {/* <th><input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        disabled={true}
                           /></th> */}
                            <th>Order No.</th>
                            <th>Product Name</th>
                            <th>Buyer</th>
                            <th>Date</th>

                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            disabled={true} />
                            </td>
                            <td>
                              
                            <b>{this.state.OrderNo}</b></td>
                            <td className='boldorderHead'><b>{this.state.ProductName}</b></td>
                            <td className='boldorderHead'><i class='bx bxs-user'></i><b>{this.state.Buyer}</b></td>
                            <td className='boldorderHead'><i class='bx bx-calendar'></i><b>{this.state.Date}</b></td>
                            <td class="primary">Pending</td>
                        </tr>

                        <tr>
                           <td>
                                <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            disabled={true} />
                            </td>
                            <td>
                            <b>{this.state.OrderNo}</b></td>
                            <td className='boldorderHead'><b>{this.state.ProductName}</b></td>
                            <td className='boldorderHead'><i class='bx bxs-user'></i><b>{this.state.Buyer}</b></td>
                            <td className='boldorderHead'><i class='bx bx-calendar'></i><b>{this.state.Date}</b></td>
                            <td class="success">Pending</td>
                        </tr>
                    
                    </tbody>
                </table>
                <a href="#!"> Show All</a>
            </div>
        </main>
              </div>
        </>
    )
}
}

export default NavBar;