---
defaultColor: "bg-blue-400"
title: "Manga2epub4kindle"
desp: "cbr/cbz manga to epub file convertor for kindle"
tags: ["Nodejs", "Sharp"]
visit: "https://www.npmjs.com/package/manga2epub4kindle"
git: "https://github.com/Joshuajrodrigues/manga2epub4kindle"
image: "/manga.svg"
---

# The Problem

In 2023, I acquired a Kindle and had a substantial collection of manga (Japanese comic books) in the form of cbz/cbr formats. Unfortunately, Kindle does not support these formats, and I needed to convert them into epub files. I attempted various converters like KCC (Kindle Comic Converter), but they often resulted in file sizes exceeding 200MB, which Kindle does not allow for cloud storage. To overcome this limitation, I decided to develop my own solution.

# The Solution

Manga2epub4kindle, while a mouthful, is a practical terminal script that leverages the Sharp library to process images.

![terminal ui](/manga/tui.png)
# Features

- **Generates Compact EPUB Files:** The app consistently produces smaller EPUB files than the input files, ensuring Kindle compatibility.

- **Saves/Loads Metadata:** The script stores all your metadata in a JSON file, making it convenient for batch or volume conversions.

- **Adds Metadata:** It eliminates issues with undefined authors or titles, enhancing the organization of your manga on Kindle.

- **Trims Borders:** White borders, which can distort images on smaller Kindles, are removed.

# Challenges

1. **File Systems:** Handling file systems asynchronously and synchronously presented a significant challenge.

   - **Solution:** Extensive research, tutorials, and Stack Overflow queries were necessary to overcome these hurdles.

2. **Kindle-Specific EPUB Format:** Kindle requires a specific EPUB format for comics, which added complexity to the conversion process.

   - **Solution:** I delved into the source code of KCC to understand the necessary meta tags for Kindle compatibility.

3. **Node.js EPUB Library Limitations:** The library available for creating EPUB files in Node.js was deprecated and did not support the required meta tags for Kindle.

   - **Solution:** I forked the library, made the necessary modifications, and adapted it to meet the specific needs of Kindle compatibility.

# Future Plans

- **Enhancements and Improvements:** While the app is functional, there is room for quality-of-life features and improvements. Additionally, it currently operates on Node.js 16, so I aim to make it compatible with the latest Node.js versions.

- **Bun.js Integration:** Exploring the integration of the Bun.js JavaScript runtime, known for its speed and promise, to potentially enhance the app's performance and capabilities.

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
