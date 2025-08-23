// export const sampleBlogs = [
//   {
//     id: 1,
//     title: "Getting Started with React Development",
//     // ... rest of the blog object
//   },
//   {
//     id: 2,
//     title: "AI Integration in Modern Web Development",
//     // ... rest of the blog object
//   },
//   {
//     id: 3,
//     title: "DevOps Best Practices for Startups",
//     // ... rest of the blog object
//   }
// ];

export const sampleBlogs = [
{
  id: 1,
  title: "Installing PowerShell on Windows with Winget",
  content: `
## Installing PowerShell on Windows

This guide covers how to install PowerShell 7 on Windows using various methods, with a focus on using the **Winget Package Manager**, which is the recommended approach.

### Recommended: Using Winget

The **winget** command-line tool allows you to easily discover, install, and upgrade applications on Windows. It is the simplest and recommended way to install PowerShell.

To find the latest available version of PowerShell, run this command in your terminal:

\`\`\`bash
winget search Microsoft.PowerShell
\`\`\`

You will see an output listing both the stable and preview versions.

To install the latest stable version of PowerShell, use the following command:

\`\`\`bash
winget install --id Microsoft.PowerShell --source winget
\`\`\`

If you want to try the latest preview version, use this command instead:

\`\`\`bash
winget install --id Microsoft.PowerShell.Preview --source winget
\`\`\`

### Other Installation Methods

While Winget is recommended, there are several other ways to install PowerShell depending on your needs.

#### 1. MSI Package
This is the best option for Windows Servers or enterprise environments. The MSI installer handles all prerequisites, adds PowerShell to the Windows PATH, and creates a Start Menu shortcut.

- Download the MSI package from the official [PowerShell GitHub releases page](https://github.com/PowerShell/PowerShell/releases).
- Double-click the file and follow the installation prompts.

#### 2. ZIP Package
The ZIP package is ideal for "side-loading" or installing multiple versions without affecting the system-wide installation. This method is also used for ARM-based systems like the Surface Pro X.

- Download the ZIP package from the GitHub releases page.
- Unzip the contents to a folder of your choice.
- Run \`pwsh.exe\` from that folder.

#### 3. Microsoft Store
PowerShell is also available for installation directly from the Microsoft Store. This method provides automatic updates but comes with some limitations due to the sandboxed environment of Store packages.

### Upgrading an Existing Installation

Upgrading PowerShell is just as easy with Winget. First, check if an upgrade is available:

\`\`\`bash
winget list --id Microsoft.PowerShell --upgrade-available
\`\`\`

If an upgrade is found, run the following command to update your installation:

\`\`\`bash
winget upgrade --id Microsoft.PowerShell
\`\`\`

Happy scripting!
`,
  excerpt: "Learn how to install and upgrade PowerShell on Windows using the recommended Winget package manager, as well as other methods like MSI and ZIP packages.",
  category: "Development",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-22",
  readTime: "6 min read",
  tags: ["PowerShell", "Windows", "Winget", "DevOps"]
},
{
  id: 2,
  title: "Setting Your Commit Email Address on GitHub",
  content: `
## Why Your Commit Email Matters

When you make a commit on GitHub, the email address associated with your account is used to identify you as the author. It's crucial to configure this correctly to ensure your contributions are properly attributed to your profile. You can manage this setting both on the GitHub website and locally in your Git configuration.

---

## Setting Your Email for Web-Based Commits

If you edit files directly on GitHub.com, the email address in your profile settings will be used.

1.  Navigate to your GitHub **Settings**.
2.  In the "Access" section of the sidebar, click on **Emails**.
3.  Choose your desired email from the **Primary email address** dropdown.

**Note on Privacy:** If you have enabled the "Keep my email addresses private" feature, your commit author email will be a no-reply address provided by GitHub (e.g., \`ID+username@users.noreply.github.com\`) and cannot be changed for web-based actions.

---

## Setting Your Email in Your Local Git Config

For commits you push from your local machine, you need to configure your email address directly within Git. This setting will override your primary email on GitHub for command-line commits.

### Setting Your Email for All Repositories (Global)

To set a default email address for every repository on your computer, use the \`--global\` flag. This is the most common approach.

Open your terminal and run the following command:
\`\`\`bash
git config --global user.email "your_email@example.com"
\`\`\`
Replace \`your_email@example.com\` with the email address you want to use.

### Setting Your Email for a Single Repository

If you need to use a different email address for a specific project (e.g., a work project), you can set it locally for just that repository.

1.  Open your terminal.
2.  Navigate to the directory of the repository you want to configure.
\`\`\`bash
cd /path/to/your/repo
\`\`\`
3.  Run the config command without the \`--global\` flag:
\`\`\`bash
git config user.email "your_work_email@example.com"
\`\`\`

This local setting will take precedence over your global configuration for this repository only.

By keeping your commit emails consistent, you ensure a clean and accurate contribution history on your GitHub profile.  GitKraken, for example, is a powerful tool.
`,
  excerpt: "Learn how to correctly configure your commit email address for both web-based edits on GitHub and local commits pushed from your command line.",
  category: "DevOps",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-22",
  readTime: "4 min read",
  tags: ["GitHub", "Git", "Version Control", "Email"]
},
{
    id: 3,
    title: "Getting Started with React Development",
    content: `React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React development and how to create modern web applications.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

### Key Features

1. **Component-Based Architecture**: Build encapsulated components that manage their own state
2. **Virtual DOM**: Efficient updating and rendering of components
3. **Unidirectional Data Flow**: Makes applications more predictable and easier to debug
4. **JSX Syntax**: Write HTML-like syntax in JavaScript

## Setting Up Your Development Environment

To get started with React, you'll need Node.js installed on your machine. Once you have Node.js, you can create a new React application using Create React App:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This will set up a new React project with all the necessary build tools and dependencies.

## Your First Component

Let's create a simple component to understand how React works:

\`\`\`jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
\`\`\`

This component accepts a single "props" object argument with data and returns a React element describing what should appear on the screen.

## State Management

React components can have state, which allows them to respond to user interactions, network responses, and other events:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Next Steps

Now that you understand the basics, you can explore more advanced topics like:
- Component lifecycle methods
- Context API for state management
- React Router for navigation
- Testing React applications

Happy coding!`,
    excerpt: "Learn the fundamentals of React development and start building modern web applications with this comprehensive guide.",
    category: "Development",
    author: "Aditya Tech. & Devoops.",
    date: "2025-08-20",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development", "Frontend"]
  },
  {
    id: 4,
    title: "AI Integration in Modern Web Development",
    content: `Artificial Intelligence is revolutionizing how we build and interact with web applications. From chatbots to personalized recommendations, AI is becoming an integral part of modern web development.

## The Current AI Landscape

The integration of AI in web development has opened up numerous possibilities for creating more intelligent and responsive applications. Today's developers have access to powerful AI tools and APIs that were once only available to large tech companies.

### Popular AI Integration Methods

1. **Machine Learning APIs**: Services like Google Cloud AI, AWS AI, and Azure Cognitive Services
2. **Natural Language Processing**: Chatbots, sentiment analysis, and content generation
3. **Computer Vision**: Image recognition, object detection, and automated tagging
4. **Recommendation Systems**: Personalized content and product suggestions

## Implementing AI Features

### Chatbot Integration

One of the most common AI integrations is adding a chatbot to your website:

\`\`\`javascript
// Example using a hypothetical AI service
const chatbot = new AIAssistant({
  apiKey: 'your-api-key',
  model: 'gpt-4',
  context: 'You are a helpful assistant for a tech website'
});

async function handleUserMessage(message) {
  const response = await chatbot.generateResponse(message);
  return response;
}
\`\`\`

### Personalized Recommendations

Implementing AI-powered recommendations can significantly improve user engagement:

\`\`\`javascript
const recommendationEngine = {
  async getRecommendations(userId, preferences) {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, preferences })
    });
    return response.json();
  }
};
\`\`\`

## Best Practices

When integrating AI into your web applications, consider these best practices:

1. **Privacy First**: Always respect user data and implement proper consent mechanisms
2. **Performance**: AI operations can be resource-intensive, so optimize for speed
3. **Fallback Options**: Always have non-AI alternatives for critical features
4. **Transparency**: Let users know when they're interacting with AI

## Future Trends

The future of AI in web development looks promising with emerging technologies like:
- Edge AI for faster processing
- Multimodal AI combining text, image, and voice
- Autonomous coding assistants
- Advanced personalization engines

AI is not just a trend—it's becoming a fundamental part of how we build web experiences. Start experimenting with AI APIs today to stay ahead of the curve.`,
    excerpt: "Explore how AI is transforming web development and learn practical ways to integrate intelligent features into your applications.",
    category: "AI & Tech",
    author: "Aditya Tech. & Devoops.",
    date: "2025-08-18",
    readTime: "12 min read",
    tags: ["AI", "Machine Learning", "Web Development", "APIs"]
  },
  {
    id: 5,
    title: "DevOps Best Practices for Startups",
    content: `DevOps practices can make or break a startup's technical success. In this guide, we'll explore essential DevOps practices that every startup should implement from day one.

## Why DevOps Matters for Startups

Startups operate in a fast-paced environment where speed to market and reliability are crucial. DevOps practices help startups achieve both by streamlining development, deployment, and operations processes.

### Key Benefits

1. **Faster Time to Market**: Automated pipelines reduce deployment time
2. **Improved Reliability**: Consistent environments reduce bugs and downtime
3. **Better Collaboration**: Breaks down silos between development and operations
4. **Cost Efficiency**: Automated processes reduce manual labor and errors

## Essential DevOps Practices

### 1. Version Control Everything

Use Git for all your code, configuration, and infrastructure:

\`\`\`bash
# Initialize a new repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
\`\`\`

### 2. Implement CI/CD Pipelines

Set up continuous integration and deployment:

\`\`\`yaml
# Example GitHub Actions workflow
name: CI/CD Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
    - name: Deploy to production
      if: github.ref == 'refs/heads/main'
      run: npm run deploy
\`\`\`

### 3. Infrastructure as Code

Manage your infrastructure using code:

\`\`\`yaml
# Docker Compose example
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  database:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret
\`\`\`

### 4. Monitoring and Logging

Implement comprehensive monitoring from the start:

\`\`\`javascript
// Example logging setup
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.info('Application started');
\`\`\`

## Tools for Startup DevOps

### Essential Tools

1. **Version Control**: GitHub, GitLab, or Bitbucket
2. **CI/CD**: GitHub Actions, GitLab CI, or Jenkins
3. **Containerization**: Docker and Kubernetes
4. **Monitoring**: Prometheus, Grafana, or New Relic
5. **Cloud Platforms**: AWS, Google Cloud, or Azure

### Budget-Friendly Options

Many tools offer free tiers perfect for startups:
- GitHub Actions: 2000 minutes/month free
- Heroku: Free tier for small apps
- MongoDB Atlas: Free 512MB cluster
- Netlify: Free hosting for static sites

## Common Pitfalls to Avoid

1. **Over-engineering**: Start simple and scale as needed
2. **Ignoring Security**: Implement security practices from the beginning
3. **Manual Processes**: Automate repetitive tasks early
4. **Poor Documentation**: Document your processes and architecture

## Getting Started

Start your DevOps journey with these steps:

1. Set up version control for all projects
2. Implement basic CI/CD for your main application
3. Containerize your applications
4. Set up basic monitoring and alerting
5. Create deployment documentation

Remember, DevOps is a journey, not a destination. Start with the basics and gradually improve your processes as your startup grows.`,
    excerpt: "Learn essential DevOps practices that every startup should implement to ensure fast, reliable, and scalable development processes.",
    category: "DevOps",
    author: "Aditya Tech. & Devoops.",
    date: "2025-08-15",
    readTime: "10 min read",
    tags: ["DevOps", "Startups", "CI/CD", "Infrastructure"]
},
{
  id: 6,
  title: "How to Create a New React App",
  content: `
React is a powerful library for building user interfaces, but getting started requires a bit of setup. If you want to build a new app or website with React, the official recommendation is to start with a **full-stack React framework**.

These frameworks integrate the latest React features and provide the tools you need to deploy and scale your application in production.

## Recommended Frameworks

### 1. Next.js (App Router)
Next.js is a robust framework maintained by Vercel that takes full advantage of React's architecture. It enables full-stack applications that can be deployed to any Node.js or Docker hosting provider.

To create a new Next.js app, run the following command:
\`\`\`bash
npx create-next-app@latest
\`\`\`

### 2. React Router (with Vite)
React Router is the most popular routing library for React. When paired with a fast build tool like Vite, it can be used to create a full-stack framework.

To create a new project with React Router, run:
\`\`\`bash
npx create-react-router@latest
\`\`\`

### 3. Expo (for Native Apps)
If you're building a mobile app, Expo is the way to go. It's a framework for creating universal Android, iOS, and web apps with truly native user interfaces.

To start a new Expo project, use this command:
\`\`\`bash
npx create-expo-app@latest
\`\`\`

## Deep Dive: The Full-Stack Vision
The React team's full-stack architecture vision is built on features like **React Server Components** and **Suspense**.

**Server Components** allow you to write components that run *only* on the server or during the build process. This means you can directly access your data layer (like a database) without needing an API endpoint, and this logic won't be included in your client-side JavaScript bundle.

Here's an example of a Server Component in Next.js:

\`\`\`jsx
// This component runs *only* on the server.
async function Talks({ confId }) {
  // 1. You can talk directly to your data layer.
  const talks = await db.Talks.findAll({ confId });

  // 2. This rendering logic won't make your JS bundle larger.
  const videos = talks.map(talk => talk.video);

  // 3. Pass the data down to components that run in the browser.
  return <SearchableVideoList videos={videos} />;
}
\`\`\`

**Suspense** integrates data fetching directly into your component tree, allowing you to specify loading states (like a skeleton placeholder) for different parts of your UI.

\`\`\`jsx
<Suspense fallback={<TalksLoading />}>
  <Talks confId={conf.id} />
</Suspense>
\`\`\`

At the moment, Next.js's App Router is the most complete implementation of these features.

## Starting From Scratch
If you prefer not to use a framework, you can build a React app from scratch using a build tool like Vite, Parcel, or RSbuild. This gives you more flexibility but requires you to set up your own solutions for routing, data fetching, and other common patterns.
`,
  excerpt: "Learn the officially recommended way to start a new React project using modern full-stack frameworks like Next.js, React Router, and Expo.",
  category: "Development",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-22",
  readTime: "7 min read",
  tags: ["React", "JavaScript", "Next.js", "Frameworks"]
},
{
  id: 7,
  title: "Complete Guide to Setting Up a React Environment",
  content: `
## Your Complete Guide to a React Development Setup

Whether you're starting a brand-new project, adding React to an existing one, or looking to improve your workflow with TypeScript and developer tools, this guide covers the modern essentials for setting up a robust React environment.

### 1. Creating a New React App (Recommended)

The best way to start a new single-page application is by using a modern build tool. These tools provide a fast development server and bundle your code for production. **Vite** is a popular and excellent choice.

To create a new React app with Vite, run the following command in your terminal:

\`\`\`bash
# --template react creates a JavaScript project
npm create vite@latest my-react-app -- --template react
\`\`\`

If you prefer to use **TypeScript** (which we highly recommend!), use this command instead:

\`\`\`bash
# --template react-ts creates a TypeScript project
npm create vite@latest my-react-app -- --template react-ts
\`\`\`

After the command finishes, navigate into your new project folder, install the dependencies, and start the development server:

\`\`\`bash
cd my-react-app
npm install
npm run dev
\`\`\`

This will launch a local server, typically at \`http://localhost:5173\`, with Hot Module Replacement (HMR) for instant feedback as you code.

### 2. Adding React to an Existing Project

If you have an existing website and want to add some interactive React components, you don't need a full build setup. You can add React with simple script tags.

**Step 1: Add a "root" DOM container**

In your HTML file, add an empty \`<div>\` where you want to render your React component. Give it a unique ID.

\`\`\`html
<div id="react-root"></div>
\`\`\`

**Step 2: Add the React script tags**

Before your closing \`</body>\` tag, add the following scripts. These load the React library.

\`\`\`html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script src="my-react-component.js" type="text/babel"></script>
\`\`\`

**Step 3: Create your React component**

In a new file named \`my-react-component.js\`, write your component and render it to the root container.

\`\`\`jsx
// my-react-component.js
'use strict';

const rootElement = document.getElementById('react-root');
const root = ReactDOM.createRoot(rootElement);

function MyButton() {
  return <button>Click Me!</button>;
}

root.render(<MyButton />);
\`\`\`

This approach is great for gradually integrating React into server-rendered applications (like Rails or Django) without a complete rewrite.

### 3. Power Up with TypeScript

TypeScript adds static types to JavaScript, which helps catch errors early, improves code quality, and makes large codebases much easier to maintain.

When using TypeScript with React, you'll mainly be typing your component's **props** and **state**.

Here’s an example of a functional component with typed props:

\`\`\`tsx
// Define the shape of the props object using an interface
interface GreetingProps {
  name: string;
  messageCount?: number; // '?' makes this prop optional
}

// Use React.FC (Functional Component) and pass the props type
const Greeting: React.FC<GreetingProps> = ({ name, messageCount }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {messageCount && <p>You have {messageCount} new messages.</p>}
    </div>
  );
};
\`\`\`

Using TypeScript with hooks like \`useState\` is also straightforward. TypeScript often infers the type automatically from the initial value.

\`\`\`tsx
import React, { useState } from 'react';

function Counter() {
  // TypeScript infers 'count' as a 'number'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### 4. Essential: React Developer Tools

React Developer Tools is a browser extension that is indispensable for debugging. It allows you to inspect the React component hierarchy, view and edit component props and state, and profile your application to identify performance bottlenecks.

**Installation:**
- [Install for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Install for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Install for Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Once installed, open your browser's DevTools, and you'll see two new tabs: **"Components"** and **"Profiler"**. The "Components" tab lets you explore your app's component tree, much like the "Elements" tab for the HTML DOM.



This powerful tool will save you countless hours of debugging and is a must-have for any React developer.
`,
  excerpt: "A comprehensive guide to setting up your React development environment, from creating a new app with Vite to adding React to an existing project, using TypeScript, and debugging with React Developer Tools.",
  category: "Development",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-22",
  readTime: "15 min read",
  tags: ["React", "Setup", "TypeScript", "DevTools", "Frontend"]
},
{
  id: 8,
  title: "Caching User Data in React with Redux Toolkit",
  content: `
## Caching User Data in React with Redux Toolkit

Managing user data across different components in a React application can be complex. **Redux Toolkit** simplifies this process by providing a powerful and efficient way to manage global state, making it perfect for temporarily caching user information after a login.

This guide will walk you through setting up a Redux store, creating a slice to handle user data, and interacting with it from your React components.



---

### Step 1: Installation

First, you need to add Redux Toolkit and React-Redux to your project.

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

---

### Step 2: Create a Redux "Slice" for User Data

A **slice** is a collection of Redux reducer logic and actions for a single feature. In our case, we'll create one to manage user data.

Create a new file at \`src/features/userSlice.js\`.

\`\`\`javascript
// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null, // This will store user info like name, email, etc.
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user data upon login
    setUser: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    // Action to clear the user data upon logout
    clearUser: (state) => {
      state.userData = null;
      state.isLoggedIn = false;
    },
  },
});

// Export the actions so you can use them in your components
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
\`\`\`

---

### Step 3: Configure the Redux Store

The **store** is the single, centralized object that holds the state of your entire application.

Create a new file at \`src/app/store.js\` to combine all your reducers.

\`\`\`javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // You can add other reducers here for other features
  },
});
\`\`\`

---

### Step 4: Provide the Store to Your App

To make the Redux store available to all your components, wrap your main \`<App />\` component with the \`<Provider>\` component from \`react-redux\`.

Modify your \`src/index.js\` file:

\`\`\`jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
\`\`\`

---

### Step 5: Use the State in Your Components

Now you can read data from the store and dispatch actions from any component using hooks.

Here’s an example of a \`UserProfile\` component that simulates logging in and out.

\`\`\`jsx
// src/components/UserProfile.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../features/userSlice';

function UserProfile() {
  // Use 'useSelector' to get data from the store
  const { userData, isLoggedIn } = useSelector((state) => state.user);
  
  // Use 'useDispatch' to send actions to the store
  const dispatch = useDispatch();

  const handleLogin = () => {
    // In a real app, this data would come from an API call
    const mockUserData = {
      name: 'Aditya Singh',
      email: 'aditya@example.com',
    };
    dispatch(setUser(mockUserData));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isLoggedIn ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
\`\`\`

That's it! You now have a fully functional Redux setup for caching user data. This state will persist across your application until the user reloads the page, providing a fast and seamless user experience.
`,
  excerpt: "A complete guide on setting up Redux Toolkit in a React app to manage global state and temporarily cache user information after login.",
  category: "Development",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-23",
  readTime: "9 min read",
  tags: ["React", "Redux", "Redux Toolkit", "State Management", "Frontend"]
},
{
  id: 9,
  title: "Getting Started with Git and GitHub: A Beginner's Guide",
  content: `
## Getting Started with Git and GitHub: A Beginner's Guide

Version control is an essential skill for any developer, and **Git** is the most widely used system for tracking changes to code over time. **GitHub** is a popular web-based platform built around Git, providing collaboration, remote storage, and a rich set of features for managing your projects.

This guide will walk you through the fundamental concepts of Git and how to use them with GitHub, including how to configure your profile for seamless use within VS Code.



---

### Step 1: Installing Git

First things first, you need to have Git installed on your local machine. You can download it from the official [Git website](https://git-scm.com/download/). After installation, open your terminal or command prompt and verify it by running:

\`\`\`bash
git --version
\`\`\`

---

### Step 2: Creating a Local Git Repository

To start tracking changes, you need to initialize a Git repository. Open your terminal, navigate to your project folder, and run:

\`\`\`bash
git init
\`\`\`

This command creates a hidden \`.git\` folder where Git stores all its tracking information.

---

### Step 3: Staging and Committing Changes

The basic workflow in Git involves staging your changes and then committing them.

1.  **Staging:** Use the \`git add\` command to select the files you want to include in your next commit.
    * To stage a specific file: \`git add your_file.txt\`
    * To stage all changes: \`git add .\`
2.  **Committing:** Use the \`git commit\` command to save a snapshot of your repository with a descriptive message.
    \`\`\`bash
    git commit -m "Add initial project files"
    \`\`\`

---

### Step 4: Connecting to a Remote Repository on GitHub

GitHub provides remote repositories where you can store your code online.

1.  **Create a Repository on GitHub:** Go to [GitHub.com](https://github.com/), create a new repository, and get its URL.
2.  **Add the Remote:** Use the \`git remote add origin\` command to connect your local repository to the remote one. \`origin\` is the standard alias for your main remote.
    \`\`\`bash
    git remote add origin https://github.com/your_username/your_repository_name.git
    \`\`\`
3.  **Push Your Commits:** Use \`git push\` to upload your local commits. The \`-u\` flag sets up a tracking connection for the future.
    \`\`\`bash
    git push -u origin main
    \`\`\`



---

### Step 5: Save Your Git Profile for VS Code

To commit changes easily through the VS Code UI and avoid entering your credentials every time, you need to configure your Git profile and set up a credential helper.

1.  **Set Your Name and Email:** VS Code uses your global Git configuration for commit attribution. Open the integrated terminal in VS Code (**View > Terminal**) and run these commands:
    \`\`\`bash
    git config --global user.name "Your Name"
    git config --global user.email "youremail@example.com"
    \`\`\`

    

2.  **Save Your Credentials:** To avoid typing your password or Personal Access Token (PAT) every time you push, enable Git's credential manager. This securely stores your credentials.
    \`\`\`bash
    git config --global credential.helper manager
    \`\`\`
    The next time you push to GitHub, VS Code will prompt you to log in. After you authenticate, the credential manager will save your token for future use.

3.  **Commit Using the VS Code UI:**
    * Open the **Source Control** view from the Activity Bar (the icon with three dots and branches).
    * You'll see your changed files listed. Click the **'+'** icon next to a file to stage it.
    * Type your commit message in the text box at the top.
    * Click the **checkmark icon** to commit the staged changes.
    * Finally, click the **"Sync Changes"** button at the bottom of the window to push your commits to GitHub.

    

---

### Step 6: Making Changes and Updating Your Remote Repository

After the initial setup, your workflow for future changes is simple:

1.  Modify your files.
2.  Stage and commit your changes (either in the terminal or using the VS Code UI).
3.  Push your commits to GitHub: \`git push\`.

---

### Step 7: Pulling Changes from Remote

To get the latest updates from the remote repository, use the \`git pull\` command:

\`\`\`bash
git pull origin main
\`\`\`

---

### Step 8: Branching and Merging

**Branching** lets you work on new features without affecting the main codebase.

* **Create and switch to a new branch:**
    \`\`\`bash
    git checkout -b new-feature-branch
    \`\`\`
* **Merge the branch back into main:**
    \`\`\`bash
    git checkout main
    git merge new-feature-branch
    \`\`\`


`,
  excerpt: "A beginner's guide to Git and GitHub, covering installation, commits, connecting to remotes, and configuring your profile for easy use with the VS Code UI.",
  category: "DevOps",
  author: "Aditya Tech. & Devoops.",
  date: "2025-08-23",
  readTime: "14 min read",
  tags: ["Git", "GitHub", "Version Control", "VS Code", "Beginner"]
}];