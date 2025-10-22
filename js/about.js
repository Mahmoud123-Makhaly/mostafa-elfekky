//about page -  education section logic -  timeline

document.addEventListener("DOMContentLoaded", function () {
  // Get all timeline items
  const timelineItems = document.querySelectorAll(".education .timeline-item");

  // Content data for each year
  const contentData = {
    1960: {
      image: "images/about/mustafa.jpg",
      title: "تعليم مصطفى الفقي في جامعة لندن",
      desc1:
        "عربى،هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص",
      desc2:
        "ذا النص من مولد النص العربى، هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص",
    },
    1970: {
      image: "https://placehold.co/600x400/198754/ffffff?text=1970",
      title: "بداية مسيرة مصطفى الفقي المهنية",
      desc1:
        "في عام 1970، بدأ مصطفى الفقي مسيرته المهنية في مجال الدبلوماسية، حيث عمل في عدة سفارات مصرية حول العالم.",
      desc2:
        "تميز خلال هذه الفترة بقدرته على بناء علاقات قوية مع المسؤولين في الدول التي عمل بها، مما ساهم في تعزيز العلاقات الدولية لمصر.",
    },
    1980: {
      image: "images/about/mustafa.jpg",
      title: "إسهامات مصطفى الفقي في السياسة الخارجية",
      desc1:
        "خلال عقد الثمانينات، لعب مصطفى الفقي دوراً مهماً في صياغة السياسة الخارجية المصرية، خاصة في علاقات مصر مع الدول الأوروبية.",
      desc2:
        "كان له دور بارز في تعزيز التعاون الثقافي والعلمي بين مصر ودول الاتحاد الأوروبي.",
    },
    1990: {
      image: "images/about/mustafa.jpg",
      title: "رئاسة مصطفى الفقي لمكتبة الإسكندرية",
      desc1:
        "في تسعينيات القرن الماضي، تولى مصطفى الفقي رئاسة مكتبة الإسكندرية، حيث قاد عملية إحياء هذه المؤسسة الثقافية العريقة.",
      desc2:
        "تحت قيادته، أصبحت مكتبة الإسكندرية مركزاً ثقافياً وإشعاعياً مهماً في المنطقة والعالم.",
    },
    2000: {
      image: "https://placehold.co/600x400/6f42c1/ffffff?text=2000",
      title: "إسهامات مصطفى الفقي في الحياة البرلمانية",
      desc1:
        "مع بداية الألفية الجديدة، دخل مصطفى الفقي الحياة البرلمانية، حيث مثل دائرته الانتخابية في مجلس الشعب المصري.",
      desc2:
        "كان له دور فعال في العديد من اللجان البرلمانية، خاصة تلك المتعلقة بالشؤون الخارجية والتعليم العالي.",
    },
    2010: {
      image: "images/about/mustafa.jpg",
      title: "مصطفى الفقي والربيع العربي",
      desc1:
        "خلال فترة الربيع العربي، قدم مصطفى الفقي تحليلات عميقة للأحداث الجارية في المنطقة، مستنداً إلى خبرته الطويلة في الشؤون الدولية.",
      desc2:
        "كانت مقالاته وتحليلاته مرجعاً مهماً لفهم التطورات السياسية في العالم العربي خلال هذه الفترة المضطربة.",
    },
    2025: {
      image: "https://placehold.co/600x400/0dcaf0/ffffff?text=2025",
      title: "رؤية مصطفى الفقي للمستقبل",
      desc1:
        "يتطلع مصطفى الفقي إلى مستقبل مشرق لمصر والعالم العربي، حيث يرى أهمية التكامل الإقليمي والاستثمار في التعليم والبحث العلمي.",
      desc2:
        "يدعو إلى تعزيز الحوار بين الحضارات والثقافات كوسيلة لبناء عالم أكثر استقراراً وازدهاراً.",
    },
  };

  // Add click event to each timeline item
  timelineItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Get the year from data attribute
      const year = this.getAttribute("data-year");

      // Remove active class from all items
      timelineItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      // Update content based on the year
      updateContent(year);
    });
  });

  // Function to update content
  function updateContent(year) {
    const data = contentData[year];

    // Update image
    document.querySelector(".img-container img").src = data.image;
    document.querySelector(".img-container img").alt = year;

    // Update content text
    document.querySelector(".content span").textContent = year;
    document.querySelector(".content .title").textContent = data.title;

    // Update description paragraphs
    const descParagraphs = document.querySelectorAll(".content .desc");
    descParagraphs[0].textContent = data.desc1;
    descParagraphs[1].textContent = data.desc2;
  }
});
