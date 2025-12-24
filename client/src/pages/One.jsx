import React, { useState } from 'react';
import { 
    Home, BookOpen, BarChart, FileText, Bell, User, LogOut, Award, Clock, Users,
    ClipboardCheck, Mail, Phone
} from 'lucide-react';

// Dummy Data
const DUMMY_STUDENT = {
    name: "आर्यन शर्मा",
    id: "SM-101",
    email: "aryan@example.com",
    phone: "98765-43210",
    batch: "JEE Advanced 2026",
    enrolled: ["Physics: Mechanics", "Maths: Calculus", "Chemistry: Organic"],
    marksHistory: [
        { test: "Mock Test 1", date: "2025-11-20", score: 78, total: 100 },
        { test: "Quiz: Waves", date: "2025-12-05", score: 22, total: 30 },
        { test: "Term Exam", date: "2025-12-15", score: 350, total: 500 },
    ],
    materials: ["Mechanics PDF V2", "Calculus Practice Sheet", "Organic Synthesis Flowchart"],
};

// Reusable Tailwind Classes
const COLORS = {
    PrimaryText: 'text-indigo-900',
    SecondaryText: 'text-gray-600',
    AccentBg: 'bg-yellow-400 hover:bg-yellow-500',
    SidebarBg: 'bg-indigo-900',
    CardShadow: 'shadow-xl hover:shadow-2xl transition duration-300',
    GradientHeader: 'bg-gradient-to-r from-pink-600 to-orange-500',
};

// --- Sidebar Navigation Component ---
const StudentSidebar = ({ currentSection, setCurrentSection }) => {
    const navItems = [
        { name: 'Dashboard', icon: Home, section: 'dashboard' },
        { name: 'My Courses', icon: BookOpen, section: 'courses' },
        { name: 'Marks & History', icon: BarChart, section: 'marks' },
        { name: 'Study Material', icon: FileText, section: 'material' },
        { name: 'Notices', icon: Bell, section: 'notices' },
        { name: 'Profile', icon: User, section: 'profile' },
    ];

    return (
        <nav className={`w-60 min-h-full ${COLORS.SidebarBg} text-white p-4 space-y-2 sticky top-16 hidden md:block`}>
            {navItems.map(item => (
                <button
                    key={item.section}
                    onClick={() => setCurrentSection(item.section)}
                    className={`flex items-center w-full p-3 rounded-lg font-semibold transition duration-200 
                                ${currentSection === item.section 
                                    ? 'bg-purple-600 shadow-lg border-l-4 border-yellow-400' 
                                    : 'hover:bg-indigo-700'
                                }`}
                >
                    <item.icon className="w-5 h-5 mr-3 text-yellow-400" />
                    {item.name}
                </button>
            ))}
        </nav>
    );
};

// --- Content Sections ---

const DashboardOverview = () => (
    <div className="space-y-8">
        <h1 className={`text-4xl font-extrabold mb-6 ${COLORS.PrimaryText} font-poppins`}>
            Welcome back, <span className="text-pink-600">{DUMMY_STUDENT.name}</span>!
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-pink-500`}>
                <Award className="w-8 h-8 mb-3 text-pink-500" />
                <h3 className="text-xl font-semibold">Latest Score</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>{DUMMY_STUDENT.marksHistory[0].score}/{DUMMY_STUDENT.marksHistory[0].total}</p>
                <p className={COLORS.SecondaryText}>{DUMMY_STUDENT.marksHistory[0].test}</p>
            </div>
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-indigo-500`}>
                <BookOpen className="w-8 h-8 mb-3 text-indigo-500" />
                <h3 className="text-xl font-semibold">Enrolled Courses</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>{DUMMY_STUDENT.enrolled.length}</p>
                <p className={COLORS.SecondaryText}>Active Batch: {DUMMY_STUDENT.batch}</p>
            </div>
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-yellow-500`}>
                <Bell className="w-8 h-8 mb-3 text-yellow-500" />
                <h3 className="text-xl font-semibold">New Notices</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>1</p>
                <p className={COLORS.SecondaryText}>Check Notices tab for details.</p>
            </div>
        </div>
    </div>
);

const EnrolledCourses = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>My Enrolled Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {DUMMY_STUDENT.enrolled.map((course, index) => (
                <div key={index} className={`p-5 rounded-xl ${COLORS.CardShadow} bg-white border-l-8 border-indigo-600`}>
                    <BookOpen className="w-6 h-6 float-right text-indigo-600" />
                    <h3 className="text-2xl font-semibold ${COLORS.PrimaryText}">{course}</h3>
                    <p className={COLORS.SecondaryText}>Batch: {DUMMY_STUDENT.batch}</p>
                    <p className={`text-sm mt-3 text-purple-600 font-medium flex items-center`}>
                        <Clock className="w-4 h-4 mr-1" /> Class Timing: 5:00 PM - 7:00 PM
                    </p>
                </div>
            ))}
        </div>
    </div>
);

const MarksAndHistory = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Test History & Marks (Read-Only)</h2>
        <div className={`overflow-x-auto bg-white rounded-xl ${COLORS.CardShadow}`}>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-indigo-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Test Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Score</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Remarks</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {DUMMY_STUDENT.marksHistory.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition duration-150">
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${COLORS.PrimaryText}`}>{item.test}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.SecondaryText}`}>{item.date}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-md font-bold text-pink-600`}>{item.score} / {item.total}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.SecondaryText}`}>
                                {item.score / item.total > 0.7 ? 'Excellent' : 'Needs improvement'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const StudyMaterial = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Study Material (Download/View)</h2>
        <div className="space-y-4">
            {DUMMY_STUDENT.materials.map((material, index) => (
                <div key={index} className={`flex justify-between items-center p-4 rounded-lg bg-white ${COLORS.CardShadow} border-l-4 border-yellow-500`}>
                    <p className={`font-medium ${COLORS.PrimaryText}`}>{material}.pdf</p>
                    <button className={`flex items-center text-sm font-semibold text-white px-4 py-2 rounded-full ${COLORS.AccentBg}`}>
                        <FileText className="w-4 h-4 mr-2" /> Download
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const NoticesAndAnnouncements = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Announcements & Notices</h2>
        <div className="space-y-4">
            <div className={`p-4 rounded-lg bg-indigo-50 border-l-4 border-indigo-600 ${COLORS.CardShadow}`}>
                <p className={`font-semibold ${COLORS.PrimaryText}`}>Holiday Notice:</p>
                <p className={COLORS.SecondaryText}>24th and 25th December will be holidays for Christmas.</p>
            </div>
            <div className={`p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-600 ${COLORS.CardShadow}`}>
                <p className={`font-semibold ${COLORS.PrimaryText}`}>Upcoming Test:</p>
                <p className={COLORS.SecondaryText}>Unit Test 3 on 30th December. Syllabus available in Study Material section.</p>
            </div>
        </div>
    </div>
);

const StudentProfile = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>My Profile (Read-Only)</h2>
        <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <p className={`font-semibold text-lg ${COLORS.PrimaryText}`}>Student Name:</p>
                    <p className={`text-xl font-bold text-pink-600`}>{DUMMY_STUDENT.name}</p>
                </div>
                <div className="space-y-2">
                    <p className={`font-semibold text-lg ${COLORS.PrimaryText}`}>Student ID:</p>
                    <p className={COLORS.SecondaryText}>{DUMMY_STUDENT.id}</p>
                </div>
                <div className="space-y-2">
                    <p className={`font-semibold text-lg ${COLORS.PrimaryText} flex items-center`}><Mail className="w-5 h-5 mr-2" /> Email:</p>
                    <p className={COLORS.SecondaryText}>{DUMMY_STUDENT.email}</p>
                </div>
                <div className="space-y-2">
                    <p className={`font-semibold text-lg ${COLORS.PrimaryText} flex items-center`}><Phone className="w-5 h-5 mr-2" /> Phone:</p>
                    <p className={COLORS.SecondaryText}>{DUMMY_STUDENT.phone}</p>
                </div>
                <div className="space-y-2 col-span-2">
                    <p className={`font-semibold text-lg ${COLORS.PrimaryText}`}>Enrolled Batch:</p>
                    <p className={`text-purple-600 font-medium`}>{DUMMY_STUDENT.batch}</p>
                </div>
            </div>
        </div>
    </div>
);



// --- Main Student Dashboard Component ---
export default function StudentDashboard1() {
    const [currentSection, setCurrentSection] = useState('dashboard');


    const renderContent = () => {
        switch (currentSection) {
            case 'courses': return <EnrolledCourses />;
            case 'marks': return <MarksAndHistory />;
            case 'material': return <StudyMaterial />;
            case 'notices': return <NoticesAndAnnouncements />;
            case 'profile': return <StudentProfile />;
            case 'dashboard':
            default: return <DashboardOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-roboto">
            {/* Top Navbar */}
            <header className={`sticky top-0 z-50 shadow-md p-4 flex justify-between items-center ${COLORS.GradientHeader}`}>
                <h1 className="text-2xl font-extrabold text-white">Student Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-white text-sm hidden sm:block">Welcome, {DUMMY_STUDENT.name}</span>
                    <button className={`flex items-center font-semibold text-white px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition duration-300`}>
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </button>
                </div>
            </header>

            {/* Main Layout */}
            <div className="flex pt-4 max-w-7xl mx-auto">
                {/* Left Sidebar */}
                <StudentSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}