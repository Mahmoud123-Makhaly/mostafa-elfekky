document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const paginationList = document.getElementById("paginationList");
  const pageInfo = document.getElementById("pageInfo");
  const searchInput = document.querySelector(".form-container input");
  const searchButton = document.querySelector(".form-container button");

  const slidesPerPage = 1;
  let currentPage = 1;
  let filteredSlides = Array.from(slides);

  function searchBooks(query) {
    const searchTerm = query.trim().toLowerCase();

    if (searchTerm === "") {
      filteredSlides = Array.from(slides);
      slides.forEach((slide) => (slide.style.display = "flex"));
    } else {
      filteredSlides = Array.from(slides).filter((slide) => {
        const books = slide.querySelectorAll(".book");
        let hasMatch = false;

        books.forEach((book) => {
          const title =
            book.querySelector("h3")?.textContent.toLowerCase() || "";

          if (title.includes(searchTerm)) {
            hasMatch = true;
          }
        });

        return hasMatch;
      });

      slides.forEach((slide) => {
        if (filteredSlides.includes(slide)) {
          slide.style.display = "flex";
        } else {
          slide.style.display = "none";
        }
      });
    }

    currentPage = 1;
    renderPagination();
    showPage(1);
  }

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchBooks(searchInput.value);
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBooks(searchInput.value);
    }
  });

  searchInput.addEventListener("input", function () {
    searchBooks(this.value);
  });

  function renderPagination() {
    paginationList.innerHTML = "";
    const totalPages = Math.max(1, filteredSlides.length);

    if (filteredSlides.length === 0) {
      pageInfo.textContent = "لا توجد نتائج مطابقة للبحث";
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
  }

  function showPage(page) {
    const totalPages = filteredSlides.length;

    slides.forEach((slide) => (slide.style.display = "none"));

    filteredSlides.forEach((slide, index) => {
      slide.style.display =
        index >= (page - 1) * slidesPerPage && index < page * slidesPerPage
          ? "flex"
          : "none";
    });

    paginationList
      .querySelectorAll(".page-item")
      .forEach((li) => li.classList.remove("active"));
    const currentBtn = paginationList.querySelector(
      `.page-item[data-page='${page}']`
    );
    if (currentBtn) currentBtn.classList.add("active");

    const buttons = paginationList.children;
    if (buttons.length > 0) {
      const [first, prev] = buttons;
      const next = buttons[buttons.length - 2];
      const last = buttons[buttons.length - 1];

      if (page === 1) {
        first?.classList.add("disabled");
        prev?.classList.add("disabled");
      } else {
        first?.classList.remove("disabled");
        prev?.classList.remove("disabled");
      }

      if (page === totalPages) {
        next?.classList.add("disabled");
        last?.classList.add("disabled");
      } else {
        next?.classList.remove("disabled");
        last?.classList.remove("disabled");
      }
    }

    pageInfo.textContent = `ظهور من ${page} الى ${totalPages} من المدخلات`;
    currentPage = page;
  }

  renderPagination();
  showPage(1);
});
