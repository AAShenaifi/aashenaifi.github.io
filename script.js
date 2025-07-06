let lang = {
    ar: {
      name: "عبدالله الشنيفي",
      desc: "مهندس إلكترونيات",
      about: "عني",
      aboutCont: "مهندس إلكترونيات طموح , مع خبرة في مجالات أنترنت الأشياء والطباعة ثلاثية الأبعاد, شريك المالك في علامات للروبوتات,حيث قمت بتصميم الإلكترونيات لمشاريع روبوتية متنوعة. شغوف بالتقنيات الناشئة، ومستعد لاستخدام مهاراتي ومعرفتي لتمكين الابتكار وتحسين بيئة العمل, معتمد كمهندس من قبل الهيئة السعودية للمهندسين (SEC).",
    
      Exp: "الخبرات",
  Zoujaj: "شركة الصناعات الزجاجية الوطنية",
  ZoujajTitle: "مهندس إلكترونيات",
  Alamat: "علامات للروبوتات",
  AlamatTitle: "شريك المالك",
  PNU: "جامعة الأميرة نورة بنت عبدالرحمن",
  PNUTitle: "محاضر (يناير 2025 – يونيو 2025)",
  Tuwaiq: "أكاديمية طويق",
  TuwaiqTitle: "مدرب (يوليو 2024 – أغسطس 2024)",

    
      project: "المشاريع",
      projectgrad: "مشروع التخرج",
      projectgradCont: "نظام مراقبة المياه للشقق والمنازل المشتركة, باستخدام أنترنت الاشياء, الطباعة ثلاثية الأبعاد, وتحليل البيانات ",
      projectpeople: "مشروع غرفة الأشخاص ذوي الإعاقة ",
      projectpeopleCont: "غرفة ذكية بالتحكم عن طريق الجوال باستخدام انترنت الأشياء",
      

      langs: "اللغات",
      langsCont: "العربية , الأنجليزية",

      skills: "المهارات",
      skillsard: "برمجة الأردوينو",
      skillsprut: "Proteus",
      skillsmicr: "MicroC",
      skillsoffi: "برامج الأوفيس",
      skillsCpp: "C++",
      skillssold: " لحام THT و SMD ",
      skills3d: "تصميم وطباعة ثلاثي الابعاد ",
      skillsplc: "برمجة الحاكمات القابلة للبرمجة",
    

      CV: "سيرتي الذاتية",
      CVDownload: "لتحميل ملف السيرة الذاتية",

      contact: "للتواصل",
      contactemailCont: 'البريد الإلكتروني:abdullah@aashenaifi.com', 
      
    contactphoneCont: "رقم الجوال: 0554337765",
    addmetocontact: "أضفني إلى جهات اتصالك",
    Visit: "عدد الزوار",


    Rights: "جميع الحقوق محفوظة لعبدالله الشنيفي © 2024",
    },
  
    en: {
      name: "Abdullah Alshenaifi",
      desc: "Electronics Engineer",
      about: "About me",
      aboutCont: "An ambitious electronics engineer with previous experience in Internet of Things (IOT) and 3D printing. Co-owner of Alamat Robotics, where I engineered electronics for various robotics projects. Passionate about emerging technologies, and ready to leverage my skills and knowledge to drive innovation and enhance the work environment. Accredited as an Engineer by the Saudi Council of Engineers (SEC).",
        
      Exp: "Experience",
  Zoujaj: "The National Company for Glass Industries",
  ZoujajTitle: "Electronics Engineer",
  Alamat: "Alamat Robotics",
  AlamatTitle: "Co-Owner",
  PNU: "Princess Nourah Bint Abdulrahman University",
PNUTitle: "Lecturer (Jan 2025 – Jun 2025)",
  Tuwaiq: "Tuwaiq Academy",
TuwaiqTitle: "Instructor (Jul 2024 – Aug 2024)",        
        
        project: "Projects",
      projectgrad: "Graduation Project",
      projectgradCont: "A water monitoring system for shared apartments and houses, using IoT, 3D printing, and data analysis.",
      projectpeople: "People with Disabilities' Room Project",
      projectpeopleCont: "A smart room controlled by a smartphone using the Internet of Things, designed to help people with disabilities.",
      
      //add later 
      langs: "Languages",
      langsCont: "Arabic , english",

      skills: "Skills",
      skillsard: "Arduino Programing",
      skillsprut: "Proteus",
      skillsmicr: "MicroC",
      skillsoffi: "Microsoft Office",
      skillsCpp: "C++",
      skillssold: "Soldering SMT and THT",
      skills3d: "3D Modeling and Printing",
      skillsplc: "PLC programming",
        
      CV: "My CV",
      CVDownload: "to download the CV",

      contact: "Contact",
      contactemailCont: 'Email:abdullah@aashenaifi.com',  
      contactphoneCont: "Phone: 0554337765",
      
      addmetocontact: "Add me to your Contacts",
      Visit: "Visitor Counter",


      Rights: "2024 Abdullah Alshenaifi. All rights reserved.",
    },
  };
  
  let selector = document.getElementById('language-selector');
selector.addEventListener('change', updateLanguage);

function updateLanguage() {
  let language = selector.value;
  let nodes = document.querySelectorAll('[data-lang]');

  nodes.forEach(node => {
    let key = node.getAttribute('data-lang');
    node.textContent = lang[language][key];
  });

  let pdfEmbed = document.getElementById("pdfEmbed");
  let downloadLink = document.getElementById("downloadLink");
  if (language === "ar") {
    pdfEmbed.src = "https://drive.google.com/file/d/16Vvo1pywdQGr30anaZKNyo-XwunGXnWg/preview#zoom=100";
    downloadLink.href = "Abdullah Alshenaifi Electronics Engineer Ar.pdf";
    document.dir = "rtl";
  } else {
    pdfEmbed.src = "https://drive.google.com/file/d/12TKgFhOvbwiTSVavMNrXdPYs5umi1jTv/preview#zoom=100";
    downloadLink.href = "Abdullah Alshenaifi Electronics Engineer En.pdf";
    document.dir = "ltr";
  }
}


updateLanguage(); 
