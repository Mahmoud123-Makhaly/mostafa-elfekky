$(document).ready(function () {
  const timelineItems = document.querySelectorAll(
    ".new-articles .timeline-item"
  );
  const articlesContainer = document.getElementById("articles-container");
  const searchInput = document.querySelector(".form-container input");
  const searchButton = document.querySelector(".form-container button");

  if (!timelineItems.length) {
    console.error("No timeline items found");
    return;
  }

  if (!articlesContainer) {
    console.error("Articles container not found");
    return;
  }

  console.log("Found", timelineItems.length, "timeline items");

  let currentYear = "2013";

  const articlesData = {
    2013: [
      {
        id: 1,
        image: "images/home/img1.jpg",
        title: "أوهام صهيونية . وأحلام عبثية",
        text: `(دولتك يا إسرائيل من الفرات إلى النيل) ليست هذه عبارة جديدة، بل قد
ترددت منذ عدة عقود عندما تحدث غلاة الصهاينة ...`,
        date: "25 اغسطس 2013",
        category: "السياسة",
        slug: "article-details.html?id=1",
      },
      {
        id: 2,
        image: "images/home/img2.jpg",
        title: `المجاعة الفلسطينية ونظرية المؤامرة`,
        text: `يتقمصني في الشهور الأخيرة شعور داخلي عميق بالأسى بل يمتد الأمر
ليراودني في الأسابيع الماضية ...`,
        date: " 8 سبتمبر 2013",
        category: "السياسة",
        slug: "article-details.html?id=2",
      },
      {
        id: 3,
        image: "images/home/img1.jpg",
        title: `كيف يفكر حكام إسرائيل؟`,
        text: `اتسمت تصرفات اليهود تاريخيًا بقدر كبير من المهارة وقسط وافر من الدهاء،
وظل الأمر كذلك في ...`,
        date: "22  سبتمبر 2013",
        category: "الثقافة",
        slug: "article-details.html?id=3",
      },
    ],
    2015: [
      {
        id: 4,
        image: "images/home/img2.jpg",
        title: "مزاج الأمم وشخصية الشعوب",
        text: `عندما كنت أرقب ذلك التجمع غير المسبوق من قادة الدول وممثلي
شعوبها في منتجع شرم الشيخ ... `,
        date: " 20 اكتوبر 2015",
        category: "السياسة",
        slug: "article-details.html?id=4",
      },
      {
        id: 5,
        image: "images/home/img1.jpg",
        title: `المقاومة والمفاوضة`,
        text: `وقر في ذهن الكثيرين أن الصراع بين قوتين إما أن يرتكز على المعارك
المسلحة أو المفاوضات ...`,
        date: `6 اكتوبر 2015`,
        category: "السياسة",
        slug: "article-details.html?id=5",
      },
      {
        id: 6,
        image: "images/home/img5.jpg",
        title: `الإقليم العربي بين قرنين`,
        text: `ليس من شكٍ في أن السنوات الأخيرة من القرن العشرين كانت حافلة
بالأحداث الهامة والتحولات ...`,
        date: `15 اكتوبر 2015`,
        category: "السياسة",
        slug: "article-details.html?id=6",
      },
    ],
    2017: [
      {
        id: 7,
        image: "images/home/img3.jpg",
        title: `نحو سياسة عربية مختلفة`,
        text: `يستبد بي شعور يعادوني من وقت لآخر خصوصًا في أوقات
الأزمات الإقليمية ...`,
        date: " 3 نوفمبر  2017",
        category: "السياسة",
        slug: "article-details.html?id=7",
      },
      {
        id: 8,
        image: "images/home/img1.jpg",
        title: `ترامب بين السياسة والحكم`,
        text: `لم تحظ زيارة رئاسية في التاريخ المعاصر للمنطقة العربية بمثل ما حظيت
به زيارة الرئيس الأمريكي .. `,
        date: "19 سبتمبر  2017",
        category: "السياسة",
        slug: "article-details.html?id=8",
      },
      {
        id: 9,
        image: "images/home/img5.jpg",
        title: `أوزان القوى الإقليمية`,
        text: ` مر إقليم الشرق الأوسط وشرق المتوسط ومنطقة الخليج العربي بظروف
صعبة وغير مسبوقة أبرزت إلى حدٍ كبير ...`,
        date: " 30 يونيو  2017",
        category: " السياسة",
        slug: "article-details.html?id=9",
      },
    ],
    2019: [
      {
        id: 10,
        image: "images/home/img3.jpg",
        title: "المواطنة والأقليات العددية",
        text: `قصدت متعمدًا أن أقرن الأقليات بكلمة المواطنة فأنا ممن يظنون أن
الأقليات العرقية والدينية في العالم ..`,
        date: "16 يونيو 2019",
        category: "السياسة",
        slug: "article-details.html?id=10",
      },
      {
        id: 11,
        image: "images/home/img5.jpg",
        title: "سوريا .. ودول الجوار",
        text: `سوف تظل سوريا طرفًا في معادلة الاشتباك بين دول الشام الكبير ومركز
ثقل في صراعات ما نطلق عليه ...`,
        date: " 28 يوليو 2019",
        category: "السياسة",
        slug: "article-details.html?id=11",
      },
      {
        id: 12,
        image: "images/home/img5.jpg",
        title: `السودان ..وتراكم الأحزان`,
        text: `في غمار أحداث كارثة غزة منذ أكتوبر 2023 تراجعت مـأساة السودان
عن تصدر المشهد وأضحت في مرتبة ثانية ....`,
        date: " 14 يوليو 2019",
        category: "السياسة",
        slug: "article-details.html?id=12",
      },
    ],
    2021: [
      {
        id: 13,
        image: "images/home/img2.jpg",
        title: `نعم للتعددية لا للطائفية`,
        text: `خلط كثيرٌ من المتخصصين في دراسة المجتمعات والتركيبة البشرية لها
بين التعددية والطائفية وتوهم ... `,
        date: " 11 اغسطس 2021   ",
        category: "السياسة",
        slug: "article-details.html?id=13",
      },
      {
        id: 14,
        image: "images/home/img1.jpg",
        title: `نظرة إقليمية حولنا`,
        text: `مر إقليم الشرق الأوسط وشرق المتوسط ومنطقة الخليج العربي بظروف
صعبة وغير مسبوقة أبرزت إلى حدٍ ... `,
        date: " 21 اغسطس 2021   ",
        category: "السياسة",
        slug: "article-details.html?id=14",
      },
      {
        id: 15,
        image: "images/home/img1.jpg",
        title: `رياح الشام`,
        text: `يستأثر الشام الكبير أو تعبير &quot;سوريا الكبرى&quot; باهتمام خاص في
الدراسات الجيوسياسية لمنطقة الشرق الأوسط، ....`,
        date: " 24 مارس 2021   ",
        category: "السياسة",
        slug: "article-details.html?id=15",
      },
    ],
    2023: [
      {
        id: 16,
        image: "images/home/img5.jpg",
        title: `انهيار التراث التاريخي لمظاهر الحضارة الإنسانية`,
        text: `إن الذي يرقب ما يجري حاليًا على المستويين الدولي والإقليمي لابد أن
يدرك أن شيئًا ما قد طرأ على العقل البشري، ....`,
        date: `24 فبراير 2023`,
        category: "السياسة",
        slug: "article-details.html?id=16",
      },
      {
        id: 17,
        image: "images/home/img4.jpg",
        title: `الدولة الوطنية والطوائف الدينية`,
        text: `(يا أيها الناس إنا خلقناكم من ذكر وأنثى وجعلناكم شعوبًا وقبائل لتعارفوا،
إن أكرمكم عند الله أتقاكم) ...`,
        date: " 10 مارس 2023   ",
        category: "السياسة",
        slug: "article-details.html?id=17",
      },
      {
        id: 18,
        image: "images/home/img3.jpg",
        title: `غزة مسئولية من؟`,
        text: `إنه السؤال الأكبر والأهم بل والسؤال الحائر فمع الفاتورة فادحة الثمن
التي دفعها ويدفعها أهل غزة من دمائهم ونسائهم وأطفالهم ...`,
        date: `21 ابريل 2023`,
        category: "السياسة",
        slug: "article-details.html?id=18",
      },
    ],
    2025: [
      {
        id: 19,
        image: "images/home/img4.jpg",
        title: `الأديان والقضية الفلسطينية`,
        text: `إن أخطر ما واجهته القضية الفلسطينية عبر قرن كامل أو ما يزيد هو
محاولة تديين الصراع منذ بدايته، ....`,
        date: "5 مايو 2025",
        category: "السياسة",
        slug: "article-details.html?id=19",
      },
      {
        id: 20,
        image: "images/home/img3.jpg",
        title: `حالة جديدة في الشرق الأوسط`,
        text: `عوامل متعددة وأحداث صاخبة أدت إلى تغييرات جذرية وتحولات
واضحة في الهيكل العام للبنية ... `,
        date: `7 ابريل 2025`,
        category: "السياسة",
        slug: "article-details.html?id=20",
      },
      {
        id: 21,
        image: "images/home/img2.jpg",
        title: `الندم الإيجابي والدبلوماسية المعاصرة`,
        text: `كتبت من قبل عن الفارق بين الندم الإيجابي والندم السلبي مؤكدًا أن الندم
الإيجابي هو أن تندم على ... `,
        date: " 2 يونيو 2025    ",
        category: "السياسة",
        slug: "article-details.html?id=21",
      },
      {
        id: 22,
        image: "images/home/img1.jpg",
        title: "الضوء الشاحب في نهاية النفق",
        text: `إن الذي يتابع ما جرى على الساحة الشرق أوسطية منذ حادث السابع من
أكتوبر 2023 يدرك ....`,
        date: " 27 يناير 2025",
        category: "السياسة",
        slug: "article-details.html?id=22",
      },
      {
        id: 23,
        image: "images/home/img5.jpg",
        title: `رؤساء أمريكا الذين عاصرتهم`,
        text: `توافد على البيت الأبيض بواشنطن العديد من الرؤساء بدءًا من الرئيس
جورج واشنطن وصولاً إلى الرئيس ...`,
        date: " 10 فبراير 2025",
        category: "العلاقات الدولية",
        slug: "article-details.html?id=23",
      },
    ],
  };

  function searchArticles(searchTerm) {
    if (!searchTerm.trim()) {
      return { articles: articlesData[currentYear] || [], year: null };
    }

    const term = searchTerm.toLowerCase().trim();

    let allArticles = [];
    let foundYear = null;

    Object.keys(articlesData).forEach((year) => {
      const yearArticles = articlesData[year].filter((article) => {
        return article.title.toLowerCase().includes(term);
      });

      if (yearArticles.length > 0 && !foundYear) {
        foundYear = year; 
      }

      allArticles = allArticles.concat(yearArticles);
    });

    return { articles: allArticles, year: foundYear };
  }

  function renderArticles(articles) {
    articlesContainer.innerHTML = "";

    if (articles.length === 0) {
      articlesContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted fs-5">لا توجد مقالات مطابقة للبحث</p>
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
              <a href="${article.slug}" class="btn  d-flex align-items-center justify-content-center  " style="width: 40px; height: 40px;">
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

  function updateTimelineYear(year) {
    if (!year) return;

    timelineItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-year") === year) {
        item.classList.add("active");
      }
    });

    currentYear = year;
  }

  if (searchButton) {
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      const searchTerm = searchInput.value;
      const result = searchArticles(searchTerm);

      if (result.year) {
        updateTimelineYear(result.year);
      }

      renderArticles(result.articles);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const searchTerm = searchInput.value;
        const result = searchArticles(searchTerm);

        if (result.year) {
          updateTimelineYear(result.year);
        }

        renderArticles(result.articles);
      }
    });

    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value;
      const result = searchArticles(searchTerm);

      if (result.year) {
        updateTimelineYear(result.year);
      }

      renderArticles(result.articles);
    });
  }

  const defaultYear = "2013";
  currentYear = defaultYear;

  renderArticles(articlesData[defaultYear] || []);
  timelineItems.forEach((item) => {
    const year = item.getAttribute("data-year");
    item.classList.remove("active");

    if (year === defaultYear) {
      item.classList.add("active");
    }
  });

  timelineItems.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("Timeline item clicked:", this.getAttribute("data-year"));

      const year = this.getAttribute("data-year");

      updateTimelineYear(year);

      if (searchInput) {
        searchInput.value = "";
      }

      renderArticles(articlesData[year] || []);
    });
  });

  console.log("Timeline initialization complete - showing year:", defaultYear);
});
