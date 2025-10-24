import { useEffect } from "react";
import { Mail, Github, Twitter } from "lucide-react";

const TemplateB = ({ data }) => {
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
    link.id = "dynamic-font-template-b";

    const prev = document.getElementById("dynamic-font-template-b");
    if (prev) prev.remove();

    document.head.appendChild(link);

    return () => {
      const current = document.getElementById("dynamic-font-template-b");
      if (current) current.remove();
    };
  }, [fontFamily]);

  return (
    <div
      style={{
        backgroundColor,
        fontFamily: `"${fontFamily}", sans-serif`,
        minHeight: "500px",
        display: "grid",
        gridTemplateColumns: enableProfilePicture ? "1fr 1fr" : "1fr",
      }}
    >
      {enableProfilePicture && imageUrl && (
        <div
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
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
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      )}

      <div
        style={{
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          {intro}
        </p>

        {displaySocialLinks && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <a
              href732={`mailto:${email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                backgroundColor: primaryColor,
                color: "white",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "fit-content",
              }}
            >
              <Mail size={20} />
              {email}
            </a>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.25rem",
                    backgroundColor: secondaryColor,
                    color: "white",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Twitter size={18} />
                  Twitter
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.25rem",
                    backgroundColor: "#333",
                    color: "white",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateB;
