 // قائمة الموبايل
function toggleMenu() {
  const menu = document.getElementById('menu');
  if(menu) menu.classList.toggle('show');
}

// قائمة خدمات الهيرو (الهيرو button)
function toggleServices() {
  const services = document.getElementById('services');
  if(services) services.classList.toggle('show');
}

(function(){
  // smooth scroll للروابط الداخلية
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Lightbox للصور في gallery-grid
  document.addEventListener('click', function(e){
    const link = e.target.closest('.gallery-grid a');
    if(link){
      e.preventDefault();
      const src = link.dataset.src || link.getAttribute('href');
      let lb = document.getElementById('lightbox');
      
      // إذا لم يوجد Lightbox في DOM، انشئ واحد
      if(!lb){
        lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:9999;cursor:pointer;';
        const img = document.createElement('img');
        img.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;';
        lb.appendChild(img);
        document.body.appendChild(lb);
      }

      lb.querySelector('img').src = src;
      lb.classList.add('show');
      lb.style.display = 'flex';
    }
  }, false);

  // إغلاق Lightbox عند النقر
  document.addEventListener('click', function(e){
    const lb = document.getElementById('lightbox');
    if(lb && e.target===lb){
      lb.style.display = 'none';
      lb.classList.remove('show');
    }
  });

})();
