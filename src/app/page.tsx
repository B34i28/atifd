'use client'
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import DashboardContent from "./components/DashboardContent";

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  return (
    <div className="flex">
      <Sidebar onLinkClick={setCurrentPage} />
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <DashboardContent page={currentPage} />
      </div>
      
    </div>
  );
}
