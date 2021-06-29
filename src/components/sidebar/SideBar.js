import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://lh3.googleusercontent.com/g12G6bOSRGazuoTMG5LeTiG5nE28LMksfx4jieyf66ujva-vyy71XYzeQBg9oYEwE1B6pGHY_MWR-hsOgpj9m1yfV0gFbva95ktqLzJqd9Ij_T1MGwC4oje-3QVmJo_RdhS6BB6AdYIYeYOYov-Elv9xrM4TOofaa19JHHqfjADSKDHou1UzEM44tInJ-ETSJyt7o_aVKEFB7-bOBkAhSqJirohBDB-N1Tmf2Kyd5_bakunZn1qWBbCnj2MCg0IvkqK9djP0eVkGrLi47lblCFkd2O2vrIkijL1PUFvuuiZSCjojMJgciRU7EyZpvxnnITjChOEGUY6gL2gRzDgidNzmwuM-WXmuhaRHGB9ZSN7ID2iVB67TCOsESuBPGGZDN2VxhVu3VXgkWypMgV4WarTLiWAwphk5rJCbfo6ufJrzPzRcWcBxHFN9-85H85uyWn_J-2vTw4tcMP8VyoNTnCW6IsS_kPHaK67QF-5IEBiDyUlufLgzWrTPVi7G7xSM7j9KIosyeX1FGv4jzuY-3oLa3ByN6LnTAfWhxN4SzONh269-FuSXP-FLtYW2pztly6UyVGYKF-CCd485eKUE1iz34zqUDhtsj3FlsesYZ2ZV_uXexXIgxUt58JAb111zp8sNlPAN4vwYIu36uZbCZIutAW1EsWGTtURUfl8kWqqmXqux_O6evSpdPCT2I0w4Dy5l_1iVQpphvAbvuYHnBI54=w515-h625-no?authuser=0"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
