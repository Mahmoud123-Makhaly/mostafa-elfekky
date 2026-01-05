document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.getElementById("slidesContainer");
  const originalSlidesHTML = slidesContainer.innerHTML;
  const paginationList = document.getElementById("paginationList");
  const pageInfo = document.getElementById("pageInfo");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  let currentPage = 1;
  let totalPages = 0;
  let isSearching = false;
  let currentSearchTerm = "";

  initializeSlides();
  renderPagination();
  showPage(1);

  const style = document.createElement("style");
  style.textContent = `
    #slidesContainer .slide:not(.active) {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    performSearch();
  });

  let searchTimeout;
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 300);
  });

  function initializeSlides() {
    slidesContainer.innerHTML = originalSlidesHTML;

    const slides = document.querySelectorAll("#slidesContainer .slide");
    totalPages = slides.length;

    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.display = "none";
        slide.classList.remove("active");
      } else {
        slide.style.display = "flex";
        slide.classList.add("active");
      }
    });
  }

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    currentSearchTerm = searchTerm;
    currentPage = 1;

    if (!searchTerm) {
      isSearching = false;
      initializeSlides();
    } else {
      isSearching = true;
      const parser = new DOMParser();
      const originalDoc = parser.parseFromString(
        originalSlidesHTML,
        "text/html"
      );
      const originalSlides = originalDoc.querySelectorAll(".slide");

      const allVideoContainers = [];

      originalSlides.forEach((slide) => {
        const videoContainers = slide.querySelectorAll(".video-container");
        videoContainers.forEach((container) => {
          const title = container.querySelector("h6").textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            allVideoContainers.push(container.cloneNode(true));
          }
        });
      });

      slidesContainer.innerHTML = "";

      if (allVideoContainers.length === 0) {
        const noResultsSlide = document.createElement("div");
        noResultsSlide.className =
          "slide pb-3 pb-lg-4 d-flex flex-column active";
        noResultsSlide.innerHTML = `
          <div class="row g-4">
            <div class="col-12 text-center py-5">
              <h4 class="text-muted">لا توجد نتائج لـ "${searchTerm}"</h4>
              <p>حاول البحث بعبارة أخرى</p>
            </div>
          </div>
        `;
        slidesContainer.appendChild(noResultsSlide);
        totalPages = 1;
      } else {
        for (let i = 0; i < allVideoContainers.length; i += 6) {
          const slideVideos = allVideoContainers.slice(i, i + 6);

          const slide = document.createElement("div");
          slide.className = "slide pb-3 pb-lg-4 d-flex flex-column";

          const row = document.createElement("div");
          row.className = "row g-4";

          slideVideos.forEach((video) => {
            const col = document.createElement("div");
            col.className = "col-md-6 col-lg-4 video-container";
            col.innerHTML = video.innerHTML;

            const h6 = col.querySelector("h6");
            const originalText = h6.textContent;
            const regex = new RegExp(`(${searchTerm})`, "gi");
            const highlightedText = originalText.replace(
              regex,
              "<mark>$1</mark>"
            );
            h6.innerHTML = highlightedText;

            row.appendChild(col);
          });

          slide.appendChild(row);
          slidesContainer.appendChild(slide);
        }

        totalPages = Math.ceil(allVideoContainers.length / 6);
      }
    }

    renderPagination();
    showPage(1);
  }

  function clearSearch() {
    searchInput.value = "";
    performSearch();
  }

  clearBtn.addEventListener("click", clearSearch);

  const searchBtn = document.getElementById("searchBtn");
  searchBtn.parentNode.insertBefore(clearBtn, searchBtn.nextSibling);

  function renderPagination() {
    paginationList.innerHTML = "";

    if (totalPages <= 1) {
      pageInfo.textContent = isSearching ? `تم العثور على نتائج للبحث` : "";
      return;
    }

    const first = document.createElement("li");
    first.className = "page-item";
    first.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-angles-right"></i></a>`;
    first.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(1);
    });
    paginationList.appendChild(first);

    const prev = document.createElement("li");
    prev.className = "page-item";
    prev.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>`;
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(currentPage - 1);
    });
    paginationList.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = "page-item";
      li.dataset.page = i;
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(i);
      });
      paginationList.appendChild(li);
    }

    const next = document.createElement("li");
    next.className = "page-item";
    next.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-chevron-left"></i></a>`;
    next.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(currentPage + 1);
    });
    paginationList.appendChild(next);

    const last = document.createElement("li");
    last.className = "page-item";
    last.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-angles-left"></i></a>`;
    last.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(totalPages);
    });
    paginationList.appendChild(last);

    if (isSearching) {
      pageInfo.textContent = `الصفحة ${currentPage} من ${totalPages}`;
    } else {
      pageInfo.textContent = `الصفحة ${currentPage} من ${totalPages}`;
    }
  }

  function showPage(page) {
    const slides = document.querySelectorAll("#slidesContainer .slide");

    slides.forEach((slide) => {
      slide.style.display = "none";
      slide.classList.remove("active");
    });

    if (slides[page - 1]) {
      slides[page - 1].style.display = "flex";
      slides[page - 1].classList.add("active");
    }

    paginationList.querySelectorAll(".page-item").forEach((li) => {
      li.classList.remove("active");
      if (li.dataset.page == page) {
        li.classList.add("active");
      }
    });

    const startItem = (page - 1) * 6 + 1;
    const endItem = Math.min(
      page * 6,
      Array.from(document.querySelectorAll(".video-container")).length
    );

    if (totalPages === 0) {
      pageInfo.textContent = "لا توجد نتائج";
    } else {
      pageInfo.textContent = `الصفحة ${page} من ${totalPages}`;
    }

    currentPage = page;

    slidesContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
