import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      
      <video
        className="home-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://media.istockphoto.com/id/1378689161/video/man-training-boxing-with-trainer.mp4?s=mp4-640x640-is&k=20&c=RJVvGU7z1HDKHfN0VPulKWGnfXeFquNJzDal75ZhcEM=" // direct mp4 link ishlating
          type="video/mp4"
        />
      </video>

      
      <div className="home-overlay"></div>

      
      <div className="home-content">
        <h1>GYMLANDga Xush Kelibsiz</h1>
        <p>Sizning sog‘lom turmushingiz uchun sifatli anjomlar shu yerda!</p>

        <button onClick={() => navigate("/product")}>
          Xarid qilish
        </button>
      </div>
    </div>
  );
}

export default Home;
