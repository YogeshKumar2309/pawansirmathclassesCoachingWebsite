import React, { useState } from 'react';
import { 
    Shield, Users, BookOpen, BarChart, FileText, Bell, Settings, LogOut, Edit, Upload, 
    MessageSquare, Check, X, UserPlus, Zap
} from 'lucide-react';

// Dummy Data
const DUMMY_STATS = {
    totalStudents: 185,
    liveCourses: 7,
    pendingReviews: 4,
};

const DUMMY_STUDENTS_LIST = [
    { id: 'SM-101', name: 'A. Sharma', batch: 'JEE 2026', status: 'Active' },
    { id: 'SM-102', name: 'P. Verma', batch: 'NEET Batch', status: 'Blocked' },
    { id: 'SM-103', name: 'R. Kaur', batch: 'JEE 2026', status: 'Active' },
];

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
const AdminSidebar = ({ currentSection, setCurrentSection }) => {
    const navItems = [
        { name: 'Dashboard', icon: Shield, section: 'dashboard' },
        { name: 'Students', icon: Users, section: 'students' },
        { name: 'Courses', icon: BookOpen, section: 'courses' },
        { name: 'Marks Entry', icon: BarChart, section: 'marks' },
        { name: 'Material Upload', icon: Upload, section: 'material' },
        { name: 'Reviews', icon: MessageSquare, section: 'reviews' },
        { name: 'Notices', icon: Bell, section: 'notices' },
        { name: 'Settings', icon: Settings, section: 'settings' },
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

const AdminDashboardOverview = () => (
    <div className="space-y-8">
        <h1 className={`text-4xl font-extrabold mb-6 ${COLORS.PrimaryText} font-poppins`}>Admin Overview</h1>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-pink-500`}>
                <Users className="w-8 h-8 mb-3 text-pink-500" />
                <h3 className="text-xl font-semibold">Total Students</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>{DUMMY_STATS.totalStudents}</p>
            </div>
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-indigo-500`}>
                <BookOpen className="w-8 h-8 mb-3 text-indigo-500" />
                <h3 className="text-xl font-semibold">Live Courses</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>{DUMMY_STATS.liveCourses}</p>
            </div>
            <div className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-yellow-500`}>
                <MessageSquare className="w-8 h-8 mb-3 text-yellow-500" />
                <h3 className="text-xl font-semibold">Pending Reviews</h3>
                <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>{DUMMY_STATS.pendingReviews}</p>
            </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8">
            <h2 className={`text-2xl font-bold ${COLORS.PrimaryText} mb-4`}>Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className={`p-4 rounded-xl text-white font-semibold flex flex-col items-center shadow-lg bg-pink-500 hover:bg-pink-600 transition duration-200`}>
                    <UserPlus className="w-6 h-6 mb-1" /> Create Student
                </button>
                <button className={`p-4 rounded-xl text-white font-semibold flex flex-col items-center shadow-lg bg-indigo-500 hover:bg-indigo-600 transition duration-200`}>
                    <BarChart className="w-6 h-6 mb-1" /> Update Marks
                </button>
                <button className={`p-4 rounded-xl text-indigo-900 font-semibold flex flex-col items-center shadow-lg ${COLORS.AccentBg}`}>
                    <Upload className="w-6 h-6 mb-1" /> New Material
                </button>
                <button className={`p-4 rounded-xl text-white font-semibold flex flex-col items-center shadow-lg bg-purple-500 hover:bg-purple-600 transition duration-200`}>
                    <Edit className="w-6 h-6 mb-1" /> Edit Content
                </button>
            </div>
        </div>
    </div>
);

const StudentManagement = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Student Management</h2>
        
        <button className={`flex items-center text-white px-4 py-2 rounded-lg font-semibold bg-green-500 hover:bg-green-600 transition duration-200 mb-4`}>
            <UserPlus className="w-5 h-5 mr-2" /> Add New Student
        </button>

        <div className={`overflow-x-auto bg-white rounded-xl ${COLORS.CardShadow}`}>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-indigo-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Batch</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${COLORS.PrimaryText}">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {DUMMY_STUDENTS_LIST.map((student, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition duration-150">
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${COLORS.PrimaryText}`}>{student.id}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.PrimaryText}`}>{student.name}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.SecondaryText}`}>{student.batch}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${student.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                                {student.status}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                <button className="text-indigo-600 hover:text-indigo-900 transition">Edit</button>
                                <button className={`text-red-600 hover:text-red-900 transition`}>{student.status === 'Active' ? 'Block' : 'Unblock'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const CourseManagement = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Course Management</h2>
        <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Edit Course Status</h3>
            <div className="space-y-4">
                {['JEE Advanced 2026', 'NEET Repeaters Batch', 'New Olympiad'].map((course, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                        <span className={COLORS.PrimaryText}>{course}</span>
                        <select className="p-2 border rounded-md">
                            <option>Live</option>
                            <option>Upcoming</option>
                            <option>Completed</option>
                        </select>
                    </div>
                ))}
            </div>
            <button className={`mt-6 text-white px-4 py-2 rounded-lg font-semibold bg-indigo-500 hover:bg-indigo-600 transition`}>
                Save Changes
            </button>
        </div>
    </div>
);

const MarksManagement = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Marks Entry / Edit</h2>
        <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Add New Mark Record</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Student ID</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="e.g., SM-101" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Test Name</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="e.g., Unit Test 3 - Physics" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium ${COLORS.SecondaryText}">Score Obtained</label>
                        <input type="number" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium ${COLORS.SecondaryText}">Total Marks</label>
                        <input type="number" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md font-semibold ${COLORS.AccentBg} ${COLORS.PrimaryText}`}>
                    Add Mark Record
                </button>
            </form>
        </div>
    </div>
);

const MaterialUpload = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Study Material Upload</h2>
        <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Upload New Resource</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Material Title</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="e.g., JEE Chemistry Notes Chapter 5" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Assign to Course</label>
                    <select className="mt-1 p-2 w-full border rounded-md">
                        <option>JEE Advanced 2026</option>
                        <option>NEET Repeaters Batch</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Select File (PDF/Notes)</label>
                    <input type="file" className="mt-1 p-2 w-full border rounded-md" accept=".pdf,.doc,.docx" />
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md font-semibold bg-pink-500 text-white hover:bg-pink-600 transition`}>
                    Upload Material
                </button>
            </form>
        </div>
    </div>
);

const ReviewsManagement = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Reviews & Comments Management</h2>
        <div className="space-y-4">
            {[{id: 1, text: 'Great coaching, excellent faculty!', status: 'Pending'}, {id: 2, text: 'Need more practice sheets.', status: 'Published'}].map(review => (
                <div key={review.id} className={`p-4 rounded-lg bg-white ${COLORS.CardShadow}`}>
                    <p className={`font-medium ${COLORS.PrimaryText}`}>{review.text}</p>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                        <span className={`text-xs font-semibold ${review.status === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{review.status}</span>
                        <div className="space-x-2">
                            {review.status === 'Pending' && (
                                <button className="text-green-600 hover:text-green-900 transition"><Check className="w-4 h-4" /></button>
                            )}
                            <button className="text-red-600 hover:text-red-900 transition"><X className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const WebsiteSettings = () => (
    <div className="space-y-6">
        <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>Website Settings & Content</h2>
        <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Edit Text Content (Homepage/About)</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Homepage Headline</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" value="Best Coaching Center in [City / Area Name]" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">About Us Text</label>
                    <textarea className="mt-1 p-2 w-full border rounded-md" rows="3" defaultValue="हमारा इंस्टीट्यूट [Year] में स्थापित किया गया था..."></textarea>
                </div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 pt-4">Branding</h3>
                <div>
                    <label className="block text-sm font-medium ${COLORS.SecondaryText}">Change Logo (Upload UI)</label>
                    <input type="file" className="mt-1 p-2 w-full border rounded-md" accept="image/*" />
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md font-semibold bg-purple-500 text-white hover:bg-purple-600 transition`}>
                    Update Website
                </button>
            </form>
        </div>
    </div>
);

// --- Main Admin Dashboard Component ---
export default function AdminDashboard() {
    const [currentSection, setCurrentSection] = useState('dashboard');

    const renderContent = () => {
        switch (currentSection) {
            case 'students': return <StudentManagement />;
            case 'courses': return <CourseManagement />;
            case 'marks': return <MarksManagement />;
            case 'material': return <MaterialUpload />;
            case 'reviews': return <ReviewsManagement />;
            case 'notices': return <NoticesAndAnnouncements />; // Reusing from Student Dashboard logic
            case 'settings': return <WebsiteSettings />;
            case 'dashboard':
            default: return <AdminDashboardOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-roboto">
            {/* Top Navbar */}
            <header className={`sticky top-0 z-50 shadow-md p-4 flex justify-between items-center ${COLORS.GradientHeader}`}>
                <h1 className="text-2xl font-extrabold text-white">Admin Control Panel</h1>
                <button className={`flex items-center font-semibold text-white px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition duration-300`}>
                    <LogOut className="w-4 h-4 mr-2" /> Admin Logout
                </button>
            </header>

            {/* Main Layout */}
            <div className="flex pt-4 max-w-7xl mx-auto">
                {/* Left Sidebar */}
                <AdminSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}