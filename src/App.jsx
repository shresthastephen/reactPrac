import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Jobs from "./components/Jobs";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Card></Card>
      <Jobs></Jobs>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
}

export default App;
