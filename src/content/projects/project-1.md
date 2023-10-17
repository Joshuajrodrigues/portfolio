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

# The Problem

Often, I find myself too busy to check what's left in the fridge. Some days I plan a recipe but forget the steps or where I had found it. When I do have a recipe, I find out I'm out of a particular ingredient. Sometimes I forget to buy stuff, and some days I find that it's already bought, and I bought it again.

# The Solution

Kuzina is a kitchen management app designed to be quick and effortless for data entry and viewing. The app comes with collaboration features, so you can be in sync with your family members regarding what needs to be purchased and what has already been purchased.

# Features

It provides three main features: Pantry, Recipes, and Wishlist.

- **Pantry:** Where all your inventory goes, such as salt, sugar, pepper, milk.
- **Recipes:** Where all your recipes go.
- **Wishlist:** The items that you are out of and can refer to when you go shopping.

# Challenges

1. **Pantry:** For the pantry (later for recipes and wishlist), I wanted the listing to be mobile-first as mobile is what my mom and I use when we go shopping. A table would be a bad idea as it often shows too much data or too little.

   - **Solution:** What I finally came up with was a collapsible card stack that "opens" up to reveal more content. This looked cool and was also very challenging to build.

2. **Authentication:** Auth was and is very challenging in this app, mostly as I never dealt with complex authentication on the backend. Not only does Kuzina have a generic user login, it also has a request system where other users can request the kitchen creator to join their kitchen. As a frontend dev, I had to ask for help from my work colleagues on how to actually get this done.

   - **Solution:** I finally cracked it by using row-based security from the database side (Supabase) for the kitchen read-write access.

3. **Data Entry:** Entering data for recipes was tedious, especially if you are like me who just copies recipes from YouTube or websites. To manually add it would be boring.

   - **Solution:** This was my favorite. The add/edit recipe drawer gives you a button called fast fill. This opens up a text area, where you paste in your content, and choose how you want the data to be broken up. So let's say the data is:


```
1) milk
2) bananas
3) sugar
```

all you have to do is select "Break on new line" and the app fills out the form for you.

---

# Future plans

- **Real time:** This app would benefit from real time db a lot.
- **User management:** Managing users in your kitchen with role based permissions.
- **Recipe to ingridient tracking:** Check if ingridients are present when viewing the recipe.

<style>
      h1 {
        margin-top: 2rem;
        font-weight: 800;
        font-size:1.3rem;
      }
      h2{
        font-weight: 500;
        font-size:1rem;
   
        margin:0 1rem 
      }
  ul, ol, p {
    list-style: revert;
    margin:1rem
  }
  .astro-code{
    margin:1rem
  }
</style>
