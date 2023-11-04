---
defaultColor: "bg-purple-400"
title: "Glaucoma detector"
desp: "Find eye cup to disk ratio using fuzzy clustering algorithms."
tags: ["ReactJs", "Typescript", "Zustand", "TailwindCss"]
visit: "https://glaucoma-detector.vercel.app/"
git: "https://github.com/Joshuajrodrigues/glaucoma-detector"
image: "/eye.svg"
---

<div class="mb-0 font-publicSans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl flex flex-col items-center justify-center">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Preface
  </h1>
  <p>
    In 2021, I was in my final year of college, working on a college project that marked the beginning of my software development journey. It was a collaborative effort, originally implemented in Python. Our project received first place among all engineering departments, which was a remarkable achievement.
    <br>
    <a href="https://github.com/Joshuajrodrigues/Glaucoma-detection-using-fuzzy-c-strange-point-algorithm">Original project source</a>
  </p>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Problem
  </h1>
  <p>
    In the world of clustering algorithms, numerous options like the well-known K-means exist. The initial problem statement in college was to compare various clustering algorithms with the Fuzzy C Strange Point Algorithm, which our professor had introduced. The goal was to use these algorithms for glaucoma detection.
    <br>
    However, my personal problem statement was to create a user-friendly and accessible application for segmenting the cup and disk of the eye using the given algorithm.
  </p>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Solution
  </h1>
  <p>
    The Glaucoma detector presents a straightforward user interface for quickly calculating the cup and disk using the Canvas API, a task that was challenging to accomplish with Python alone.
    <br>
    <strong>Not for medical use</strong>
  </p>
  <img src="/gd/dash.png" class="border-4 border-black mb-4 lg:w-1/2 " alt="Dashboard">

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Challenges
  </h1>
  <ol class="list-decimal ml-6 mb-4">
    <li>
      <strong>Area Calculation:</strong> After separating the image, determining the area of the disk and cup proved to be challenging.
      <p>
        <strong>Solution:</strong> I provided two sets of handles that users can manually adjust to obtain more accurate area measurements.
      </p>
      <img src="/gd/cup.png" class="border-4 border-black lg:w-1/2" alt="Cup">
      <img src="/gd/disk.png" class="border-4 border-black lg:w-1/2" alt="Disk">
    </li>
    <li>
      <strong>Eye Fundus Images:</strong> Issues arose with the quality of eye fundus images, particularly when images were too blurry or unclear, which disrupted the image separation process.
      <p>
        <strong>Solution:</strong> I implemented pre-processing techniques to enhance image contrast before the separation process. Additionally, I included a function to rerun the clustering algorithm to eliminate excess noise.
      </p>
    </li>
  </ol>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Future Plans
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>WebAssembly (Wasm):</strong> While JavaScript is fast, it's not optimized for tasks like this. I plan to explore the use of WebAssembly with languages like Rust or Lua to improve performance.
    </li>
    <li>
      <strong>Accuracy:</strong> The current system has limitations in accuracy, mainly relying on the performance of the underlying algorithm. Although the Fuzzy C Strange Point Algorithm outperforms K-means and Fuzzy C-means in terms of performance and slightly in quality, all three algorithms struggle with low-quality images that doctors can diagnose without issue. Therefore, I aim to integrate a different algorithm in the future to enhance accuracy.
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
  a{
    text-decoration-line:underline;
  }
    img{
   
    border: black 4px solid ;
    margin:5px;
  }
</style>
