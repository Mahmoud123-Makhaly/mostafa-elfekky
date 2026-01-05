document.addEventListener("DOMContentLoaded", function () {
  // Get all timeline items
  const timelineItems = document.querySelectorAll(".education .timeline-item");

  // Content data for each year
  const contentData = {
    1965: {
      image: "../images/home/v4.jfif",
      desc1: `
        <h6 class="fw-bold">المؤهلات العلمية</h6>
        <p style="font-size: 15px;margin-bottom: .5rem">1966: بكالوريوس العلوم السياسية، كلية الاقتصاد والعلوم السياسية، جامعة القاهرة</p>
        <p style="font-size: 15px;margin-bottom: .5rem">1974: ماجستير الفلسفة في العلوم السياسية - كلية الدراسات الشرقية والإفريقية SOAS، جامعة لندن</p>

        <h6 class="fw-bold">بداية المسيرة المهنية</h6>
        <p style="font-size: 15px;margin-bottom: .5rem">1966: ملحق دبلوماسي، وزارة الخارجية المصرية</p>
        <p style="font-size: 15px;margin-bottom: .5rem">1966: ممثل الشباب المصري في الجزائر في احتفالات عيد استقلالها، ونقل رفات الأمير عبد القادر الجزائري إلى وطنه، يونيو</p>
        
        <h6 class="fw-bold">المناصب المبكرة</h6>
        <p style="font-size: 15px;margin-bottom: .5rem">1971-1976: نائب القنصل (القنصلية المصرية العامة في لندن)، سكرتير ثانٍ (السفارة المصرية في لندن)</p>
        <h6 class="fw-bold">   الأنشطة الطلابية</h6>
        <p style="font-size: 15px;margin-bottom: .5rem">1964-1966: رئيس اتحاد طلاب كلية الاقتصاد والعلوم السياسية</p>
        <p style="font-size: 15px;margin-bottom: .5rem">1966-1967: مسئول التثقيف لمنظمة الشباب العربي بالقاهرة</p>
        <p style="font-size: 15px;margin-bottom: .5rem">1965: كأس أسبوع شباب الجامعات في الخطابة</p>
        <p style="font-size: 15px;margin-bottom: .5rem">1966: الجائزة الأولى في «المقال السياسي» من المجلس الأعلى للعلوم والفنون والآداب</p>
        <h6 class="fw-bold">الأوسمة والجوائز</h6>
        <p style="font-size: 15px;margin-bottom: .5rem">1975: وسام الاستحقاق من الطبقة الرابعة من جمهورية مصر العربية</p>
      `,
      desc2: "", // Empty for this year since all content is in desc1
    },
    1975: {
      image: "../images/home/v5.jfif",
      desc1: `
    <h6 class="fw-bold">المؤهلات العلمية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1977: دكتوراه الفلسفة في العلوم السياسية - كلية الدراسات الشرقية والإفريقية SOAS، جامعة لندن (رسالة الدكتوراه: الأقباط في السياسة المصرية)</p>
    
    <h6 class="fw-bold">الأنشطة الأكاديمية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1978-1993: أستاذ خارجي، قسم العلوم السياسية، الجامعة الأمريكية بالقاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1979-1983: أستاذ السياسة الدولية وشئون الشرق الأوسط (زائر) بجامعة «جواهر لال نهرو» في نيودلهي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1979: عضو جمعية الإخاء الديني</p>
    
    <h6 class="fw-bold">المهام الدبلوماسية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1979-1983: مستشار، السفارة المصرية في نيودلهي، الهند</p>
    
    <h6 class="fw-bold">الإصدارات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1981: الشعب الواحد والوطن الواحد (اشترك في كتابته مع د. بطرس غالي)</p>
    
    <h6 class="fw-bold">الأوسمة والجوائز</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1975: وسام الاستحقاق من الطبقة الرابعة من جمهورية مصر العربية</p>
  `,
      desc2: "",
    },
    1985: {
      image: "../images/home/v6.jfif",
      desc1: `
    <h6 class="fw-bold">المناصب الرئاسية والتنفيذية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">يوليو 1985 - أكتوبر 1992: سكرتير رئيس جمهورية مصر العربية للمعلومات والمتابعة، ثم رئيس مكتب المعلومات والمتابعة برئاسة الجمهورية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1985: رئيس وفد مصر للمؤتمر العالمي للباب في جامايكا، إبريل</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1987: وزير مفوض (ترقية استثنائية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1992-1993: أمين عام المجلس الاستشاري للسياسة الخارجية، وزارة الخارجية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993-1995: مدير معهد الدراسات الدبلوماسية، وزارة الخارجية المصرية</p>
    
    <h6 class="fw-bold">العضوية في المجالس واللجان</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: عضو لجنة العلوم السياسية بالمجلس الأعلى للثقافة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1994-1995: عضو المجلس التنفيذي للجمعية المصرية للدراسات التاريخية</p>
    
    <h6 class="fw-bold">المشاركة في المجتمع المدني</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1992-1995: نائب رئيس مجلس إدارة جمعية الصداقة المصرية الهندية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993-1994: مشرف على صالون ثقافي شهري</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1989: عضو جمعية خريجي الجامعة البريطانية بالقاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1990: عضو الجمعية المصرية للقانون الدولي</p>
    
    <h6 class="fw-bold">الأوسمة الدولية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1985: وسام استحقاق «الخدمة المدنية» من مملكة إسبانيا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1986: وسام الاستحقاق بدرجة «فارس» من مملكة الدانمارك</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1987: وسام الاستحقاق بدرجة «فارس» من مملكة السويد</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1988: وسام الجمهورية من الطبقة الثانية من جمهورية السودان</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1989: وسام الاستحقاق الوطني بدرجة «قائد» من جمهورية فرنسا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1989: وسام الاستحقاق الوطني من جمهورية قبرص</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1990: وسام الجمهورية من الصنف الثاني من جمهورية تونس</p>
  `,
      desc2: `
    <h6 class="fw-bold">الإصدارات العلمية والكتب</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1985: الأقباط في السياسة المصرية (الطبعات العربية - دار الشروق ودار الهلال)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1989: الأقباط في السياسة المصرية (الطبعة الإنجليزية - الهيئة المصرية العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: تجديد الفكر القومي (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: الإسلام في عالم متغير (الطبعة الإنجليزية - الهيئة المصرية العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: لقاء الأفكار (الهيئة المصرية العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1994: حوار الأجيال (دار الشروق)</p>
    
    <h6 class="fw-bold">الموسوعات والمشاركات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1990: الموسوعة القبطية (مشارك)، باريس</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1994: موسوعة الشروق (مشارك)</p>
    
    <h6 class="fw-bold">الجوائز والتكريمات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: جائزة الدولة التشجيعية في العلوم السياسية عن كتاب "تجديد الفكر القومي"</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1993: جائزة أفضل كتاب من معرض القاهرة الدولي للكتاب عن كتاب "تجديد الفكر القومي"</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1994: جائزة الدولة التشجيعية في العلوم السياسية</p>
    
    <h6 class="fw-bold">التقدير الأكاديمي</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">أستاذ خارجي، قسم العلوم السياسية، الجامعة الأمريكية بالقاهرة (1978 - 1993)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">عضو في مجلس إدارة مركز البحوث والدراسات السياسية (كلية الاقتصاد والعلوم السياسية، جامعة القاهرة، 1993/1995/2006)</p>
    
    <h6 class="fw-bold">الندوات والمحاضرات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">محاضر في الجامعات المصرية: القاهرة، وعين شمس، والإسكندرية، وأسيوط، والمنصورة، والزقازيق، وطنطا، والمنوفية، وقناة السويس، والمنيا، وحلوان، والفيوم ومعظم الجامعات الأهلية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">محاضر في كل الأكاديميات المتخصصة والجمعيات العلمية والندوات الثقافية داخل جمهورية مصر العربية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">أستاذ مادة (السياسة الخارجية المصرية) لكبار ضباط القوات المسلحة (للحصول على درجة الماجستير) بأكاديمية ناصر، القاهرة</p>
  `,
    },
    1995: {
      image: "../images/home/v7.jfif",
      desc1: `
    <h6 class="fw-bold">المناصب الدبلوماسية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1995: سفير بالخارجية المصرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1995-1999: سفير جمهورية مصر العربية لدى النمسا والمندوب الدائم لدى عدة منظمات دولية في فيينا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1995-1999: سفير غير مقيم لدى جمهوريات سلوفاكيا وسلوفينيا وكرواتيا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1995-1997 و1998-1999: مندوب مصر لدى الوكالة الدولية للطاقة الذرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">النصف الثاني من 1995 والنصف الأول من 1999: رئيس مجلس السفراء الأفارقة في فيينا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1999: مساعد وزير الخارجية المصرية للشئون العربية والشرق الأوسط والمندوب المصري الدائم لدى جامعة الدول العربية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2000: «سفير ممتاز» بالخارجية المصرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2000: مساعد أول لوزير الخارجية المصرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1999: رئيس الوفد المصري في الاجتماعات التحضيرية للجان المشتركة بين مصر والدول العربية</p>
    
    <h6 class="fw-bold">المناصب البرلمانية والرئاسية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2001: عضو البرلمان المصري (رئيس لجنة العلاقات الخارجية بمجلس الشعب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002-2004: عضو المجلس الأعلى للسياسات بالحزب الحاكم ورئيس لجنة «مصر والعالم»</p>
    <p style="font-size: 15px;margin-bottom: .5rem">يناير 2004: عضو المجلس القومي لحقوق الإنسان</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2004: رئيس تحرير مجلة «مجلس الشعب»</p>
    
    <h6 class="fw-bold">المشاركات الدولية والمؤتمرات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1995: المتحدث الرئيسي في الجلسة الختامية في المنتدى الاقتصادي العالمي في دافوس، سويسرا، يناير</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2000: المتحدث الرئيسي في الجلسة الختامية في ندوة «ولتون بارك» حول الشرق الأوسط، المملكة المتحدة، يوليو</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: ضيف برنامج Hard Talk الشهير في التليفزيون البريطاني (BBC)، أغسطس</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: المتحدث في الجلسة الرئيسية (المؤتمر المشترك بين المعهد الملكي للشئون الدولية والمجلس المصري للشئون الخارجية)، لندن، يوليو</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: متحدث في ندوة مجلس الشيوخ الفرنسي حول قضية حماية التراث الإنساني، باريس، أكتوبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: ممثل للبرلمان المصري أمام الجمعية العامة للأمم المتحدة في نيويورك، أكتوبر ونوفمبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: متحدث في المؤتمر السنوي لمعهد الشرق الأوسط، واشنطن، أكتوبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: متحدث أمام لجنة العلاقات الخارجية، نيويورك، أكتوبر</p>
  `,
      desc2: `
    <h6 class="fw-bold">المشاركات الدولية والمؤتمرات (تابع)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: محاضر أمام المعهد الأوروبي الأيرلندي، دبلن، مايو</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: متحدث في الاجتماع السنوي للجمعية المصرية البريطانية، لندن، مايو</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: محاضر بدعوة من الجالية المصرية في مونتريال، ثم الجالية المصرية في نيويورك وواشنطن، نوفمبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2004: متحدث في مؤتمر الهيئة الإسلامية الأمريكية، نيوجيرسي، أكتوبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2004: متحدث أمام رواد معرض فرانكفورت الدولي للكتاب حول المستقبل العربي، أكتوبر</p>
    
    <h6 class="fw-bold">الإصدارات العلمية والكتب</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1999: الإسلام في عالم متغير (الطبعة العربية - دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: الرهان على الحصان (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: نهج الثورة وفكر الإصلاح (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: العرب.. الأصل والصورة (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: محنة أمة (دار الشروق) - جائزة أفضل كتاب من معرض القاهرة الدولي للكتاب يناير 2004</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2004: حصاد قرن (الهيئة المصرية العامة للكتاب) - باللغة الإنجليزية</p>
    
    <h6 class="fw-bold">العضوية في المجالس واللجان</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1995: عضو لجنة قطاع الدراسات الاقتصادية والعلوم السياسية بجمهورية مصر العربية (برئاسة رئيس الوزراء)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2000-2006: عضو اللجنة التنفيذية للمجلس القومي للمرأة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2000-2005: عضو مجلس إدارة نادي هليوبوليس، القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2001: عضو المجلس المصري للشئون الخارجية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002-2004: عضو الهيئة الاستشارية لمؤسسة الفكر العربي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: عضو مجلس أمناء جمعية الصداقة المصرية الهندية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2002: عضو مجلس الأمناء للمؤسسة التعليمية (MBI)، لندن، المملكة المتحدة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: عضو مجلس أمناء معهد الدراسات الدبلوماسية، وزارة الخارجية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: عضو مجلس إدارة المعهد الإقليمي لتكنولوجيا المعلومات، القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: عضو لجنة المجلس لمراجعة ترشيحات جوائز الدولة في العلوم الاجتماعية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003-2005: عضو مجلس أمناء جامعة أكتوبر للعلوم الحديثة والآداب MSA</p>
    
    <h6 class="fw-bold">الجمعيات والهيئات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">ديسمبر 1999: رئيس مجلس إدارة جمعية الصداقة المصرية النمساوية</p>
    
    <h6 class="fw-bold">الأوسمة والجوائز</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">1995: «شخصية العام» من الجامعة الأمريكية في القاهرة (مركز أدهم للصحافة المرئية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">1998: وسام العلوم والفنون والآداب من الطبقة الأولى من جمهورية النمسا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2001: الوسام الرفيع للصليب الفضي من جمهورية النمسا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2003: جائزة الدولة التقديرية في العلوم الاجتماعية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">يناير 2004: جائزة أفضل كتاب من معرض القاهرة الدولي للكتاب عن كتاب "محنة أمة"</p>
  `,
    },

    2005: {
      image: "../images/home/v8.jfif",
      desc1: `
    <h6 class="fw-bold">المناصب الأكاديمية والرئاسية (2005-2014)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">فبراير 2005 - إبريل 2008: أول رئيس للجامعة البريطانية في مصر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2005: عضو مجلس أمناء الجامعة البريطانية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2010-2016: مستشار مجلس إدارة نادي هليوبوليس، القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2012: رئيس مجلس إدارة مركز الإعلام العربي (ميديا جروب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2013-2015: رئيس المكتب التنفيذي لمجلس أمناء الجامعة البريطانية</p>

    <h6 class="fw-bold">المناصب البرلمانية والعربية والدولية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2005: نائب رئيس البرلمان العربي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2005: عضو لجنة الشرق الأوسط في الاتحاد البرلماني الدولي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو اللجنة الاستشارية للاتحاد البرلماني الدولي الخاصة بالأمم المتحدة ممثلاً منفردًا للدول العربية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2010: نائب رئيس لجنة الحريات وحقوق الإنسان بالاتحاد البرلماني الدولي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2010: رئيس لجنة الشئون العربية والخارجية والأمن القومي بمجلس الشورى</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2011: المرشح المصري الرسمي لمنصب أمين عام جامعة الدول العربية</p>

    <h6 class="fw-bold">المجالس القومية والمؤسساتية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2005-2006: مقرر اللجنة الثقافية للمجلس القومي لحقوق الإنسان</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2006-2007: مقرر لجنة المشاركة السياسية للمجلس القومي للمرأة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2007: عضو المجمع العلمي المصري (الذي أسسه نابليون بونابرت عام 1798)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008-2009: مقرر اللجنة الثقافية للمجلس القومي لحقوق الإنسان</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2009: عضو مؤسس في بيت العائلة بالأزهر الشريف</p>
  `,
      desc2: `
    <h6 class="fw-bold">الإصدارات والكتب (2005-2014)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2005: الدولة المصرية والرؤية العصرية (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: العرب من فقه المؤامرة إلى فكر الحريات (دار الشروق)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: الإسلام في عالم متغير (ترجمة فرنسية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2014: صدر عنه كتاب تذكاري بعنوان (د. مصطفى الفقي رائد التحديث في الفكر السياسي العربي) بمناسبة بلوغه السبعين</p>

    <h6 class="fw-bold">العضويات الأكاديمية والثقافية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2005: عضو جمعية أصدقاء المتحف القبطي، المجلس الأعلى للآثار</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2006: عضو اتحاد الكتاب</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2006: عضو مجلس إدارة مركز البحوث والدراسات السياسية، جامعة القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2007: عضو المجلس الأعلى للثقافة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو الجمعية العمومية لمؤسسة الأهرام</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو رابطة خريجي جامعة القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو المجلس الأعلى للشئون الإسلامية؛ مقرر لجنتي الفكر الإسلامي والتثقيف السياسي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو لجنة تحديد الجهات المنوط بها الترشيح لجوائز الدولة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو عامل في المركز الدولي للدراسات الاستراتيجية بلندن</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: عضو مجلس كلية الاقتصاد والعلوم السياسية بجامعة القاهرة (الفترة الأولى)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2012: عضو الهيئة الاستشارية لمؤسسة الفكر العربي</p>

    <h6 class="fw-bold">الجوائز والتكريمات</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2010: جائزة «النيل العليا» في العلوم الاجتماعية (أعلى جوائز الدولة المصرية)</p>

    <h6 class="fw-bold">المشاركات والأنشطة البارزة</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2005-2016: عضو ومُحاضر في اجتماعات ومؤتمرات الاتحاد البرلماني الدولي</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2006: متحدث رئيسي في مؤتمر SOAS بجامعة لندن في الذكرى الخمسين لحرب السويس</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2008: نائب رئيس جمعية «وادي النيل» للعلاقات المصرية السودانية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2012-2014: مُتحدث ومُحاضر في اجتماعات ومؤتمرات مؤسسة الفكر العربي</p>
  `,
    },
    2015: {
      image: "../images/home/v30.jfif",
      desc1: `
    <h6 class="fw-bold">الإصدارات والكتب (2015-2024)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2015: سنوات الفرص الضائعة (دار نهضة مصر)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2015: فلسطين من التأييد السياسي إلى التعاطف الإنساني (الهيئة المصرية العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2015: فلسفة الكون وتوازن الوجود (الهيئة المصرية العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: حوار العصر ماذا جرى لمصر (دار المعارف)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: الانفجار العظيم والفوضى الخلاقة (دار المعارف)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: عرفتهم عن قرب (الدار المصرية اللبنانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: العروبة المصرية (الهيئة العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: لقطات من العمر (مركز الأهرام للنشر)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: شخصيات على الطريق (الدار المصرية اللبنانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2018: ذكرياتي معهم (الدار المصرية اللبنانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2019: بين دهاليز السياسة وكواليس الدبلوماسية "نوادر ومواقف" (الدار المصرية اللبنانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2020: مصر الحديثة.. أفكار جديدة (الهيئة العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2020: وتبقى مصر (الهيئة العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2020: العرب والذاكرة القومية (طبعة ثانية - الهيئة العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2021: 2020.. عام مختلف (الهيئة العامة للكتاب)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2021: الرواية.. رحلة الزمان والمكان (الدار المصرية اللبنانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2024: أفكار وآراء ومواقف (مركز الأهرام للترجمة والنشر) - ثلاث مجلدات</p>

    <h6 class="fw-bold">المناصب الرئاسية والقيادية</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: رئيس الصالون الثقافي العربي، القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: رئيس المجلس التنفيذي للمكتبة الرقمية العالمية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2018: رئيس المؤتمر السنوي لأدباء مصر – مرسى مطروح</p>
  `,
      desc2: `
    <h6 class="fw-bold">العضويات في المجالس واللجان (2015-2024)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: عضو مجلس أكاديمية الفنون</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: عضو مجلس جامعة دمنهور</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: عضو مجلس أمناء المتحف القومي للحضارة المصرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: عضو لجنة حماية حقوق المستخدمين بالجهاز القومي لتنظيم الاتصالات (NTRA)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2018: عضو مجلس كلية الاقتصاد والعلوم السياسية بجامعة القاهرة (الفترة الثانية)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2018: عضو اللجنة العليا لقطاع الاقتصاد والعلوم السياسية، وزارة التعليم العالي والمجلس الأعلى للجامعات</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2019: عضو اللجنة الوطنية المصرية للتربية والعلوم والثقافة (يونيسكو – ألكسو – إيسيسكو)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">مايو 2021: عضو مجلس أمناء هيئة المتحف المصري الكبير</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2022: عضو مجلس أمناء مكتبة الإسكندرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2022: عضو مجلس كلية دار العلوم بجامعة القاهرة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">يونيو 2022: عضو مجلس إدارة دار الكتب والوثائق القومية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2024: عضو اللجان المتخصصة لوزارة الثقافة المصرية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2024: عضو مجلس أمناء جمعيتي الفنان فاروق حسني والأثري د. زاهي حواس</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2024: عضو مجلس أمناء مؤسسة "كيميت بطرس غالي للسلام"</p>

    <h6 class="fw-bold">التكريمات والجوائز</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2015: جائزة "مصطفى وعلي أمين" (أفضل مقال صحفي)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2019: وسام "The Medal of the Superior Commander of the Order of the Lion of Alexandria" من قداسة البابا ثيودوروس الثاني</p>

    <h6 class="fw-bold">المناصب والأنشطة البارزة</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: كبير مستشاري مجلس أمناء الجامعة البريطانية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2016: صنفته صحيفة الأهرام واحدًا من كبار كتابها</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: رئيس شرفي لحزب الوفد</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: عضو اللجنة الدولية للحوار برئاسة الإمام الأكبر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2020: مقرر لجنة الاختيار لجوائز النيل العليا</p>

    <h6 class="fw-bold">المحاضرات والمؤتمرات الدولية البارزة</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: متحدث في الجلسة الافتتاحية لمؤتمر "الإسكندرية الهلنستية"، أثينا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: متحدث بمنتدى شباب العالم - شرم الشيخ (عدة جلسات)</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2017: المتحدث الرئيسي في اجتماع الجالية المصرية في فرانكفورت، ألمانيا</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2018: إلقاء محاضرة عن المسلمين والمسيحيين في الوطن العربي، جامعة أكسفورد</p>
    <p style="font-size: 15px;margin-bottom: .5rem">2019: إلقاء محاضرة عن الواقع المصري المعاصر، بدعوة من الجمعية البرلمانية البريطانية المصرية</p>
  `,
    },
    2025: {
      image: "../images/home/v24.jfif",
      desc1: `
    <h6 class="fw-bold">الأنشطة الأكاديمية والبحثية المستمرة (2025)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">ناقش وأشرف على أكثر من 40 رسالة جامعية للدكتوراه والماجستير في جامعات مصرية مختلفة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">محاضر في كل الجامعات المصرية والأكاديميات المتخصصة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">أستاذ مادة (السياسة الخارجية المصرية) لكبار ضباط القوات المسلحة بأكاديمية ناصر</p>
    <p style="font-size: 15px;margin-bottom: .5rem">مناقش للرسائل العلمية لدرجتي الماجستير والدكتوراه في الجامعات المصرية والأجنبية</p>
    
    <h6 class="fw-bold">الإنتاج الفكري والنشري المستمر</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">كتب مقدمة عشرات الكتب المتخصصة</p>
    <p style="font-size: 15px;margin-bottom: .5rem">قدم مئات الأبحاث العلمية في المؤتمرات الدولية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">مئات من الدراسات وآلاف المقالات المنشورة منذ عام 1966</p>
  `,
      desc2: `
    <h6 class="fw-bold">العضويات والمشاركات الدولية المستمرة (2025)</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">محاضر في الجامعات والمؤسسات البحثية والمراكز السياسية في الدول العربية والأجنبية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">عضو في كل الجمعيات الأهلية والعلمية ذات الصلة بالعلاقات الدولية</p>
    <p style="font-size: 15px;margin-bottom: .5rem">عضو الوفد المصري الرسمي لكل مؤتمرات القمم العربية والإفريقية والدولية</p>
    
    <h6 class="fw-bold">ملاحظة</h6>
    <p style="font-size: 15px;margin-bottom: .5rem">تمثل هذه البنود الأنشطة المستمرة للدكتور مصطفى الفقي التي تمتد عبر مسيرته المهنية الطويلة وتستمر في العام 2025، مما يعكس استمرارية عطائه الأكاديمي والفكري والدبلوماسي.</p>
  `,
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
    const imgElement = document.querySelector(".img-container img");
    imgElement.style.opacity = "0.7";
    setTimeout(() => {
      imgElement.src = data.image;
      imgElement.alt = year;
      imgElement.style.opacity = "1";
    }, 200);

    // Update content text
    document.querySelector(".content .title").textContent = data.title;

    // Update description paragraphs using innerHTML instead of textContent
    const descParagraphs = document.querySelectorAll(".content .desc");
    descParagraphs[0].innerHTML = data.desc1; // Changed from textContent to innerHTML
    descParagraphs[1].innerHTML = data.desc2; // Changed from textContent to innerHTML
  }

  updateContent("1965");
});
