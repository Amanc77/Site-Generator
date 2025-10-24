import { Mail, Github, Twitter } from "lucide-react";

const TemplateA = ({ data }) => {
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

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        fontFamily: fontFamily,
        minHeight: "500px",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        {enableProfilePicture && imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              margin: "0 auto 2rem",
              border: `4px solid ${primaryColor}`,
              boxShadow: `0 10px 30px rgba(0,0,0,0.1)`,
            }}
          />
        )}

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

        {displaySocialLinks && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <a
              href={`mailto:${email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: primaryColor,
                color: "white",
                borderRadius: "9999px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              <Mail size={20} />
              Email
            </a>

            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
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
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
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
    </div>
  );
};

export default TemplateA;
