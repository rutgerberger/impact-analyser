import React from 'react'
import Button from './components/Button';
import NavBar from './components/NavBar';
import './components/css/profile.css';

function ProfilePage() {

    return (
    <div className='styling'>
        <NavBar />
        <h1 className="profile-h">Profile</h1>
            <div className="profile-header-section">
                <div className="">
                    <div className=""> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                    <h4>Antoine van Voren</h4>
                    <p>Web Designer</p>
                </div>
            </div>
            <div className="profile-section">
                <div className="profile-information-container">
                    <h3 className="profile-h">Information</h3>
                    <div className="">
                        <p className="profile-h">Email</p>
                        <h5 className="profile-h">antoinevanvoren@gmail.com</h5>
                    </div>
                    <div className="">
                        <p className="profile-h">Phone</p>
                        <h5 className="profile-h">0626854141</h5>
                    </div>
                </div>
                <div className="profile-projects-container">
                    <h3 className="profile-h">Projects</h3>
                    <div className="">
                        <div className="c">
                            <p className="profile-h">Recent</p>
                            <h5 className="profile-h">Update Database</h5>
                        </div>
                        <div className="">
                            <p className="profile-h">Most Viewed</p>
                            <h5 className="profile-h">Update Database</h5>
                        </div>
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="profile-title">
                    <h3 className="profile-h">My Tasks</h3>
                    <small>December 12, 2021</small>
                    </div>
                    <ul className="profile-tasks">
                        <li className="profile-one red">
                            <span className="profile-task-title">Make New Icon</span>
                            <span className="profile-task-project">Web App</span>

                        </li>
                        <li className="profile-one red">
                            <span className="profile-task-title">Catch up with Brian</span>
                            <span className="profile-task-project">Mobile Project</span>

                        </li>
                        <li className="profile-one red">
                            <span className="profile-task-title">Design Explorations</span>
                            <span className="profile-task-project">Company Web site</span>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
    
    )
}

export default ProfilePage