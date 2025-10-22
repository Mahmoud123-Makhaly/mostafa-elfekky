//  pagination logic for programmes
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const paginationList = document.getElementById("paginationList");
  const pageInfo = document.getElementById("pageInfo");
  const slidesPerPage = 1; // how many slides per page
  let currentPage = 1;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  // create a function to render pagination buttons
  function renderPagination() {
    paginationList.innerHTML = "";

    // === RIGHT SIDE (Arabic reading order) ===
    // first page button
    const first = document.createElement("li");
    first.className = "page-item";
    first.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-angles-right"></i></a>`;
    first.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(1);
    });
    paginationList.appendChild(first);

    // previous page
    const prev = document.createElement("li");
    prev.className = "page-item";
    prev.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>`;
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(currentPage - 1);
    });
    paginationList.appendChild(prev);

    // page numbers
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

    // next page
    const next = document.createElement("li");
    next.className = "page-item";
    next.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-chevron-left"></i></a>`;
    next.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(currentPage + 1);
    });
    paginationList.appendChild(next);

    // last page
    const last = document.createElement("li");
    last.className = "page-item";
    last.innerHTML = `<a class="page-link" href="#"><i class="fa-solid fa-angles-left"></i></a>`;
    last.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(totalPages);
    });
    paginationList.appendChild(last);
  }

  // show slides based on page number
  function showPage(page) {
    slides.forEach((slide, index) => {
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

    // disable arrows when at edges
    const [first, prev, , , next, last] = paginationList.children;
    if (page === 1) {
      first.classList.add("disabled");
      prev.classList.add("disabled");
    } else {
      first.classList.remove("disabled");
      prev.classList.remove("disabled");
    }
    if (page === totalPages) {
      next.classList.add("disabled");
      last.classList.add("disabled");
    } else {
      next.classList.remove("disabled");
      last.classList.remove("disabled");
    }

    pageInfo.textContent = `ظهور من ${page} الى ${totalPages} من المدخلات`;
    currentPage = page;
  }

  renderPagination();
  showPage(1);
});
