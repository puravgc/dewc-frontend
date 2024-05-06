import React, { useEffect, useState } from "react";
import "../index.css";
import galleryLogo from "../assets/logo.png";


const Gallery = () => {

  const [galleries, setgalleries] = useState([])

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("https://dewc-vercel.vercel.app/getgallery", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setgalleries(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchGallery();
  }, []);

  return (
    <section class="galleryContainer" id="gallerySection">
      <div class="galleryContent">
        <h2 class="galleryTitle">Gallery</h2>
        <div class="galleryLogo">
          <img src={galleryLogo} alt="DWEC" />
        </div>
        <div class="galleryHolder">
          {
            galleries.map((gallery,key)=>(
              <div class="galleryItem">
            <img src={gallery.photo} key={key} alt="" />
            <span class="title">{gallery.title}</span>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
