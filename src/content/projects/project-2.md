---
defaultColor: "bg-pink-400"
title: "Kognitive"
desp: "Cbt journaling app with pre built forms."
tags:
  ["Reactjs", "Typescript","PWA", "Supabase", "Zustand", "TailwindCss", "ChakraUi"]
visit: "https://kognitive.vercel.app"
git: "https://github.com/Joshuajrodrigues/cbtjournal"
image: "/konitive.svg"
---

<div class="mb-0 font-publicSans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl flex flex-col items-center justify-center">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Problem
  </h1>
  <p class="mb-4">
    2022 was a difficult year, and while browsing online, I found a lot of books and apps for Cognitive Behavioral Therapy. However, these were very expensive and at times unavailable in my region. Some of my friends were even paying outrageous amounts for the forms, some of which would either get misplaced (physical) or used for ad targeting (applications).
  </p>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Solution
  </h1>
  <p class="mb-4">
    Kognitive is a CBT journaling app designed to make the process of practicing Cognitive Behavioral Therapy more manageable and structured. It provides users with a digital platform to journal their thoughts, feelings, and behaviors, making it easier to recognize patterns and apply CBT techniques for better mental health.
  </p>
  <img src="/kognitive/dash.png" class="border-4 border-black mb-4 lg:w-1/2 " alt="Dashboard">

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Features
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>PWA:</strong> It is a progressive web app, can be installed on your phone like a native app.
    </li>
    <li>
      <strong>Daily check-in:</strong> A general space for users to record their thoughts and emotions, organized by date and time.
    </li>
    <li>
      <strong>SMART goal builder:</strong> Users can track their goals and get a clear picture of what they want and how they can achieve it.
    </li>
    <li>
      <strong>Stress manager:</strong> A feature for recording and analyzing stress, helping users understand how their actions relate to their thoughts and emotions.
    </li>
    <li>
      <strong>Worry challenge:</strong> Kognitive offers a form to challenge worry thoughts, to jot them down and make sense of them.
    </li>
    <li>
      <strong>Breakdown argument:</strong> Ever had those arguments that ruin your entire day? This is for you.
    </li>
    <li>
      <strong>History:</strong> Kognitive offers a history table where you can view your past entries.
    </li>
  </ul>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Challenges
  </h1>
  <ol class="list-decimal ml-6 mb-4">
    <li>
      <strong>User Engagement:</strong> Usually, you see these apps use gamification tactics and rewards, they are flashy or too bubbly. I personally find this to be a bad design for an app where the user comes in with varied mental states and stresses.
      <p class="flex flex-col justify-center items-center">
        <span>
          <strong>Solution:</strong> Kognitive employs clean and soft UI. It does not force your hand at anything; don't want to write a step, that's okay. The app stays out of your way and neutral to make sure the user can focus on themselves.
        </span>
        <img src="/kognitive/example.png" class="border-4 border-black lg:w-1/2" alt="Example">
      </p>
    </li>
    <li>
      <strong>Data Privacy and Security:</strong> Safeguarding sensitive user data and ensuring the privacy of their thoughts and emotions is crucial in a mental health app.
      <p>
        <strong>Solution:</strong> Kognitive is open-source; you can clone and host this on your personal Supabase database. There are no ads, and it's free.
      </p>
    </li>
    <li>
      <strong>Forms:</strong> The forms provided in Kognitive have a slightly complex state management system.
      <p>
        <strong>Solution:</strong> It was made easier by using Zustand over Redux, as it felt like the perfect balance for an app like this.
      </p>
    </li>
  </ol>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Future Plans
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>Enhanced Analytics:</strong> Improving the app's data analysis capabilities to offer more insights into thought, emotion, and behavior patterns.
    </li>
    <li>
      <strong>Mood Prediction:</strong> Implementing AI-driven mood prediction to help users anticipate and manage emotional states.
    </li>
    <li>
      <strong>Personalized CBT Plans:</strong> Developing personalized CBT plans based on user data, allowing for tailored therapeutic experiences.
    </li>
  </ul>
</div>



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
    img{
   
    border: black 4px solid ;
    margin:5px;
  }
</style>
