let lang = {
    ar: {
      name: "عبدالله الشنيفي",
      desc: "مهندس إلكترونيات",
      about: "عني",
      aboutCont: "مهندس إلكترونيات مع خبرة في مجال أنترنت الأشياء والطباعة ثلاثية الأبعاد. عضو في مجموعة أنترنت الأشياء. مهتم بالتقنيات الناشئة ومستعد لاستخدام مهاراتي ومعرفتي للمساهمة في تطوير بيئة العمل.",
      project: "المشاريع",
      projectgrad: "مشروع التخرج",
      projectgradCont: "نظام مراقبة المياه للشقق والمنازل المشتركة, باستخدام أنترنت الاشياء, الطباعة ثلاثية الأبعاد, وتحليل البيانات ",
      projectpeople: "مشروع غرفة الأشخاص ذوي الإعاقة ",
      projectpeopleCont: "غرفة ذكية بالتحكم عن طريق الجوال باستخدام انترنت الأشياء",
      
      //add later 
      langs: "اللغات",
      langsCont: "العربية , الأنجليزية",

      skills: "المهارات",
      skillsard: "Arduino IDE",
      skillsprut: "Proteus",
      skillsmicr: "MicroC",
      skillsoffi: "برامج الأوفيس",
      skillsCpp: "C++",
      skillspyth: "Python",

      sontact: "للتواصل",
      contactemailCont: 'البريد الإلكتروني:abdullah@aashenaifi.com',
    contactphoneCont: "رقم الجوال: 0554337765",

    Rights: "جميع الحقوق محفوظة لعبدالله الشنيفي © 2024",
    },
  
    en: {
      name: "Abdullah Alshenaifi",
      desc: "Electronics Engineer",
      about: "Electronics Engineer",
      aboutCont: "An electronics engineer with experience in the field of IOT and 3D printing. A member of the IOT for Arab group. Interested in emerging technologies and ready to use my skills and knowledge to contribute to the development of the work environment.",
      project: "Projects",
      projectgrad: "Graduation Project",
      projectgradCont: "A water monitoring system for shared apartments and houses, using IoT, 3D printing, and data analysis.",
      projectpeople: "People with Disabilities' Room Project",
      projectpeopleCont: "A smart room controlled by a smartphone using the Internet of Things, designed to help people with disabilities.",
      
      //add later 
      langs: "Languages",
      langsCont: "Arabic , english",

      skills: "Skills",
      skillsard: "Arduino IDE",
      skillsprut: "Proteus",
      skillsmicr: "MicroC",
      skillsoffi: "Microsoft Office",
      skillsCpp: "C++",
      skillspyth: "Python",

      sontact: "Contact",
      contactemailCont: 'Email:abdullah@aashenaifi.com',  
      contactphoneCont: "Phone: 0554337765",

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
    if (language === "ar"){
        document.dir = "rtl";
    }
    else {
        document.dir = "ltr";
    }
  }
  
  updateLanguage(); // Call the function initially to set the initial language
