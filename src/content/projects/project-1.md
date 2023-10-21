---
defaultColor: "bg-teal-400"
title: "Kuzina"
desp: "Kitchen management system for the family."
tags:
  ["Nextjs", "Reactjs", "Supabase", "Typescript", "TailwindCss", "Shadcn/ui"]
visit: "https://kuzina.vercel.app/"
git: "https://github.com/Joshuajrodrigues/kuzina"
image: "/kuzina.svg"
---

<div class=" mb-0 font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl flex flex-col items-center justify-center">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Problem
  </h1>
  <p class="mb-4">
    Often, I find myself too busy to check what's left in the fridge. Some days I plan a recipe but forget the steps or where I had found it. When I do have a recipe, I find out I'm out of a particular ingredient. Sometimes I forget to buy stuff, and some days I find that it's already bought, and I bought it again.
  </p>
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Solution
  </h1>
  <p class="mb-4">
    Kuzina is a kitchen management app designed to be quick and effortless for data entry and viewing. The app comes with collaboration features, so you can be in sync with your family members regarding what needs to be purchased and what has already been purchased.
  </p>
  <img src="/kuzina/dash.png" class="border-4 border-black mb-4 lg:w-1/2 " alt="Dashboard">
  <img src="/kuzina/pantry.png" class="border-4 border-black lg:w-1/2" alt="Pantry">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Features
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>Pantry:</strong> Where all your inventory goes, such as salt, sugar, pepper, milk.
    </li>
    <li>
      <strong>Recipes:</strong> Where all your recipes go.
    </li>
    <li>
      <strong>Wishlist:</strong> The items that you are out of and can refer to when you go shopping.
    </li>
  </ul>
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Challenges
  </h1>
  <ol class="list-decimal ml-6 mb-4">
    <li>
      <strong>Pantry:</strong> For the pantry (later for recipes and wishlist), I wanted the listing to be mobile-first as mobile is what my mom and I use when we go shopping. A table would be a bad idea as it often shows too much data or too little.
      <p class="flex flex-col justify-center items-center">
      <span>
        <strong>Solution:</strong> What I finally came up with was a collapsible card stack that "opens" up to reveal more content. This looked cool and was also very challenging to build.
      </span>
        <img src="/kuzina/table.png" class="border-4 border-black lg:w-1/2" alt="Table">
      </p>
    </li>
    <li>
      <strong>Authentication:</strong> Auth was and is very challenging in this app, mostly as I never dealt with complex authentication on the backend. Not only does Kuzina have a generic user login, it also has a request system where other users can request the kitchen creator to join their kitchen. As a frontend dev, I had to ask for help from my work colleagues on how to actually get this done.
      <p>
        <strong>Solution:</strong> I finally cracked it by using row-based security from the database side (Supabase) for the kitchen read-write access.
      </p>
    </li>
    <li>
      <strong>Data Entry:</strong> Entering data for recipes was tedious, especially if you are like me who just copies recipes from YouTube or websites. To manually add it would be boring.
      <p>
        <strong>Solution:</strong> This was my favorite. The add/edit recipe drawer gives you a button called fast fill. This opens up a text area, where you paste in your content, and choose how you want the data to be broken up. So let's say the data is:
      </p>
    </li>
  </ol>
</div>

```
1) milk
2) bananas
3) sugar
```

<div class="mb-0 font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl flex flex-col items-center justify-center">
  <p class="mb-4">
  all you have to do is select "Break on new line" and the app fills out the form for you. You also have break on comma and numbers as shown above.
  </p>
  <img src="/kuzina/add.png" class="border-4 border-black lg:w-1/2 " alt="fast fill">
   <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Future Plans
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>Real time:</strong> This app would benefit from real-time database functionality a lot.
    </li>
    <li>
      <strong>User management:</strong> Managing users in your kitchen with role-based permissions.
    </li>
    <li>
      <strong>Recipe to ingredient tracking:</strong> Check if ingredients are present when viewing the recipe.
    </li>
  </ul>
</div>

---



<style>
   
  .astro-code{
    width:10rem;
    margin:0 6rem;
    border: black 4px solid ;

  }

</style>
