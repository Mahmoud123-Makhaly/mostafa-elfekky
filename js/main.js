
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
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
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
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
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
  merge: true, // Enable the merge functionality
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
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
    ],
    dots: false,
  });
});
// search bar logic - Fixed version
document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    "programmes.html",
    "Home.html",
    "books.html",
    "book-details.html",
    "articles.html",
    "article-details.html",
    "about.html",
  ];

  let searchInput = document.getElementById("search-input");
  let searchButton =
    document.querySelector(".fa-magnifying-glass").closest(".nav-form") ||
    document.querySelector(".fa-magnifying-glass").parentElement;
  let searchResults = document.getElementById("searchResults");

  // Create search results container if it doesn't exist
  if (!searchResults) {
    searchResults = document.createElement("div");
    searchResults.id = "searchResults";
    searchResults.className =
      "search-results-container d-none position-absolute w-100 bg-white shadow";
    document.querySelector("nav").appendChild(searchResults);
  }

  // Function to check if text contains Arabic characters
  function isArabic(text) {
    // Arabic Unicode range: \u0600-\u06FF
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  }

  searchInput.addEventListener("input", function () {
    let query = searchInput.value.toLowerCase();
    if (query.length > 0) {
      // Check if query contains Arabic characters
      if (isArabic(query)) {
        performSearch(query);
      } else {
        // Show "no results" for non-Arabic text
        showNoArabicResults();
      }
    } else {
      searchResults.classList.add("d-none");
    }
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let query = searchInput.value.toLowerCase();
      if (query.length > 0) {
        // Check if query contains Arabic characters
        if (isArabic(query)) {
          searchInAllPages(query);
        } else {
          // Show "no results" for non-Arabic text
          showNoArabicResults();
        }
      }
    }
  });

  // Make sure search button exists and add event listener
  if (searchButton) {
    searchButton.addEventListener("click", function (event) {
      event.preventDefault();
      let query = searchInput.value.toLowerCase();
      if (query.length > 0) {
        // Check if query contains Arabic characters
        if (isArabic(query)) {
          searchInAllPages(query);
        } else {
          // Show "no results" for non-Arabic text
          showNoArabicResults();
        }
      } else {
        searchResults.classList.add("d-none");
      }
    });
  }

  // Function to show "no results" for non-Arabic text
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
    // Double check if query is Arabic
    if (!isArabic(query)) {
      showNoArabicResults();
      return;
    }

    let results = [];
    for (let page of pages) {
      try {
        let content = await fetchPageContent(page);
        let pageResults = searchInContent(query, content, page);
        results = results.concat(pageResults);

        // Show first few results immediately
        if (results.length > 0) {
          displayQuickResults(results.slice(0, 3), query);
        }
      } catch (error) {
        console.error("Error searching page:", page, error);
      }
    }

    // If no results found after searching all pages
    if (results.length === 0) {
      displayQuickResults([], query);
    }
  }

  function searchInContent(query, { content, title }, pageUrl) {
    let results = [];
    if (!content) return results;

    let lowerCaseContent = content.toLowerCase();
    let index = lowerCaseContent.indexOf(query);

    while (index !== -1) {
      let start = Math.max(0, index - 50);
      let end = Math.min(content.length, index + 50 + query.length);
      let context = content.substring(start, end);

      // Add ellipsis if we're not at the beginning
      if (start > 0) context = "..." + context;
      if (end < content.length) context = context + "...";

      results.push({
        context: context.replace(
          new RegExp(query, "gi"),
          (match) => `<mark>${match}</mark>`
        ),
        url: pageUrl,
        title: title || pageUrl,
      });
      index = lowerCaseContent.indexOf(query, index + 1);
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

        const title =
          tempElement.querySelector(".banner-title")?.textContent ||
          tempElement.querySelector("title")?.textContent ||
          url;

        return { content: tempElement.textContent || "", title };
      } else {
        console.error("Failed to fetch content from", url);
        return { content: "", title: "Error" };
      }
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
      results.forEach((result) => {
        let item = document.createElement("div");
        item.className = "result-item p-3 border-bottom";
        item.innerHTML = `
          <h6 class="mb-1">${result.title}</h6>
          <p class="mb-1 small">${result.context}</p>
          <a href="${result.url}" class="small">عرض الصفحة</a>
        `;
        searchResults.appendChild(item);
      });

      // Add "View all results" link with click handler
      let viewAllItem = document.createElement("div");
      viewAllItem.className = "result-item p-3";
      viewAllItem.innerHTML = `<a href="#" class="small view-all-results">عرض كل النتائج</a>`;
      searchResults.appendChild(viewAllItem);

      // Add event listener to the "View all results" link
      const viewAllLink = viewAllItem.querySelector(".view-all-results");
      viewAllLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Store the current query
        sessionStorage.setItem("searchQuery", query);
        // Navigate to search page
        searchInAllPages(query);
      });
    }

    searchResults.classList.remove("d-none");
  }

  async function searchInAllPages(query) {
    // Double check if query is Arabic before searching all pages
    if (!isArabic(query)) {
      // Store empty results for non-Arabic search
      sessionStorage.setItem("searchResults", JSON.stringify([]));
      sessionStorage.setItem("searchQuery", query);
      sessionStorage.setItem("searchError", "nonArabic");

      // Clear the search input
      searchInput.value = "";

      // Hide the quick results
      searchResults.classList.add("d-none");

      // Navigate to search page
      window.location.href = "search.html";
      return;
    }

    let results = [];
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
    // Store both results and query
    sessionStorage.setItem("searchResults", JSON.stringify(results));
    sessionStorage.setItem("searchQuery", query);

    // Clear the search input
    searchInput.value = "";

    // Hide the quick results
    searchResults.classList.add("d-none");

    // Navigate to search page
    window.location.href = "search.html";
  }
});

//  youtube video controls

let players = [];

// Initialize YouTube API players
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
