// Wait for DOM to be fully loaded
$(document).ready(function () {
  // Get all timeline items
  const timelineItems = document.querySelectorAll(
    ".new-articles .timeline-item"
  );
  const articlesContainer = document.getElementById("articles-container");

  // Check if elements exist
  if (!timelineItems.length) {
    console.error("No timeline items found");
    return;
  }

  if (!articlesContainer) {
    console.error("Articles container not found");
    return;
  }

  console.log("Found", timelineItems.length, "timeline items");

  // Articles data for each year
  const articlesData = {
    1960: [
      {
        id: 1,
        image: "images/home/img1.jpg",
        title: "أحداث فاصلة في صراعات الشرق الأوسط 1960",
        text: "إن هناك دلالات متميزة ومختلفة لطبيعة ذلك الصراع المزمن والمواقف الدولية والإقليمية منه في عام 1960.",
        date: "10 ديسمبر 1960",
        category: "السياسة",
      },
      {
        id: 2,
        image: "images/home/img2.jpg",
        title: "التطورات الاقتصادية في العالم العربي 1960",
        text: "شهد العام 1960 تطورات اقتصادية مهمة في المنطقة العربية مع تغير في السياسات الاقتصادية العالمية.",
        date: "5 نوفمبر 1960",
        category: "الاقتصاد",
      },
      {
        id: 3,
        image: "images/home/img3.jpg",
        title: "مستقبل الطاقة المتجددة في المنطقة 1960",
        text: "مع تزايد الاهتمام بالطاقة المتجددة، تشهد المنطقة استثمارات كبيرة في هذا القطاع الواعد خلال 1960.",
        date: "20 أكتوبر 1960",
        category: "الطاقة",
      },
      {
        id: 4,
        image: "images/home/img4.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
      {
        id: 5,
        image: "images/home/img5.jpg",
        title: "العلاقات الدولية 1960",
        text: "شهد عام 1960 تحولات كبيرة في العلاقات الدولية مع تغير التحالفات والاستراتيجيات العالمية.",
        date: "8 أغسطس 1960",
        category: "العلاقات الدولية",
      },
      {
        id: 6,
        image: "images/home/img1.jpg",
        title: "الثقافة والفنون 1960",
        text: "شهد عام 1960 نهضة ثقافية وفنية في العالم العربي مع ظهور العديد من المواهب الجديدة.",
        date: "22 يوليو 1960",
        category: "الثقافة",
      },
    ],
    1970: [
    
      {
        id: 4,
        image: "images/home/img2.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
      {
        id: 5,
        image: "images/home/img1.jpg",
        title: "العلاقات الدولية 1960",
        text: "شهد عام 1960 تحولات كبيرة في العلاقات الدولية مع تغير التحالفات والاستراتيجيات العالمية.",
        date: "8 أغسطس 1960",
        category: "العلاقات الدولية",
      },
      {
        id: 6,
        image: "images/home/img5.jpg",
        title: "الثقافة والفنون 1960",
        text: "شهد عام 1960 نهضة ثقافية وفنية في العالم العربي مع ظهور العديد من المواهب الجديدة.",
        date: "22 يوليو 1960",
        category: "الثقافة",
      },
    ],
    1980: [
      
      {
        id: 2,
        image: "images/home/img3.jpg",
        title: "التطورات الاقتصادية في العالم العربي 1960",
        text: "شهد العام 1960 تطورات اقتصادية مهمة في المنطقة العربية مع تغير في السياسات الاقتصادية العالمية.",
        date: "5 نوفمبر 1960",
        category: "الاقتصاد",
      },
 
      {
        id: 4,
        image: "images/home/img1.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
      {
        id: 5,
        image: "images/home/img5.jpg",
        title: "العلاقات الدولية 1960",
        text: "شهد عام 1960 تحولات كبيرة في العلاقات الدولية مع تغير التحالفات والاستراتيجيات العالمية.",
        date: "8 أغسطس 1960",
        category: "العلاقات الدولية",
      },
  
    ],
    1990: [
   
      {
        id: 2,
        image: "images/home/img3.jpg",
        title: "التطورات الاقتصادية في العالم العربي 1960",
        text: "شهد العام 1960 تطورات اقتصادية مهمة في المنطقة العربية مع تغير في السياسات الاقتصادية العالمية.",
        date: "5 نوفمبر 1960",
        category: "الاقتصاد",
      },
  
      {
        id: 4,
        image: "images/home/img5.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
    
    
    ],
    2000: [
      {
        id: 16,
        image: "images/home/img2.jpg",
        title: "الاحتجاجات الشعبية في المنطقة 2000",
        text: "شهد عام 2000 موجة من الاحتجاجات الشعبية في عدة دول عربية مطالبة بالإصلاح والتغيير.",
        date: "15 سبتمبر 2000",
        category: "السياسة",
      },
  
      {
        id: 18,
        image: "images/home/img1.jpg",
        title: "التحضيرات للعقد الجديد 2000",
        text: "مع نهاية العقد الأول من الألفية، شهد عام 2000 تحضيرات واستعدادات للعقد الجديد بمختلف تحدياته.",
        date: "22 يوليو 2000",
        category: "عام",
      },
    ],
    2010: [
     {
        id: 1,
        image: "images/home/img5.jpg",
        title: "أحداث فاصلة في صراعات الشرق الأوسط 1960",
        text: "إن هناك دلالات متميزة ومختلفة لطبيعة ذلك الصراع المزمن والمواقف الدولية والإقليمية منه في عام 1960.",
        date: "10 ديسمبر 1960",
        category: "السياسة",
      },
      {
        id: 2,
        image: "images/home/img4.jpg",
        title: "التطورات الاقتصادية في العالم العربي 1960",
        text: "شهد العام 1960 تطورات اقتصادية مهمة في المنطقة العربية مع تغير في السياسات الاقتصادية العالمية.",
        date: "5 نوفمبر 1960",
        category: "الاقتصاد",
      },
      {
        id: 3,
        image: "images/home/img3.jpg",
        title: "مستقبل الطاقة المتجددة في المنطقة 1960",
        text: "مع تزايد الاهتمام بالطاقة المتجددة، تشهد المنطقة استثمارات كبيرة في هذا القطاع الواعد خلال 1960.",
        date: "20 أكتوبر 1960",
        category: "الطاقة",
      },
      {
        id: 4,
        image: "images/home/img2.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
      {
        id: 5,
        image: "images/home/img1.jpg",
        title: "العلاقات الدولية 1960",
        text: "شهد عام 1960 تحولات كبيرة في العلاقات الدولية مع تغير التحالفات والاستراتيجيات العالمية.",
        date: "8 أغسطس 1960",
        category: "العلاقات الدولية",
      },
      {
        id: 6,
        image: "images/home/img5.jpg",
        title: "الثقافة والفنون 1960",
        text: "شهد عام 1960 نهضة ثقافية وفنية في العالم العربي مع ظهور العديد من المواهب الجديدة.",
        date: "22 يوليو 1960",
        category: "الثقافة",
      },
    ],
    2025: [
        {
        id: 1,
        image: "images/home/img4.jpg",
        title: "أحداث فاصلة في صراعات الشرق الأوسط 1960",
        text: "إن هناك دلالات متميزة ومختلفة لطبيعة ذلك الصراع المزمن والمواقف الدولية والإقليمية منه في عام 1960.",
        date: "10 ديسمبر 1960",
        category: "السياسة",
      },
      {
        id: 2,
        image: "images/home/img3.jpg",
        title: "التطورات الاقتصادية في العالم العربي 1960",
        text: "شهد العام 1960 تطورات اقتصادية مهمة في المنطقة العربية مع تغير في السياسات الاقتصادية العالمية.",
        date: "5 نوفمبر 1960",
        category: "الاقتصاد",
      },
      {
        id: 3,
        image: "images/home/img2.jpg",
        title: "مستقبل الطاقة المتجددة في المنطقة 1960",
        text: "مع تزايد الاهتمام بالطاقة المتجددة، تشهد المنطقة استثمارات كبيرة في هذا القطاع الواعد خلال 1960.",
        date: "20 أكتوبر 1960",
        category: "الطاقة",
      },
      {
        id: 4,
        image: "images/home/img1.jpg",
        title: "التعليم في العالم العربي 1960",
        text: "شهد عام 1960 تطورات كبيرة في مجال التعليم في العالم العربي مع افتتاح العديد من الجامعات الجديدة.",
        date: "15 سبتمبر 1960",
        category: "التعليم",
      },
      {
        id: 5,
        image: "images/home/img5.jpg",
        title: "العلاقات الدولية 1960",
        text: "شهد عام 1960 تحولات كبيرة في العلاقات الدولية مع تغير التحالفات والاستراتيجيات العالمية.",
        date: "8 أغسطس 1960",
        category: "العلاقات الدولية",
      },
      {
        id: 6,
        image: "images/home/img1.jpg",
        title: "الثقافة والفنون 1960",
        text: "شهد عام 1960 نهضة ثقافية وفنية في العالم العربي مع ظهور العديد من المواهب الجديدة.",
        date: "22 يوليو 1960",
        category: "الثقافة",
      },
    ],
  };

  // Function to render articles
  function renderArticles(articles) {
    console.log("Rendering", articles.length, "articles");
    articlesContainer.innerHTML = "";

    if (articles.length === 0) {
      articlesContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted">لا توجد مقالات لهذا العام</p>
        </div>
      `;
      return;
    }

    articles.forEach((article) => {
      const articleElement = document.createElement("div");
      articleElement.className = "col-md-6 col-lg-4 article-item";
      articleElement.innerHTML = `
        <div class="card position-relative h-100">
          <img src="${article.image}" class="card-img-top" alt="${article.title}" style="height: 200px; object-fit: cover;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text flex-grow-1">${article.text}</p>
            <div class="pt-1 d-flex justify-content-between align-items-center mt-auto">
              <h6 class="mb-0 ">${article.date}</h6>
              <a href="#" class="btn  d-flex align-items-center justify-content-center  " style="width: 40px; height: 40px;">
                <i class="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </div>
          <span class="position-absolute badge py-2" style="top: 15px; left: 15px;">${article.category}</span>
        </div>
      `;
      articlesContainer.appendChild(articleElement);
    });
  }

  // Set the default year to show on first load
  const defaultYear = "1960"; // Change this to whichever year you want to show first

  // Initialize with default year articles only
  renderArticles(articlesData[defaultYear] || []);

  // Make sure the correct timeline item is active on page load
  timelineItems.forEach((item) => {
    const year = item.getAttribute("data-year");
    item.classList.remove("active");

    if (year === defaultYear) {
      item.classList.add("active");
    }
  });

  // Add click event to each timeline item
  timelineItems.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("Timeline item clicked:", this.getAttribute("data-year"));

      // Get the year from data attribute
      const year = this.getAttribute("data-year");

      // Remove active class from all items
      timelineItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      // Filter articles based on the year
      let filteredArticles;
      if (year === "all") {
        // If you want "all" to show all articles, you can implement this
        // For now, let's keep it showing only specific year articles
        filteredArticles = articlesData[defaultYear] || [];
      } else {
        filteredArticles = articlesData[year] || [];
      }

      // Render filtered articles
      renderArticles(filteredArticles);
    });
  });

  console.log("Timeline initialization complete - showing year:", defaultYear);
});
