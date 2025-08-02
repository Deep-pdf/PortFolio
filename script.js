let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    logospan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (index + 1) * 200)
    });

    setTimeout(() => {
      logospan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 1000)

    setTimeout(() => {
      intro.classList.add('slide-fade');
    }, 1500);

  })

  let animated = false;
  const navItems = document.querySelectorAll('.navbutt');

  // Start navbar animation 1.5s after splash starts
  setTimeout(() => {
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 100); // stagger
    });
  }, 500 + 1500); // 500ms splash delay + 1500ms overlap

        const icon = document.querySelector('.flower');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              icon.style.animationPlayState = 'running';
            } else {
              icon.style.animationPlayState = 'paused';
            }
          });
        },
        {
          threshold: 0
        }
      );

      observer.observe(icon);
})

// Animation logic for dominant project box

document.addEventListener('DOMContentLoaded', function() {
    const proboxes = document.querySelectorAll('.probox');
    const containers = [
        document.querySelector('.motion-container'),
        document.querySelector('.efx-container'),
        document.querySelector('.documentary-container')
    ];

    function setDominant(selected) {
        proboxes.forEach((box, idx) => {
            if (box === selected) {
                box.classList.add('dominant');
                containers[idx].style.display = 'block';
            } else {
                box.classList.remove('dominant');
                containers[idx].style.display = 'none';
            }
        });
    }

    // Set the first as dominant by default
    if (proboxes.length > 0) {
        setDominant(proboxes[0]);
    }

    proboxes.forEach(box => {
        box.addEventListener('click', function() {
            setDominant(box);
        });
    });
});
