import React, { useEffect, useState } from "react";
import "../index.css";
import articleLogo from "../assets/logo.png";

const Article = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dewc-vercel.vercel.app/getarticle", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setarticles(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div class="articleContainer" id="articleSection">
      <div class="articleContent">
        <h2 class="articleTitle">News Article/Case Study</h2>
        <div class="articleLogo">
          <img src={articleLogo} alt="DWEC" />
        </div>

        <div class="articleHolder">
          {articles.map((article) => (
            <div class="articleItem">
              <h2>{article.title}</h2>
              {article.photos.map((photo)=>(
                <img src={photo} alt="news article" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
