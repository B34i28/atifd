import React from 'react';
import Products from '../products/page';
import Stocks from '../stocks/page';
import Amin from '../admin/page';
import Supplierkhatta from '../supplierkhatta/page';
import Cutomerkhatta from '../customerkhatta/page';
import Orders from '../orders/page';
import Orderbooker from '../orderbooker/page';
import Orderdelivery from '../orderdelivery/page';
import Expenses from '../expenses/page';
import Bankmanagement from '../bankmanagement/page';
import Cashmanagement from '../cashmanagement/page';
import Complaint from '../complaint/page';
import Employeesdetail from '../employeedetail/page';
import Assets from '../assets/page';
import Profit from '../profit/page';
import Refill19liter from '../refill19liter/page';
import Homedata from './Homedata';
import BILLrecovery from '../billrecovery/page';


const DashboardContent = ({ page }:any) => {
  switch (page) {
    case 'Dashboard':
      return <Homedata />;
    case 'Products':
      return <Products/>;
    case 'Stock':
      return <Stocks />;
    case 'Admin':
      return <Amin />;
    case 'Supplier Khatta':
      return <Supplierkhatta />;
    case 'Customer Khatta':
      return <Cutomerkhatta />;
    case 'Orders':
      return <Orders />;
    case 'Order Booker':
      return <Orderbooker />;
    case 'Order Delivery':
      return <Orderdelivery />;
    case 'BILL Recovery':
      return <BILLrecovery />;
    case 'Expenses':
      return <Expenses />;
    case 'Bank Management':
      return <Bankmanagement />;
    case 'Cash Management':
      return <Cashmanagement />;
    case 'Complaint':
      return <Complaint />;
    case 'Employees Detail':
      return <Employeesdetail />;
    case 'Assets':
      return <Assets />;
    case 'Profit':
      return <Profit />;
    case 'Refill 19 Liter':
      return <Refill19liter />;
    case 'LogOut':
      return <h1 className="text-2xl font-bold">LogOut</h1>;
    // Add more cases for each of your sidebar items
    default:
      return <h1 className="text-2xl font-bold">Select a page from the sidebar</h1>;
  }
};

export default DashboardContent;
