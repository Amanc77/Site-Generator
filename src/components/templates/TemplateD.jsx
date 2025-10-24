import { useEffect } from "react";
import { Mail, Github, Twitter } from "lucide-react";

const TemplateD = ({ data }) => {
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
    link.id = "dynamic-font-template-d";

    const prev = document.getElementById("dynamic-font-template-d");
    if (prev) prev.remove();

    document.head.appendChild(link);

    return () => {
      const current = document.getElementById("dynamic-font-template-d");
      if (current) current.remove();
    };
  }, [fontFamily]);

  return (
    <div
      style={{
        backgroundColor,
        fontFamily: `"${fontFamily}", sans-serif`,
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "3rem",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        }}
      >
        {enableProfilePicture && imageUrl && (
          <div
            style={{
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <img
              src={imageUrl}
              alt={name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `4px solid ${primaryColor}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "50%",
                transform: "translateX(50%)",
                width: "40px",
                height: "40px",
                backgroundColor: primaryColor,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Mail size={16} color="white" />
            </div>
          </div>
        )}

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: primaryColor,
            marginBottom: "1rem",
          }}
        >
          {name}
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          {intro}
        </p>

        {displaySocialLinks && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
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
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: secondaryColor,
                  color: "white",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                <Twitter size={16} />
                Twitter
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
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            <a
              href={`mailto:${email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: primaryColor,
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateD;
