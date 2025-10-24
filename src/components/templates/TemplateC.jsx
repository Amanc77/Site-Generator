import { useEffect } from "react";
import { Mail, Github, Twitter } from "lucide-react";

const TemplateC = ({ data }) => {
  const {
    name,
    intro,
    email,
    twitter,
    github,
    imageUrl,
    enableProfilePicture,
    displaySocialLinks,
    primaryColor,
    secondaryColor,
    fontFamily,
    backgroundColor,
  } = data;

  useEffect(() => {
    const safeFont = fontFamily.replace(/\s+/g, "+");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${safeFont}:wght@400;500;600;700&display=swap`;
    link.id = "dynamic-font-template-c";

    const prev = document.getElementById("dynamic-font-template-c");
    if (prev) prev.remove();

    document.head.appendChild(link);

    return () => {
      const current = document.getElementById("dynamic-font-template-c");
      if (current) current.remove();
    };
  }, [fontFamily]);

  return (
    <div
      style={{
        backgroundColor,
        fontFamily: `"${fontFamily}", sans-serif`,
        minHeight: "500px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: enableProfilePicture ? "1fr 1fr" : "1fr",
          gap: "3rem",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: enableProfilePicture ? "left" : "center" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: primaryColor,
              marginBottom: "1rem",
            }}
          >
            {name}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#666",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            {intro}
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              backgroundColor: primaryColor,
              color: "white",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>

        {enableProfilePicture && imageUrl && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imageUrl}
              alt={name}
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        )}
      </div>

      {displaySocialLinks && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                backgroundColor: secondaryColor,
                color: "white",
                borderRadius: "50%",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Twitter size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                backgroundColor: "#333",
                color: "white",
                borderRadius: "50%",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateC;
