import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about">

      
      <section
        className="about-hero"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg")`
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>GYMLANDga Xush Kelibsiz</h1>
          <p>Sizning sog‘lom turmush va sport sayohatingiz shu yerda boshlanadi!</p>
        </div>
      </section>

      
      <section className="about-section">
        <h2>Biz haqimizda</h2>
        <p>
          GYMLAND sizning sport va fitness maqsadlaringizga erishishingizga yordam beradi.
          Biz yuqori sifatli uskunalar va mutaxassislar bilan xizmat ko‘rsatamiz.
          Har bir mijozga individual yondashuv va motivatsiya beramiz.
        </p>
        <p>
          Klubimizda zamonaviy trenajorlar, professional murabbiylar,
          turli fitness kurslari va sog‘lom turmush uchun maslahatlar mavjud.
          Sizni faol va sog‘lom hayot tarziga olib chiqamiz!
        </p>
        <img
          src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
          alt="Gym"
          className="about-img"
        />
      </section>
    </div>
  );
}

export default About;
