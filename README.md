<img src="public/logo/unimi500.png" width="120" height="120" align="right" />

# [studentiunimi.it](https://studentiunimi.it/)

[studentiunimi.it](https://studentiunimi.it/) is a fully responsive website built with React, [NextJS](https://nextjs.org/) and [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/), with the aim of providing services and access to all groups of didactic courses and general purposes to students of the [University of Milan](https://www.unimi.it/). This website displays data and interacts with a database thanks to the APIs made available by the backend.

![preview](public/images/preview.png)

# Run the project locally
1. Create a `.env.local` file in the root of the project:

   ```sh
   NEXT_PUBLIC_API_URL="http://localhost:8010/proxy"
   ```
   
2. Install `local-cors-proxy` globally
   ```sh
   npm install -g local-cors-proxy
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```
   
The web application will be running at http://localhost:3000

# Features ✨
## Dark Theme 🌚
What world would it be without a dark mode?

![dark theme](https://user-images.githubusercontent.com/52317197/177864085-5764fc13-9657-45f3-bba5-48bd9edce863.png)

## Localization 🌍
Localization is crucial for a website that can be used by international students; we make it available without further page loads.

![localization](https://user-images.githubusercontent.com/52317197/177864684-6def6e5e-2fda-46e2-9435-2e5801db024f.png)

## Color Themes 🍭
Infinite possibilities for multi-color palette usage.

![palette](https://user-images.githubusercontent.com/52317197/177862579-77602480-a180-4ffd-bc8a-6f9df14f337a.png)

## SEO ⚡
Thanks to NextJS we can improve the visibility of our website with Search engine optimization.
