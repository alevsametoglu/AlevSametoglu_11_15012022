import "./HomePage.scss";
import React from "react";
import { Banner, Card } from "../components";

const HomePage = () => {
  return (
    <main className="home-page">
      <Banner />
      <section className="card-list">
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
        <Card
          title="Appartement cosy"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        />
      </section>
    </main>
  );
};
export default HomePage;
