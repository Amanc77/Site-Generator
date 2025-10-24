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

  const fontLink = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
    " ",
    "+"
  )}:wght@400;500;600;700&display=swap`;

  if (template === "A") {
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
  } else {
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
  console.log(fontFamily);
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
