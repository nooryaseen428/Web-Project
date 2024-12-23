import React, { useState } from 'react';
// Import images
import DoctorSajedImage from '../assets/DrSajed.png';
import DoctorYahiaImage from '../assets/DrYahia.png';
import DoctorYunisImage from '../assets/DrYunis.png';
import stethoscopeImage from '../assets/Cardiology.jpg';
import AnNajahLogo from '../assets/AnNajah.png';

function CardiologySection() {
    // Array of doctor objects
  const doctors = [
    { name: 'Dr. Sajed Majadlah', image: DoctorSajedImage, appointments: ['Monday 9:00 AM', 'Tuesday 2:00 PM', 'Wednesday 10:00 AM'] },
    { name: 'Dr. Yahya Ismail', image: DoctorYahiaImage, appointments: ['Tuesday 11:00 AM', 'Thursday 1:00 PM', 'Friday 9:30 AM'] },
    { name: 'Dr. Yunis Daralammouri', image: DoctorYunisImage, appointments: ['Monday 3:00 PM', 'Wednesday 1:00 PM', 'Friday 2:00 PM'] },
  ];

    // State for selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  // State for showing/hiding appointments
  const [showAppointments, setShowAppointments] = useState(false);
   // State for menu open/closed state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
        {/* Navigation header */}
      <header className="bg-info text-white p-2">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a href="/" className="navbar-brand">
               {/* Image logo */}
              <img src={AnNajahLogo} alt="An-Najah Logo" style={{ width: '90px', height: '60px' }} />
            </a>
            <h1 className="h4 mb-0 text-white ms-2">An-Najah National University Hospital</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={menuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <div className="container-fluid p-4 bg-light">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Cardiology Section</h2>
                <div className="card-title text-center">
                  <label className="card-title text-center">Select a Doctor:</label>
                  <div className="d-grid gap-2">
                    {doctors.map((doctor, index) => (
                      <button
                        key={index}
                        className={`btn btn-primary d-flex align-items-center ${selectedDoctor === doctor.name ? 'active' : ''}`}
                        onClick={() => setSelectedDoctor(doctor.name)}
                        style={{ gap: '20px' }}
                      >
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                        />
                        {doctor.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-body text-center">
              {/* Heart images */}
                <img src={stethoscopeImage} alt="Stethoscope and heart" className="img-fluid mb-3" />
                <h6 className="bg-info text-white p-2 rounded">Diagnosis and treatment of all cardiac electrical disorders using the following techniques:</h6>
                <ul className="list-group">
                  <li className="list-group-item">Two-dimensional (2D) Ablation System</li>
                  <li className="list-group-item">Three-dimensional (3D) Mapping Ablation System</li>
                  <li className="list-group-item">Treatment through cooling (cryoablation)</li>
                </ul>

                {selectedDoctor && (
                  <div className="mt-3">
                    <h2 className="bg-info text-white p-2 rounded">Appointments</h2>
                    <button
                      className="btn btn-primary mb-3"
                      onClick={() => setShowAppointments(!showAppointments)}
                    >
                      {showAppointments ? 'Hide Appointments' : `See Appointments for ${selectedDoctor}`}
                    </button>

                    {showAppointments && (
                      <ul className="list-group">
                        {doctors.find(doctor => doctor.name === selectedDoctor)?.appointments.map((appointment, index) => (
                          <li key={index} className="list-group-item">{appointment}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardiologySection;