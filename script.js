let lang = {
    ar: {
      name: "عبدالله الشنيفي",
      desc: "مهندس إلكترونيات",
      about: "عني",
      aboutCont: "مهندس إلكترونيات مع خبرة في مجال أنترنت الأشياء والطباعة ثلاثية الأبعاد. عضو في مجموعة أنترنت الأشياء. مهتم بالتقنيات الناشئة ومستعد لاستخدام مهاراتي ومعرفتي للمساهمة في تطوير بيئة العمل.",
    },
  
    en: {
      name: "Abdullah Alshenaifi",
      desc: "Electronics Engineer",
      about: "Electronics Engineer",
      aboutCont: "An electronics engineer with experience in the field of IOT and 3D printing. A member of the IOT for Arab group. Interested in emerging technologies and ready to use my skills and knowledge to contribute to the development of the work environment.",
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
  }
  
  updateLanguage(); // Call the function initially to set the initial language