---
defaultColor: "bg-blue-400"
title: "Manga2epub4kindle"
desp: "cbr/cbz manga to epub file convertor for kindle"
tags: ["Nodejs", "Sharp"]
visit: "https://www.npmjs.com/package/manga2epub4kindle"
git: "https://github.com/Joshuajrodrigues/manga2epub4kindle"
image: "/manga.svg"
---

<div class="mb-0 font-publicSans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl flex flex-col items-center justify-center">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Problem
  </h1>
  <p>
    In 2023, I acquired a Kindle and had a substantial collection of manga (Japanese comic books) in the form of cbz/cbr formats. Unfortunately, Kindle does not support these formats, and I needed to convert them into epub files. I attempted various converters like KCC (Kindle Comic Converter), but they often resulted in file sizes exceeding 200MB, which Kindle does not allow for cloud storage. To overcome this limitation, I decided to develop my own solution.
  </p>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    The Solution
  </h1>
  <p>
    Manga2epub4kindle, while a mouthful, is a practical terminal script that leverages the Sharp library to process images.
  </p>
  <img src="/manga/tui.png" class="border-4 border-black mb-4 lg:w-1/2 " alt="Terminal UI">

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Features
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>Generates Compact EPUB Files:</strong> The app consistently produces smaller EPUB files than the input files, ensuring Kindle compatibility.
    </li>
    <li>
      <strong>Saves/Loads Metadata:</strong> The script stores all your metadata in a JSON file, making it convenient for batch or volume conversions.
    </li>
    <li>
      <strong>Adds Metadata:</strong> It eliminates issues with undefined authors or titles, enhancing the organization of your manga on Kindle.
    </li>
    <li>
      <strong>Trims Borders:</strong> White borders, which can distort images on smaller Kindles, are removed.
    </li>
  </ul>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Challenges
  </h1>
  <ol class="list-decimal ml-6 mb-4">
    <li>
      <strong>File Systems:</strong> Handling file systems asynchronously and synchronously presented a significant challenge.
      <p>
        <strong>Solution:</strong> Extensive research, tutorials, and Stack Overflow queries were necessary to overcome these hurdles.
      </p>
    </li>
    <li>
      <strong>Kindle-Specific EPUB Format:</strong> Kindle requires a specific EPUB format for comics, which added complexity to the conversion process.
      <p>
        <strong>Solution:</strong> I delved into the source code of KCC to understand the necessary meta tags for Kindle compatibility.
      </p>
    </li>
    <li>
      <strong>Node.js EPUB Library Limitations:</strong> The library available for creating EPUB files in Node.js was deprecated and did not support the required meta tags for Kindle.
      <p>
        <strong>Solution:</strong> I forked the library, made the necessary modifications, and adapted it to meet the specific needs of Kindle compatibility.
      </p>
    </li>
  </ol>

  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-6">
    Future Plans
  </h1>
  <ul class="list-disc ml-6 mb-4">
    <li>
      <strong>Enhancements and Improvements:</strong> While the app is functional, there is room for quality-of-life features and improvements. Additionally, it currently operates on Node.js 16, so I aim to make it compatible with the latest Node.js versions.
    </li>
    <li>
      <strong>Bun.js Integration:</strong> Exploring the integration of the Bun.js JavaScript runtime, known for its speed and promise, to potentially enhance the app's performance and capabilities.
    </li>
  </ul>
</div>

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
