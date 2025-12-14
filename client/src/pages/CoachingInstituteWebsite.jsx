import React, { useState } from 'react';
import { 
    BookOpen, User, Shield, GraduationCap, Clock, FileText, BarChart, Bell, LogOut, 
    MapPin, Phone, MessageSquare, Menu, Home, CheckCircle, Upload, Edit, UserPlus, Zap
} from 'lucide-react';

// --- Theme Colors ---
const COLORS = {
    Primary: 'bg-deep-blue-900 text-white',      // Dark Blue
    Accent: 'bg-green-500 hover:bg-green-600 text-white', // Green
    Highlight: 'text-yellow-500',               // Yellow for highlights
    Text: 'text-deep-blue-900',
    TextSecondary: 'text-gray-600',
    Border: 'border-deep-blue-900',
};

// --- Dummy Data ---
const DUMMY_STUDENT = {
  name: "आर्यन शर्मा",
  id: "STD001",
  enrolledCourses: ["JEE Physics (Live)", "Advanced Maths (Upcoming)"],
  marksHistory: [
    { test: "Test 1: Kinematics", marks: 75, total: 100, date: "2025-11-10" },
    { test: "Test 2: Calculus", marks: 88, total: 100, date: "2025-12-01" },
  ],
  studyMaterials: [{ name: "Physics Notes Ch-1", type: "PDF", course: "JEE Physics" }],
  announcements: ["Tomorrow is a holiday.", "New batch for Chemistry starts next week."],
};

const DUMMY_COURSES = [
    { name: "JEE Foundation", duration: "2 Years", timing: "4:00 PM - 6:00 PM", status: "Live" },
    { name: "NEET Crash Course", duration: "3 Months", timing: "Morning Batch", status: "Live" },
    { name: "Class 10 Board Excellence", duration: "9 Months", timing: "3:00 PM - 5:00 PM", status: "Upcoming" },
];

// --- Helper Components ---

// 1. Sidebar Component (Used by Student/Admin)
const Sidebar = ({ role, setView }) => {
  const navItems = role === 'Student' ? [
    { name: 'Dashboard', icon: User, key: 'student_dashboard' },
    { name: 'Test Marks', icon: BarChart, key: 'student_marks' },
    { name: 'Study Material', icon: FileText, key: 'student_material' },
    { name: 'Announcements', icon: Bell, key: 'student_announcements' },
    { name: 'Personal Details', icon: Edit, key: 'student_details' },
  ] : [ // Admin
    { name: 'Admin Dashboard', icon: Shield, key: 'admin_dashboard' },
    { name: 'Manage Students', icon: UserPlus, key: 'admin_students' },
    { name: 'Marks Entry/Edit', icon: BarChart, key: 'admin_marks_edit' },
    { name: 'Upload Material', icon: Upload, key: 'admin_material_upload' },
    { name: 'Manage Content', icon: Edit, key: 'admin_content_edit' },
  ];

  return (
    <nav className={`p-4 space-y-2 h-full ${COLORS.Primary}`}>
      <h2 className="text-xl font-extrabold mb-6 border-b-2 border-yellow-500 pb-2">
          {role === 'Student' ? 'Student Panel' : 'Admin Panel'}
      </h2>
      {navItems.map(item => (
        <button
          key={item.key}
          onClick={() => setView(item.key)}
          className="flex items-center w-full p-3 rounded-lg hover:bg-green-500 transition duration-150 group"
        >
          <item.icon className="w-5 h-5 mr-3 group-hover:text-deep-blue-900" />
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
      <button onClick={() => setView('public_home')} className="flex items-center w-full p-3 rounded-lg text-yellow-500 hover:bg-red-600 hover:text-white transition duration-150 absolute bottom-4">
        <LogOut className="w-5 h-5 mr-3" />
        Logout
      </button>
    </nav>
  );
};

// 2. Course Card Component
const CourseCard = ({ name, duration, timing, status }) => (
  <div className={`p-5 rounded-lg shadow-xl ${status === 'Live' ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'} bg-white`}>
    <h3 className="text-xl font-semibold ${COLORS.Text} mb-2 font-poppins">{name}</h3>
    <p className="flex items-center text-sm ${COLORS.TextSecondary} mb-1"><Clock className="w-4 h-4 mr-2" /> Duration: **{duration}**</p>
    <p className="flex items-center text-sm ${COLORS.TextSecondary} mb-3"><Clock className="w-4 h-4 mr-2" /> Timing: **{timing}**</p>
    <span className={`px-3 py-1 text-xs font-bold rounded-full ${status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
      {status}
    </span>
  </div>
);

// --- Public Pages ---

const PublicHome = ({ setView }) => (
  <div className="space-y-12">
    {/* Hero Section */}
    <div className="relative bg-deep-blue-900 h-96 flex items-center justify-center text-center shadow-lg">
      <div className="p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight font-montserrat">
          सर्वश्रेष्ठ कोचिंग इंस्टीट्यूट <br className="hidden md:block" />
          <span className="text-yellow-500">[City Name]</span> में
        </h1>
        <p className="text-lg text-gray-200 mb-8 font-roboto">अपने सपनों को साकार करें।</p>
        <div className="flex justify-center space-x-4">
          <button onClick={() => setView('contact')} className={`font-bold py-3 px-8 rounded-lg shadow-xl ${COLORS.Accent}`}>
            Contact Us
          </button>
          <button onClick={() => setView('contact')} className="bg-white text-deep-blue-900 font-bold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300">
            Visit Our Center
          </button>
        </div>
      </div>
    </div>

    {/* Course Highlights */}
    <div className="max-w-6xl mx-auto px-4">
      <h2 className={`text-3xl font-bold ${COLORS.Text} mb-8 font-poppins text-center border-b-2 border-green-500 inline-block pb-1`}>Highlight Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_COURSES.map((course, index) => (
             <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={() => setView('courses')} className={`${COLORS.Text} font-semibold hover:text-green-500 transition duration-300`}>
          View All Courses →
        </button>
      </div>
    </div>
  </div>
);

const PublicCourses = () => (
  <div className="max-w-6xl mx-auto p-4 space-y-10">
    <h2 className={`text-4xl font-bold ${COLORS.Text} mb-6 font-poppins`}>All Courses</h2>
    
    {/* Live Courses */}
    <h3 className={`text-3xl font-bold ${COLORS.Text} border-l-4 border-green-500 pl-3`}>Live Batches</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {DUMMY_COURSES.filter(c => c.status === 'Live').map((course, index) => (
             <CourseCard key={index} {...course} />
        ))}
    </div>

    {/* Upcoming Courses */}
    <h3 className={`text-3xl font-bold ${COLORS.Text} pt-8 border-t border-gray-200 border-l-4 border-yellow-500 pl-3`}>Upcoming Batches</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {DUMMY_COURSES.filter(c => c.status === 'Upcoming').map((course, index) => (
             <CourseCard key={index} {...course} />
        ))}
    </div>
  </div>
);

const PublicFaculty = () => (
  <div className="max-w-6xl mx-auto p-4 space-y-8">
    <h2 className={`text-4xl font-bold ${COLORS.Text} mb-8 font-poppins text-center`}>Our Expert Faculty</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Dr. R. K. Gupta", subject: "Physics", exp: "15+ Years" },
        { name: "Ms. Anita Singh", subject: "Chemistry", exp: "10+ Years" },
        { name: "Mr. P. V. Nair", subject: "Mathematics", exp: "20+ Years" },
      ].map((f, i) => (
        <div key={i} className="bg-white p-6 text-center rounded-lg shadow-xl transition-transform transform hover:shadow-2xl border-t-4 border-green-500">
          <div className="w-32 h-32 mx-auto rounded-full bg-deep-blue-100 mb-4 border-4 border-yellow-500 flex items-center justify-center text-4xl text-deep-blue-900 font-bold">
            {f.name.charAt(0)}
          </div>
          <h3 className={`text-2xl font-semibold ${COLORS.Text} font-poppins`}>{f.name}</h3>
          <p className="text-lg text-green-500 font-medium mb-2">{f.subject} Expert</p>
          <p className={`${COLORS.TextSecondary} text-sm`}>{f.exp} Experience</p>
        </div>
      ))}
    </div>
  </div>
);

const PublicContact = () => (
  <div className="max-w-6xl mx-auto p-4 space-y-8">
    <h2 className={`text-4xl font-bold ${COLORS.Text} mb-8 font-poppins text-center`}>Contact Us</h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6 p-6 bg-white rounded-lg shadow-xl border-l-4 border-green-500">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-green-500 mt-1" />
          <div>
            <h3 className={`font-bold ${COLORS.Text}`}>Address</h3>
            <p className={`${COLORS.TextSecondary}`}>123, Education Hub, Near City Park, [City Name] - 123456</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-green-500 mt-1" />
          <div>
            <h3 className={`font-bold ${COLORS.Text}`}>Phone Number</h3>
            <p className={`${COLORS.TextSecondary}`}>+91 98765 43210</p>
          </div>
        </div>

        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center space-x-3 ${COLORS.Accent} p-3 rounded-lg font-bold shadow-md`}>
          <MessageSquare className="w-6 h-6" />
          <span>WhatsApp Us Now</span>
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-xl overflow-hidden h-96">
        {/* Google Map Embed Placeholder */}
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.834460455171!2d77.03264421440526!3d28.59972828230554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196414777a83%3A0xc682245b786c5598!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625900000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
);


// --- Student Dashboard Pages ---

const StudentDashboardContent = ({ setView }) => (
  <div className="p-6">
    <h1 className={`text-3xl md:text-4xl font-bold ${COLORS.Text} mb-6 font-poppins`}>
      Welcome Back, <span className="text-green-500">{DUMMY_STUDENT.name}</span>!
    </h1>
    <p className={`${COLORS.TextSecondary} mb-8`}>Student ID: {DUMMY_STUDENT.id}</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Enrolled Courses Card */}
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-deep-blue-900 cursor-pointer hover:shadow-2xl transition" onClick={() => setView('student_courses')}>
        <GraduationCap className={`w-8 h-8 ${COLORS.Text} mb-3`} />
        <h3 className="text-xl font-semibold mb-2">Enrolled Courses</h3>
        <p className="text-3xl font-bold text-green-500">{DUMMY_STUDENT.enrolledCourses.length}</p>
        <p className={`text-sm ${COLORS.TextSecondary} mt-2`}>View all active batches.</p>
      </div>

      {/* Latest Marks Card */}
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-yellow-500 cursor-pointer hover:shadow-2xl transition" onClick={() => setView('student_marks')}>
        <BarChart className="w-8 h-8 text-yellow-500 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Latest Test Score</h3>
        <p className="text-3xl font-bold ${COLORS.Text}">
          {DUMMY_STUDENT.marksHistory[0].marks} / {DUMMY_STUDENT.marksHistory[0].total}
        </p>
        <p className={`text-sm ${COLORS.TextSecondary} mt-2`}>{DUMMY_STUDENT.marksHistory[0].test}</p>
      </div>

      {/* Announcements Card */}
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-green-500 cursor-pointer hover:shadow-2xl transition" onClick={() => setView('student_announcements')}>
        <Bell className="w-8 h-8 text-green-500 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Announcements</h3>
        <p className={`text-md font-medium ${COLORS.Text} line-clamp-2`}>
          {DUMMY_STUDENT.announcements[0]}
        </p>
        <p className={`text-sm ${COLORS.TextSecondary} mt-2`}>Check for notices.</p>
      </div>
    </div>

    {/* Enrolled Courses List */}
    <div className="mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h2 className={`text-2xl font-bold ${COLORS.Text} mb-4 border-b pb-2`}>Enrolled Courses</h2>
        <ul className="list-disc list-inside space-y-2">
            {DUMMY_STUDENT.enrolledCourses.map((course, i) => (
                <li key={i} className={`${COLORS.TextSecondary} font-medium`}>{course}</li>
            ))}
        </ul>
    </div>
  </div>
);

const StudentMarks = () => (
  <div className="p-6">
    <h2 className={`text-3xl font-bold ${COLORS.Text} mb-6`}>Test History & Marks</h2>
    <div className="overflow-x-auto bg-white rounded-lg shadow-xl">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className={COLORS.Primary}>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Test Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Marks Obtained</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Total Marks</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {DUMMY_STUDENT.marksHistory.map((item, i) => (
            <tr key={i} className="hover:bg-green-50 transition duration-150">
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${COLORS.Text}`}>{item.test}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.TextSecondary}`}>{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-500">{item.marks}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.TextSecondary}`}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const StudentMaterial = () => (
    <div className="p-6">
        <h2 className={`text-3xl font-bold ${COLORS.Text} mb-6`}>Study Material</h2>
        <div className="grid md:grid-cols-2 gap-4">
            {DUMMY_STUDENT.studyMaterials.map((material, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center border-l-4 border-yellow-500">
                    <div>
                        <p className={`font-semibold ${COLORS.Text}`}>{material.name} ({material.type})</p>
                        <p className={`text-xs ${COLORS.TextSecondary}`}>{material.course}</p>
                    </div>
                    <button className="text-sm bg-yellow-500 text-deep-blue-900 py-1 px-3 rounded-full hover:bg-yellow-600 transition">
                        Download
                    </button>
                </div>
            ))}
            <p className={`text-sm ${COLORS.TextSecondary} mt-4`}>Note: All materials are read-only and cannot be edited by students.</p>
        </div>
    </div>
);

// --- Admin Dashboard Pages ---

const AdminDashboardContent = ({ setView }) => (
  <div className="p-6">
    <h1 className={`text-4xl font-bold ${COLORS.Text} mb-8 font-poppins`}>Admin Control Panel</h1>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Quick Stats */}
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-green-500">
        <h3 className="text-lg font-semibold ${COLORS.Text}">Total Students</h3>
        <p className="text-4xl font-bold text-green-500">185</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-deep-blue-900">
        <h3 className="text-lg font-semibold ${COLORS.Text}">Live Courses</h3>
        <p className="text-4xl font-bold ${COLORS.Text}">7</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold ${COLORS.Text}">Pending Reviews</h3>
        <p className="text-4xl font-bold text-yellow-500">4</p>
      </div>
    </div>
    
    {/* Admin Actions Section */}
    <div className="mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h2 className={`text-2xl font-bold ${COLORS.Text} mb-4`}>Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AdminActionButton icon={UserPlus} label="Create Student" onClick={() => setView('admin_students')} color="bg-green-500" />
            <AdminActionButton icon={BarChart} label="Edit Marks" onClick={() => setView('admin_marks_edit')} color="bg-deep-blue-900" />
            <AdminActionButton icon={Upload} label="Upload Material" onClick={() => setView('admin_material_upload')} color="bg-yellow-500" />
            <AdminActionButton icon={Edit} label="Edit Site Content" onClick={() => setView('admin_content_edit')} color="bg-green-500" />
        </div>
    </div>
  </div>
);

const AdminActionButton = ({ icon: Icon, label, onClick, color }) => (
    <button onClick={onClick} className={`${color} text-white p-4 rounded-lg flex flex-col items-center hover:opacity-90 transition shadow-lg`}>
        <Icon className="w-6 h-6 mb-2" />
        <span className="text-xs font-semibold">{label}</span>
    </button>
);

const AdminMarksEdit = () => (
    <div className="p-6">
        <h2 className={`text-3xl font-bold ${COLORS.Text} mb-6`}>Marks Entry / Edit Panel</h2>
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <p className={`text-lg font-semibold ${COLORS.Text} mb-4`}>Student: {DUMMY_STUDENT.name} ({DUMMY_STUDENT.id})</p>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Test Name</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="e.g., Physics Test Ch-3" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Marks Obtained</label>
                    <input type="number" className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Total Marks</label>
                    <input type="number" className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md font-semibold ${COLORS.Accent}`}>
                    Save Marks
                </button>
            </form>
            <p className={`mt-6 text-sm ${COLORS.TextSecondary}`}>**Table with all students' marks history goes here for quick editing.**</p>
        </div>
    </div>
);

const AdminMaterialUpload = () => (
    <div className="p-6">
        <h2 className={`text-3xl font-bold ${COLORS.Text} mb-6`}>Study Material Upload</h2>
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Material Title</label>
                    <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="e.g., Calculus Advanced Notes" />
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Assign to Course</label>
                    <select className="mt-1 p-2 w-full border rounded-md">
                        <option>JEE Physics</option>
                        <option>NEET Crash Course</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium ${COLORS.TextSecondary}">Upload File (PDF/Notes)</label>
                    <input type="file" className="mt-1 p-2 w-full border rounded-md" accept=".pdf,.doc,.docx" />
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md font-semibold ${COLORS.Accent}`}>
                    Upload Material
                </button>
            </form>
        </div>
    </div>
);


// --- Main App Component ---

const CoachingInstituteWebsiteUI = () => {
  const [currentView, setCurrentView] = useState('public_home');
  const [userRole, setUserRole] = useState(null); // null, 'Student', 'Admin'

  const navigate = (view) => {
    setCurrentView(view);
    if (view.startsWith('public')) {
        setUserRole(null);
    } else if (view === 'public_home') {
        setUserRole(null);
    }
  };

  const handleLogin = (role) => {
    setUserRole(role);
    setCurrentView(role === 'Student' ? 'student_dashboard' : 'admin_dashboard');
  };

  // --- Rendering Logic ---
  let mainContent;
  if (userRole === 'Student') {
    switch (currentView) {
      case 'student_marks': mainContent = <StudentMarks />; break;
      case 'student_material': mainContent = <StudentMaterial />; break;
      case 'student_dashboard':
      default: mainContent = <StudentDashboardContent setView={navigate} />; break;
    }
  } else if (userRole === 'Admin') {
    switch (currentView) {
      case 'admin_marks_edit': mainContent = <AdminMarksEdit />; break;
      case 'admin_material_upload': mainContent = <AdminMaterialUpload />; break;
      case 'admin_dashboard':
      default: mainContent = <AdminDashboardContent setView={navigate} />; break;
    }
  } else {
    // Public Pages
    switch (currentView) {
      case 'courses': mainContent = <PublicCourses />; break;
      case 'faculty': mainContent = <PublicFaculty />; break;
      case 'contact': mainContent = <PublicContact />; break;
      case 'login':
        mainContent = (
          <div className="max-w-md mx-auto p-8 mt-20 bg-white rounded-lg shadow-2xl border-t-4 border-green-500">
            <h2 className={`text-3xl font-bold ${COLORS.Text} mb-6 text-center font-poppins`}>User Login</h2>
            <div className="space-y-4">
              <button onClick={() => handleLogin('Student')} className={`w-full font-bold py-3 rounded-lg hover:opacity-90 transition duration-300 bg-green-500 text-white`}>
                Student Login
              </button>
              <button onClick={() => handleLogin('Admin')} className={`w-full font-bold py-3 rounded-lg hover:opacity-90 transition duration-300 ${COLORS.Primary}`}>
                Admin Login
              </button>
            </div>
          </div>
        );
        break;
      case 'public_home':
      default: mainContent = <PublicHome setView={navigate} />; break;
    }
  }

  // --- Main Layout Structure ---
  return (
    <div className="min-h-screen bg-gray-50 font-roboto">
      
      {/* 1. Global Header/Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-extrabold ${COLORS.Text} font-poppins`}>
            [Institute Name] <span className="text-green-500">Coaching</span>
          </h1>
          
          <nav className="hidden md:flex space-x-6 items-center">
            {userRole === null && (
              <>
                <button onClick={() => navigate('public_home')} className={`${COLORS.Text} hover:text-green-500 font-medium flex items-center`}><Home className="w-5 h-5 mr-1" />Home</button>
                <button onClick={() => navigate('courses')} className={`${COLORS.Text} hover:text-green-500 font-medium`}>Courses</button>
                <button onClick={() => navigate('faculty')} className={`${COLORS.Text} hover:text-green-500 font-medium`}>Faculty</button>
                <button onClick={() => navigate('contact')} className={`${COLORS.Text} hover:text-green-500 font-medium`}>Contact</button>
              </>
            )}
            <button
              onClick={() => userRole ? navigate('public_home') : navigate('login')}
              className={`py-2 px-6 rounded-lg font-bold text-white transition duration-300 ${userRole ? 'bg-red-600 hover:bg-red-700' : 'bg-deep-blue-900 hover:bg-green-500'}`}
            >
              {userRole ? 'Logout' : 'Login'}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className={`md:hidden ${COLORS.Text}`}><Menu /></button>
        </div>
      </header>

      {/* 2. Main Content Area */}
      <main className="max-w-7xl mx-auto">
        {userRole ? (
          // Protected Dashboard Layout
          <div className="flex">
            <div className="w-64 flex-shrink-0 sticky top-[68px] h-[calc(100vh-68px)] hidden md:block">
              <Sidebar role={userRole} setView={navigate} />
            </div>
            <div className="flex-grow overflow-y-auto p-0 md:p-8 bg-white min-h-[calc(100vh-68px)]">
              {mainContent}
            </div>
          </div>
        ) : (
          // Public Page Layout
          <div className="pt-8">
            {mainContent}
          </div>
        )}
      </main>

      {/* 3. Global Footer (Only on Public Pages) */}
      {userRole === null && (
        <footer className={`py-10 mt-12 ${COLORS.Primary}`}>
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-300 hover:text-green-500 transition">About Us</a>
                <a href="#" className="text-gray-300 hover:text-green-500 transition">Courses</a>
                <a href="#" className="text-gray-300 hover:text-green-500 transition">Contact</a>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-yellow-500">Institute Name</h3>
            <p className="text-sm text-gray-400">Address: [City/Area Name], [State]. Phone: +91 98765 43210</p>
            <p className="text-xs text-gray-500 mt-4">Designed with simplicity and trust. Copyright © 2025. All Rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CoachingInstituteWebsiteUI;