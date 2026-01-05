// home page logic
// navbar scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    // scrolling up
    navbar.classList.remove("hide");
  }
  if (window.scrollY > 0) {
    // scrolling down
    navbar.classList.add("hide");
  }
  if (window.scrollY > 100) {
    // scrolling down
    navbar.classList.remove("hide");
  }
});
/* owl carousel ****************************** */
$(document).ready(function () {
  $(".sayings-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 1 },
    },
    navText: [
      '<i class="fa-solid fa-arrow-right"></i>', 
      '<i class="fa-solid fa-arrow-left"></i>', 
    ],
    dots: false,
  });
});
$(document).ready(function () {
  $(".photo-gallery-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 },
    },
    navText: [
      '<i class="fa-solid fa-arrow-right"></i>', 
      '<i class="fa-solid fa-arrow-left"></i>',
    ],
    dots: false,
  });
});
$(".programs-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  merge: true,
  responsive: {
    0: {
      items: 1,
      mergeFit: true,
    },
    768: {
      items: 2,
      mergeFit: true,
    },
    992: {
      items: 3,
      mergeFit: true,
    },
  },
  navText: [
    '<i class="fa-solid fa-chevron-right"></i>',
    '<i class="fa-solid fa-chevron-left"></i>',
  ],
  dots: false,
});
$(document).ready(function () {
  $(".best-seller-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      991: { items: 3 },
    },
    navText: [
      '<i class="fa-solid fa-arrow-right"></i>', 
      '<i class="fa-solid fa-arrow-left"></i>', 
    ],
    dots: false,
  });
});
// search bar logic 
document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    "programmes.html",
    "index.html",
    "books.html",
    "book-details.html",
    "articles.html",
    "about.html",
  ];

  let searchInput = document.getElementById("search-input");
  let searchButton =
    document.querySelector(".fa-magnifying-glass").closest(".nav-form") ||
    document.querySelector(".fa-magnifying-glass").parentElement;
  let searchResults = document.getElementById("searchResults");

  if (!searchResults) {
    searchResults = document.createElement("div");
    searchResults.id = "searchResults";
    searchResults.className =
      "search-results-container d-none position-absolute w-100 bg-white shadow";
    document.querySelector("nav").appendChild(searchResults);
  }

  function isArabic(text) {
   
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  }

  function normalizeArabic(text) {
    if (!text) return "";
    return text
      .replace(/[\u064B-\u065F]/g, "") 
      .replace(/أ|إ|آ/g, "ا") 
      .replace(/ة/g, "ه") 
      .replace(/\s+/g, " ") 
      .trim()
      .toLowerCase();
  }

  searchInput.addEventListener("input", function () {
    let query = searchInput.value.trim();
    if (query.length > 0) {
      if (isArabic(query)) {
        performSearch(query);
      } else {
        showNoArabicResults();
      }
    } else {
      searchResults.classList.add("d-none");
    }
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let query = searchInput.value.trim();
      if (query.length > 0) {
        if (isArabic(query)) {
          searchInAllPages(query);
        } else {
          showNoArabicResults();
        }
      }
    }
  });

  if (searchButton) {
    searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      let query = searchInput.value.trim();
      if (query.length > 0) {
        if (isArabic(query)) {
          searchInAllPages(query);
        } else {
          showNoArabicResults();
        }
      } else {
        searchResults.classList.add("d-none");
      }
    });
  }

  function showNoArabicResults() {
    searchResults.innerHTML = "";
    let noArabicItem = document.createElement("div");
    noArabicItem.className = "result-item p-3 border-bottom";
    noArabicItem.innerHTML =
      "<p class='mb-0 text-danger'>الرجاء استخدام النص العربي للبحث</p>";
    searchResults.appendChild(noArabicItem);
    searchResults.classList.remove("d-none");
  }

  async function performSearch(query) {
    if (!isArabic(query)) {
      showNoArabicResults();
      return;
    }

    let results = [];

    if (typeof window.articlesContent !== "undefined") {
      console.log("Searching in articles:", window.articlesContent.length);
      results = results.concat(searchInArticles(query));
      console.log("Articles results found:", results.length);
    } else {
      console.warn("window.articlesContent is not defined");
    }

    for (let page of pages) {
      try {
        let content = await fetchPageContent(page);
        let pageResults = searchInContent(query, content, page);
        results = results.concat(pageResults);
      } catch (error) {
        console.error("Error searching page:", page, error);
      }
    }

    console.log("Total results found:", results.length);

    if (results.length > 0) {
      displayQuickResults(results.slice(0, 5), query);
    } else {
      displayQuickResults([], query);
    }
  }

  // Function to search in articles
  function searchInArticles(query) {
    let results = [];
    const articles = window.articlesContent || [];

    if (articles.length === 0) {
      console.warn("No articles available for search");
      return results;
    }

    const normalizedQuery = normalizeArabic(query);

    articles.forEach((article, index) => {
      if (!article || !article.content) {
        console.warn("Invalid article at index:", index);
        return;
      }

      const normalizedContent = normalizeArabic(article.content);
      const normalizedTitle = normalizeArabic(article.title);

      if (normalizedContent.includes(normalizedQuery)) {
        let searchIndex = normalizedContent.indexOf(normalizedQuery);

        let originalContent = article.content;
        let start = Math.max(0, searchIndex - 50);
        let end = Math.min(originalContent.length, searchIndex + 150);
        let context = originalContent.substring(start, end);

        if (start > 0) context = "..." + context;
        if (end < originalContent.length) context = context + "...";

        const queryWords = query.split(" ");
        queryWords.forEach((word) => {
          if (word.length > 2) {
            const regex = new RegExp(word, "gi");
            context = context.replace(
              regex,
              (match) => `<mark>${match}</mark>`
            );
          }
        });

        results.push({
          context: context,
          url: article.url,
          title: article.title,
        });
      }

      if (normalizedTitle.includes(normalizedQuery)) {
        const alreadyAdded = results.some((r) => r.url === article.url);
        if (!alreadyAdded) {
          results.push({
            context: article.content.substring(0, 100) + "...",
            url: article.url,
            title: article.title,
          });
        }
      }
    });

    console.log("Found in articles:", results.length);
    return results;
  }

  function searchInContent(query, { content, title }, pageUrl) {
    let results = [];
    if (!content) return results;

    const normalizedQuery = normalizeArabic(query);
    const normalizedContent = normalizeArabic(content);

    let index = normalizedContent.indexOf(normalizedQuery);

    while (index !== -1 && results.length < 3) {
      let start = Math.max(0, index - 50);
      let end = Math.min(content.length, index + 150);
      let context = content.substring(start, end);

      if (start > 0) context = "..." + context;
      if (end < content.length) context = context + "...";

      const queryWords = query.split(" ");
      queryWords.forEach((word) => {
        if (word.length > 2) {
          const regex = new RegExp(word, "gi");
          context = context.replace(regex, (match) => `<mark>${match}</mark>`);
        }
      });

      results.push({
        context: context,
        url: pageUrl,
        title: title || pageUrl,
      });

      index = normalizedContent.indexOf(normalizedQuery, index + 1);
    }

    return results;
  }

  async function fetchPageContent(url) {
    try {
      let response = await fetch(url);
      if (response.ok) {
        const html = await response.text();
        const tempElement = document.createElement("div");
        tempElement.innerHTML = html;

        // Remove unwanted sections
        const footer = tempElement.querySelector("footer");
        if (footer) footer.remove();
        const copyrightSection = tempElement.querySelector(".copyright");
        if (copyrightSection) copyrightSection.remove();
        const navbar = tempElement.querySelector("nav");
        if (navbar) navbar.remove();
        const searchResultsDiv = tempElement.querySelector("#searchResults");
        if (searchResultsDiv) searchResultsDiv.remove();

        const title =
          tempElement.querySelector(".banner-title")?.textContent ||
          tempElement.querySelector("h1")?.textContent ||
          tempElement.querySelector("title")?.textContent ||
          url;

        return { content: tempElement.textContent || "", title: title.trim() };
      }

      console.error("Failed to fetch content from", url);
      return { content: "", title: "Error" };
    } catch (error) {
      console.error("Error fetching content from", url, error);
      return { content: "", title: "Error" };
    }
  }

  function displayQuickResults(results, query) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      let noDataItem = document.createElement("div");
      noDataItem.className = "result-item p-3 border-bottom";
      noDataItem.innerHTML = "<p class='mb-0'>لا توجد نتائج للبحث</p>";
      searchResults.appendChild(noDataItem);
    } else {
      // Remove duplicates based on URL
      const uniqueResults = [];
      const seenUrls = new Set();

      results.forEach((result) => {
        if (!seenUrls.has(result.url)) {
          seenUrls.add(result.url);
          uniqueResults.push(result);
        }
      });

      uniqueResults.forEach((result) => {
        let item = document.createElement("div");
        item.className = "result-item p-3 border-bottom";
        item.innerHTML = `
          <h6 class="mb-1">${result.title}</h6>
          <p class="mb-1 small">${result.context}</p>
          <a href="${result.url}" class="small">عرض الصفحة</a>
        `;
        searchResults.appendChild(item);
      });

      let viewAllItem = document.createElement("div");
      viewAllItem.className = "result-item p-3";
      viewAllItem.innerHTML = `<a href="#" class="small view-all-results">عرض كل النتائج (${uniqueResults.length})</a>`;
      searchResults.appendChild(viewAllItem);

      const viewAllLink = viewAllItem.querySelector(".view-all-results");
      viewAllLink.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.setItem("searchQuery", query);
        searchInAllPages(query);
      });
    }

    searchResults.classList.remove("d-none");
  }

  async function searchInAllPages(query) {
    if (!isArabic(query)) {
      sessionStorage.setItem("searchResults", JSON.stringify([]));
      sessionStorage.setItem("searchQuery", query);
      sessionStorage.setItem("searchError", "nonArabic");

      searchInput.value = "";
      searchResults.classList.add("d-none");
      window.location.href = "search.html";
      return;
    }

    let results = [];

    if (typeof window.articlesContent !== "undefined") {
      results = results.concat(searchInArticles(query));
    }

    for (let page of pages) {
      try {
        let content = await fetchPageContent(page);
        let pageResults = searchInContent(query, content, page);
        results = results.concat(pageResults);
      } catch (error) {
        console.error("Error searching page:", page, error);
      }
    }

    displayAllResults(results, query);
  }

  function displayAllResults(results, query) {
    sessionStorage.setItem("searchResults", JSON.stringify(results));
    sessionStorage.setItem("searchQuery", query);

    searchInput.value = "";
    searchResults.classList.add("d-none");
    window.location.href = "search.html";
  }
});
//  youtube video controls

let players = [];

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll(".video-container iframe");
  iframes.forEach((iframe, i) => {
    players[i] = new YT.Player(iframe);
  });
}

// Handle play/pause toggle on click
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".play-btn");
  if (!btn) return;

  const program = btn.closest(".program");
  const index = Array.from(document.querySelectorAll(".program")).indexOf(
    program
  );
  const icon = btn.querySelector("i");

  if (!program.classList.contains("playing")) {
    // ▶️ Play the video
    program.classList.add("playing");
    program.classList.remove("paused");
    players[index].playVideo();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-circle-pause");
  } else {
    // ⏸️ Pause the video
    program.classList.remove("playing");
    program.classList.add("paused");
    players[index].pauseVideo();
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-play");
  }
});
