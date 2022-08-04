import React from 'react';
function Aside() {
    return(
        <>
              <div className='container'>
                        <aside>
                             <div className='empty'>
                                    <span>empty div</span>
                                </div>

                            <div class="sidebar">
                                <a href="#!" class="active">
                                <span class="fa fa-home"><i class='bx bx-grid-alt'></i> </span>
                                    <h1>Dashboard</h1>
                                </a>

                                <a href="#!">
                                    <span class="fa fa-user-alt"><i class='bx bx-bell'></i> </span>
                                    <h1 class="sdsd">Products</h1>
                                </a>
                                
                                <a href="#!">
                                    <span class="fa fa-tasks"><i class='bx bx-bolt-circle'></i></span>
                                    <h1>Orders</h1>
                                    <span class="message-count">10</span>
                                </a>

                                <a href="#!">
                                    <span class="fa fa-chart-line"><i class='bx bx-bolt-circle'></i> </span>
                                    <h1>Customers</h1>
                                </a>

                                <a href="#!">
                                    <span class="fa fa-file-invoice"><i class='bx bx-wrench'></i> </span>
                                    <h1 >Settings</h1>
                                </a>
                            </div>
                    </aside>
              </div>
        </>
    )
}

export default Aside;