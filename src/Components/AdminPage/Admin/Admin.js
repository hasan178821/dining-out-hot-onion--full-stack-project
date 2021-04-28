import React from 'react';
import './Admin.css';
import AddFoods from '../AddFoods/AddFoods';
import OrderedCartData from '../OrderedCartData/OrderedCartData';

const Admin = () => {
    return (
        <div>
            <div className="d-flex align-items-start admin-tab-parent">
                <div className="nav flex-column nav-pills admin-tab me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Add Foods</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Make Admin</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">All Order</button>
                </div>
                <div className="tab-content admin-tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <AddFoods/> </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">  make admin  </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">  <OrderedCartData/> </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;