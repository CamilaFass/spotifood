import React from "react";
import { useEffect } from "react";
import "./styles/welcome.css";
import icon from "../assets/spotifyicon.svg";

function Welcome() {
  // function to handle click on login button
  function handleClick(event) {
    event.preventDefault();

    const redirect_uri = "http://localhost:3000";

    // redirect to spotify login page
    window.open(
      "https://accounts.spotify.com/authorize?client_id=71cd775b7b2142ceabacbd1df8545ea5&response_type=token&redirect_uri=" +
        encodeURIComponent(process.env.REACT_APP_URL),
      "_self"
    );
  }

  // execute when component is mounted
  useEffect(() => {
    // get token, token_type and expires_in from url
    const searchParams = new URLSearchParams(window.location.hash.substring(1));
    const token = searchParams.get("access_token");
    const tokenType = searchParams.get("token_type");
    const expires = searchParams.get("expires_in");

    // access token exists: save data on browser local storage and redirect
    if (token !== null) {
      localStorage.setItem("access_token", token);
      localStorage.setItem("token_type", tokenType);
      localStorage.setItem("expires_in", expires);

      // redirect to home page
      window.history.pushState({ urlPath: "/authorized" }, "", "/authorized");
      window.location.reload();
    }
  }, []);

  return (
    <div>
      <img alt="logo" src={icon} style={{ width: 400, maxWidth: "100%" }}></img>
      <p>Welcome to SPOTiFOOD! Please login with your Spotify account below</p>
      <button className="login" onClick={handleClick}>
        ENTER HERE
      </button>
    </div>
  );
}

export { Welcome };
