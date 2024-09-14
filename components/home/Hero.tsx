"use client";
import React, { useEffect } from "react";
export default function Hero() {
  useEffect(() => {}, []);

  return (
    <div className="hero-container">
      <div className="gradient-container">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="gradient-3" />
        <div className="gradient-4" />
      </div>
      <div className="app-container">
        <div className="hero-content flex flex-col py-8 gap-0">
          <h2 className="hero-text-sub hero-text-sub-bold">Hi! I&apos;m</h2>
          <div className="text-center">
            <span className="hero-text">Praw</span>
            <span className="hero-text">sang</span>
          </div>
          <div className="flex justify-end">
            <div className="hero-text-sub flex flex-col gap-1">
              <h2>A</h2>
              <div className="flex gap-4">
                <h2>Front</h2>
                <h2>-</h2>
                <h2>end</h2>
              </div>
              <h2>Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
