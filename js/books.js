document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const paginationList = document.getElementById("paginationList");
  const pageInfo = document.getElementById("pageInfo");
  const searchInput = document.querySelector(".form-container input");
  const searchButton = document.querySelector(".form-container button");

  const booksPerPage = 3; // Number of books to show per page
  let currentPage = 1;
  let allBooks = [];
  let filteredBooks = [];

  // Collect all books from all slides
  slides.forEach((slide) => {
    const books = slide.querySelectorAll(".book");
    books.forEach((book) => {
      const bookWrapper = book.closest(".col-md-6, .col-lg-4");
      allBooks.push({
        element: bookWrapper,
        title: book.querySelector("h3")?.textContent.toLowerCase() || "",
      });
    });
  });

  filteredBooks = [...allBooks];

  function searchBooks(query) {
    const searchTerm = query.trim().toLowerCase();

    if (searchTerm === "") {
      // Show all books when search is cleared
      filteredBooks = [...allBooks];
    } else {
      // Filter books by search term
      filteredBooks = allBooks.filter((book) =>
        book.title.includes(searchTerm)
      );
    }

    currentPage = 1;
    renderPagination();
    showPage(1);
  }

  // Search on button click
  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchBooks(searchInput.value);
  });

  // Search on Enter key
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBooks(searchInput.value);
    }
  });

  // Search while typing (input event)
  searchInput.addEventListener("input", function () {
    searchBooks(this.value);
  });

  function renderPagination() {
    paginationList.innerHTML = "";
    const totalPages = Math.max(
      1,
      Math.ceil(filteredBooks.length / booksPerPage)
    );

    if (filteredBooks.length === 0) {
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
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    // Hide all slides and books first
    slides.forEach((slide) => (slide.style.display = "none"));
    allBooks.forEach((book) => {
      book.element.style.display = "none";
    });

    // Calculate which books to show on this page
    const startIndex = (page - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToShow = filteredBooks.slice(startIndex, endIndex);

    // Show only the filtered books for current page
    if (booksToShow.length > 0) {
      // Get the parent slide of the first book to show
      const parentSlide = booksToShow[0].element.closest(".slide");
      if (parentSlide) {
        parentSlide.style.display = "flex";
      }

      // Show each book
      booksToShow.forEach((book) => {
        book.element.style.display = "block";
      });
    }

    // Update pagination active state
    paginationList
      .querySelectorAll(".page-item")
      .forEach((li) => li.classList.remove("active"));
    const currentBtn = paginationList.querySelector(
      `.page-item[data-page='${page}']`
    );
    if (currentBtn) currentBtn.classList.add("active");

    // Update navigation buttons state
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

    const displayStart = startIndex + 1;
    const displayEnd = Math.min(endIndex, filteredBooks.length);
    pageInfo.textContent = `ظهور من ${displayStart} الى ${displayEnd} من ${filteredBooks.length} مدخلات`;
    currentPage = page;
  }

  renderPagination();
  showPage(1);
});
