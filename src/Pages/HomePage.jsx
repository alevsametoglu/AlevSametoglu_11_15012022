import "./HomePage.scss";
import React from "react";
import { Banner, Card } from "../components";

const HomePage = () => {
  return (
    <main className="home-page">
      <Banner />
      <section className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};
export default HomePage;
