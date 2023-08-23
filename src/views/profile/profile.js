/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./profile.css";
import axios from "axios";
import menubar from "../../assets/Colorhuntimg/navbaricon/menu bar.svg";

function profile(props) {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/dashboard");
    console.log("CLicked");
  };
  const profileeditform = () => {
    navigate("/profileedit");
  };

  const [profiledata, setProfiledata] = useState([]);
  const [file, setFile] = useState("");

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
    // console.log(event.target.files[0])
    console.log(file);
  };
  const handlesave = () => {
    const format = new FormData();
    format.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = axios.post("http://localhost:4000/uploadimage", format, config);
    console.log(res.data);
  };

  useEffect(() => {
    axios.get("http://localhost:4000/getParty").then((response) => {
      setProfiledata(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <link rel="stylesheet" href="./global.css" />
      <link rel="stylesheet" href="./index.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Glory:wght@600;700&display=swap"
      />
      <div className="profile">
        <div className="profile-child"></div>
        <img
          className="menu-bar-icon"
          alt=""
          src={menubar}
          onClick={routeChange}
        />

        <div className="frame-parent">
          <div className="rectangle-wrapper">
            {profiledata.map((item) =>
              file ? (
                <div key={item.Id}>
                  <img
                    className="frame-child"
                    alt=""
                    src={`/uploads/${item.profile_img}`}
                  />
                </div>
              ) : (
                <img className="frame-child" alt="" src="/profile.png" />
              )
            )}
          </div>
          <div className="rectangle-parent">
            <div className="group-child">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" rx="5" fill="white" />
                <path
                  d="M16.1871 11.9728L10.8192 17.3388L10.4682 18.5358L11.6412 18.1968L17.0269 12.8129L16.1871 11.9728ZM17.1029 11.0572L17.9427 11.8968L18.7255 11.1142C18.7811 11.0586 18.8124 10.9831 18.8124 10.9044C18.8124 10.8256 18.7811 10.7501 18.7255 10.6945L18.305 10.2747C18.2493 10.2191 18.1738 10.1878 18.095 10.1878C18.0163 10.1878 17.9408 10.2191 17.8851 10.2747L17.1035 11.0572H17.1029ZM19.1454 9.43518L19.5653 9.85494C19.8436 10.1333 20 10.5108 20 10.9044C20 11.2979 19.8436 11.6754 19.5653 11.9538L12.2648 19.2524L9.75846 19.9768C9.6563 20.0062 9.5481 20.0077 9.44517 19.9811C9.34224 19.9545 9.24834 19.9007 9.17328 19.8254C9.09822 19.7501 9.04475 19.6561 9.01845 19.5531C8.99216 19.4501 8.994 19.342 9.02378 19.2399L9.76499 16.7137L17.0465 9.43459C17.3249 9.15632 17.7025 9 18.0962 9C18.4899 9 18.8675 9.15632 19.146 9.43459L19.1454 9.43518Z"
                  fill="black"
                />
              </svg>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                name="image"
              />
            </div>
          </div>
        </div>
        <b
          className="upload-image"
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          Upload Image
        </b>
        <div className="rectangle-group" id="groupContainer3">
          <div className="group-item"></div>
          <div className="download-1-1-parent">
            <b className="log-out" onClick={handlesave}>
              Save
            </b>
          </div>
        </div>

        {profiledata.map((item) => (
          <div key={item.Id}>
            <div className="nirav-sir-parent mx-3">
              <div className="nirav-sir">{item.Name}</div>
              <div className="group-inner"></div>
            </div>
            <div className="parent mx-3">
              <div className="nirav-sir">{item.PhoneNumber}</div>
              <div className="group-inner"></div>
            </div>
            <div className="ahmedabad-parent mx-3">
              <div className="ahmedabad">{item.City}</div>
              <div className="group-child2"></div>
            </div>
            <div className="gujarat-parent mx-3">
              <div className="ahmedabad">{item.State}</div>
              <div className="group-child1"></div>
            </div>
            <div className="india-parent mx-3">
              <div className="ahmedabad">{item.Country}</div>
              <div className="group-child2"></div>
            </div>
            <div className="group mx-3">
              <div className="ahmedabad">{item.PinCode}</div>
              <div className="group-child1"></div>
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-co-parent mx-3">
              <div className="lorem-ipsum-dolor">{item.Address}</div>
              <div className="group-inner2"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default profile;
