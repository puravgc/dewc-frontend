import React, { useEffect, useState } from "react";
import "./Projectsedit.css";

const Articleedit = () => {
  const [articles, setarticles] = useState([]);
  const [images, setImages] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);
  const [title, settitle] = useState("");
  const [fileInputEvent, setFileInputEvent] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handleDelete = (_id) => {
    fetch(`https://dewc-vercel.vercel.app/deletearticle/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedArticles = articles.filter(
          (article) => article._id !== _id
        );
        setarticles(updatedArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpload = () => {
    setLoading(true);
    const files = fileInputEvent.target.files;
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "xoogqahj");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dvad0qi7r/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageLinks((prevImageLinks) => [...prevImageLinks, data.secure_url]);
      setImages((prevImages) => [...prevImages, data.secure_url]);
      return data.secure_url;
    });

    Promise.all(uploadPromises)
      .then((imageUrls) => {
        console.log(imageUrls);
        postArticle(imageUrls);
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  const postArticle = (imageUrls) => {
    fetch("https://dewc-vercel.vercel.app/createarticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        photos: imageUrls,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        alert("Article created successfully");
        console.log(data);
        window.location.reload();
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  return (
    <div className="projedit">
      <div className="addproject">
        <div className="titleinp">
          <input
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </div>
        <div className="imageinp">
          <div>
            <input
              type="file"
              multiple
              onChange={(e) => setFileInputEvent(e)}
            />
            <div>
              {imageLinks.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  style={{
                    width: "100px",
                    height: "auto",
                    marginRight: "10px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <button className="goback" onClick={handleUpload}>
            Add Article
          </button>
        </div>
      </div>
      <ol className="eachproj">
        {articles.map((article) => (
          <div>
            <li key={article._id}>
              <div className="proj">
                <h2>{article.title}</h2>
                <button
                  className="delbutton"
                  onClick={() => {
                    handleDelete(article._id);
                  }}
                >
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </div>

              <p>{article.description}</p>

              <div className="projimage">
                {article.photos.map((photo) => (
                  <img src={photo} alt="" />
                ))}
              </div>
            </li>
          </div>
        ))}
      </ol>
      {loading && (
        <div className="loading">
          <button disabled type="button" className="loading-button">
            <svg
              aria-hidden="true"
              role="status"
              className="spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
};

export default Articleedit;
