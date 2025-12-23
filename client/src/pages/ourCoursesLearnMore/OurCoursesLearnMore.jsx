import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TopNavCourses from "../../components/user/ourCoursesLearnMore/TopNavCourses";

const OurCoursesLearnMore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("math");

  // 🔥 URL se active tab set hoga
  useEffect(() => {
    if (location.pathname.includes("science")) setActiveTab("science");
    else if (location.pathname.includes("english")) setActiveTab("english");
    else if (location.pathname.includes("allSubjects")) setActiveTab("allSubjects");
    else setActiveTab("math"); // default
  }, [location.pathname]);

  // 🔥 Navbar click handler
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    navigate(`/courses/${tabId}`);
  };

  return (
    <div>
      <TopNavCourses
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />

      {/* 👇 Yahin subject pages render honge */}
      <div className="mt-6 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default OurCoursesLearnMore;
