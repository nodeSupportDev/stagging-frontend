import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const [openNavbar,setOpenNavbar] = useState(false);
    console.log(openNavbar);
    return (
        <div className="dashboard-outer">
            <header>
                <button className="toggle-btn" onClick={() => setOpenNavbar(!openNavbar)}>☰ Menu</button>
                <h1>Responsive Layout</h1>
            </header>
            <div className="layout">
                <nav className={`sidebar ${openNavbar ? "active" : ""}`} id="sidebar">
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
                </nav>

                <main className="main-content">
                <h2>Welcome to the Main Content</h2>
                <p>
                    This is a responsive layout where the sidebar can toggle visibility. On smaller screens, the sidebar hides itself and does not affect the width of the main content.
                </p>
                
                <h3>Responsive Table</h3>
                <div className="table-container">
                    <table className="responsive-table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                        <td>Admin</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>janesmith@example.com</td>
                        <td>User</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Sam Wilson</td>
                        <td>samwilson@example.com</td>
                        <td>Moderator</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </main>    
            </div>

            <footer>
                <p>© 2025 Responsive Sidebar Layout</p>
            </footer>
        </div>
    );
};

export default Dashboard;
