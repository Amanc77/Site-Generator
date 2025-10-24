export const generateStaticCode = (data) => {
  const {
    name,
    intro,
    email,
    twitter,
    github,
    imageUrl,
    template,
    enableProfilePicture,
    displaySocialLinks,
    primaryColor,
    secondaryColor,
    fontFamily,
    backgroundColor,
  } = data;

  const safeFont = fontFamily.replace(/\s+/g, "+");
  const fontLink = `https://fonts.googleapis.com/css2?family=${safeFont}:wght@400;500;600;700&display=swap`;

  switch (template) {
    case "A":
      return generateTemplateA({
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
        fontLink,
      });
    case "B":
      return generateTemplateB({
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
        fontLink,
      });
    case "C":
      return generateTemplateC({
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
        fontLink,
      });
    case "D":
      return generateTemplateD({
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
        fontLink,
      });
    default:
      return generateTemplateA({
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
        fontLink,
      });
  }
};

const generateTemplateA = ({
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
  fontLink,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontLink}" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: '${fontFamily}', sans-serif;
      background-color: ${backgroundColor};
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    
    .container {
      max-width: 600px;
      text-align: center;
    }
    
    ${
      enableProfilePicture
        ? `
    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 2rem;
      border: 4px solid ${primaryColor};
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      display: block;
    }
    `
        : ""
    }
    
    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 1rem;
    }
    
    .intro {
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    ${
      displaySocialLinks
        ? `
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }
    
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background-color: ${primaryColor};
      color: white;
      border-radius: 9999px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .btn-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      color: white;
    }
    
    .btn-icon:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .btn-twitter {
      background-color: ${secondaryColor};
    }
    
    .btn-github {
      background-color: #333;
    }
    `
        : ""
    }
    
    @media (max-width: 640px) {
      h1 {
        font-size: 2rem;
      }
      
      .intro {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    ${
      enableProfilePicture && imageUrl
        ? `<img src="${imageUrl}" alt="${name}" class="profile-image">`
        : ""
    }
    
    <h1>${name}</h1>
    <p class="intro">${intro}</p>
    
    ${
      displaySocialLinks
        ? `
    <div class="social-links">
      <a href="mailto:${email}" class="btn-primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        Email
      </a>
      
      ${
        twitter
          ? `
      <a href="${twitter}" target="_blank" rel="noopener noreferrer" class="btn-icon btn-twitter">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      </a>
      `
          : ""
      }
      
      ${
        github
          ? `
      <a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-icon btn-github">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      `
          : ""
      }
    </div>
    `
        : ""
    }
  </div>
</body>
</html>`;
};

const generateTemplateB = ({
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
  fontLink,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontLink}" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: '${fontFamily}', sans-serif;
      background-color: ${backgroundColor};
      min-height: 100vh;
    }
    
    .container {
      display: grid;
      grid-template-columns: ${enableProfilePicture ? "1fr 1fr" : "1fr"};
      min-height: 100vh;
    }
    
    ${
      enableProfilePicture
        ? `
    .image-section {
      background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    
    .profile-image {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    `
        : ""
    }
    
    .content-section {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 1rem;
    }
    
    .intro {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    ${
      displaySocialLinks
        ? `
    .social-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      background-color: ${primaryColor};
      color: white;
      border-radius: 12px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      width: fit-content;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .secondary-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      color: white;
    }
    
    .btn-secondary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .btn-twitter {
      background-color: ${secondaryColor};
    }
    
    .btn-github {
      background-color: #333;
    }
    `
        : ""
    }
    
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
      
      ${
        enableProfilePicture
          ? `
      .image-section {
        min-height: 400px;
      }
      
      .profile-image {
        width: 200px;
        height: 200px;
      }
      `
          : ""
      }
      
      .content-section {
        padding: 2rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .intro {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    ${
      enableProfilePicture && imageUrl
        ? `
    <div class="image-section">
      <img src="${imageUrl}" alt="${name}" class="profile-image">
    </div>
    `
        : ""
    }
    
    <div class="content-section">
      <h1>${name}</h1>
      <p class="intro">${intro}</p>
      
      ${
        displaySocialLinks
          ? `
      <div class="social-links">
        <a href="mailto:${email}" class="btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          ${email}
        </a>
        
        <div class="secondary-links">
          ${
            twitter
              ? `
          <a href="${twitter}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            Twitter
          </a>
          `
              : ""
          }
          
          ${
            github
              ? `
          <a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          `
              : ""
          }
        </div>
      </div>
      `
          : ""
      }
    </div>
  </div>
</body>
</html>`;
};

const generateTemplateC = ({
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
  fontLink,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontLink}" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: '${fontFamily}', sans-serif;
      background-color: ${backgroundColor};
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hero-container {
      display: grid;
      grid-template-columns: ${enableProfilePicture ? "1fr 1fr" : "1fr"};
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
      align-items: center;
      width: 100%;
    }
    
    .hero-text {
      text-align: ${enableProfilePicture ? "left" : "center"};
    }
    
    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 1rem;
    }
    
    .intro {
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background-color: ${primaryColor};
      color: white;
      border-radius: 50px;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .hero-image {
      width: 300px;
      height: 300px;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    ${
      displaySocialLinks
        ? `
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-color: ${secondaryColor};
      color: white;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .social-github {
      background-color: #333;
    }
    `
        : ""
    }
    
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      h1 {
        font-size: 2.5rem;
      }
      
      .intro {
        font-size: 1.1rem;
      }
      
      .hero-image {
        width: 250px;
        height: 250px;
      }
    }
  </style>
</head>
<body>
  <div class="hero-container">
    <div class="hero-text">
      <h1>${name}</h1>
      <p class="intro">${intro}</p>
      <a href="mailto:${email}" class="cta-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        Get In Touch
      </a>
    </div>
    
    ${
      enableProfilePicture && imageUrl
        ? `
    <div class="image-container">
      <img src="${imageUrl}" alt="${name}" class="hero-image">
    </div>
    `
        : ""
    }
  </div>
  
  ${
    displaySocialLinks
      ? `
  <div class="social-links">
    ${
      twitter
        ? `
    <a href="${twitter}" target="_blank" rel="noopener noreferrer" class="social-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    </a>
    `
        : ""
    }
    ${
      github
        ? `
    <a href="${github}" target="_blank" rel="noopener noreferrer" class="social-icon social-github">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
    `
        : ""
    }
  </div>
  `
      : ""
  }
</body>
</html>`;
};

const generateTemplateD = ({
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
  fontLink,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontLink}" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: '${fontFamily}', sans-serif;
      background-color: ${backgroundColor};
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    
    .card {
      background: white;
      border-radius: 24px;
      padding: 3rem;
      max-width: 500px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    
    .profile-section {
      position: relative;
      margin-bottom: 2rem;
    }
    
    ${
      enableProfilePicture
        ? `
    .profile-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid ${primaryColor};
      display: block;
      margin: 0 auto;
    }
    
    .email-badge {
      position: absolute;
      bottom: -10px;
      right: 50%;
      transform: translateX(50%);
      width: 40px;
      height: 40px;
      background-color: ${primaryColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .email-icon {
      width: 16px;
      height: 16px;
      fill: white;
    }
    `
        : ""
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 1rem;
    }
    
    .intro {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    ${
      displaySocialLinks
        ? `
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .social-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      color: white;
      border-radius: 50px;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .social-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    
    .btn-twitter {
      background-color: ${secondaryColor};
    }
    
    .btn-github {
      background-color: #333;
    }
    
    .btn-email {
      background-color: ${primaryColor};
    }
    
    .social-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    `
        : ""
    }
    
    @media (max-width: 640px) {
      .card {
        padding: 2rem;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .intro {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    ${
      enableProfilePicture && imageUrl
        ? `
    <div class="profile-section">
      <img src="${imageUrl}" alt="${name}" class="profile-image">
      <div class="email-badge">
        <svg class="email-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
    </div>
    `
        : ""
    }
    
    <h1>${name}</h1>
    <p class="intro">${intro}</p>
    
    ${
      displaySocialLinks
        ? `
    <div class="social-links">
      ${
        twitter
          ? `
      <a href="${twitter}" target="_blank" rel="noopener noreferrer" class="social-button btn-twitter">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
        Twitter
      </a>
      `
          : ""
      }
      ${
        github
          ? `
      <a href="${github}" target="_blank" rel="noopener noreferrer" class="social-button btn-github">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        GitHub
      </a>
      `
          : ""
      }
      <a href="mailto:${email}" class="social-button btn-email">
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        Email
      </a>
    </div>
    `
        : ""
    }
  </div>
</body>
</html>`;
};
