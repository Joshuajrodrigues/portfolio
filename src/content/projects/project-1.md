---
defaultColor: "test"
title: "Kuzina"
desp: "Kitchen management system for the family."
tags:
  ["Nextjs", "Reactjs", "Supabase", "Typescript", "TailwindCss", "Shadcn/ui"]
visit: "https://kuzina.vercel.app/"
git: "https://github.com/Joshuajrodrigues/kuzina"
image: "/kuzina.svg"
---

# The problem

Often times I find myself too busy to check whats left in the firdge, somedays I plan a recipe but
I forget the steps or where I had found it and when I do have a recipe I find out im out of a partiular ingridient.Sometimes I forget to buy stuff and somedays I find
that its already bought and I bought it again.

# The solution

Kuzina is a kitchen manahement app, its designed to be quick and effortless for data entry and view.
The app comes with collaboration feature so that you can be in sync with your family memebers,
what needs to be purchanced what has been purchaced already and so on.

# Features

It provides 3 main features Pantry Recipes and Wish list
Pantry is where all your inventory goes, salt, sugar, pepper, milk
Recipes is where all youre recipes go
Wishlist is the stuff that you are out of and can refer to when you go shoping.

# Challenges

1. For pantry (later for recipes and wishlist), I wanted the listing to be mobile first
   as mobile is what my mom and I use when we go shopping. A table would be a bad idea
   as often it shows too much data or too little.

## Solution

What I finaly came up with was a collapsible card stack that "opens" up to reveal more content. This looked cool and was also very challenging to build.

___

2. Auth was and is very challenging in this app, mostly as I never dealt with complex authentication in backend. Not only does kuzina have a generic user login, it also has a request system where other users can
   request the kitchen creator to join their kitchen. As a frontend dev I had to ask help from my work collegues on how to actually get this done.

## Solution

I finally cracked it by using row based security from the databse side (Supabase). For the kitchen read write access.

___

3. Entering data for recipes was tedious. Specially if you are like me who just copies recipies from
   youtube or websites, to manually add it would be boring.

## Solution

This was my favourite. The add/edit recipe drawer gives you a button called fast fill. This opens up a text area, where you paste in your content, and choose how you want the data to be broken up.
So lets say the data is

```
1) milk
2) bananas
3) sugar
```

all you have to do is select "Break on new line" and the app fills out the form for you.
___
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
