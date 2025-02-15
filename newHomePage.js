let animation = gsap.timeline({ paused: true })
            .to(".container-black div div:nth-child(1)", {
                width: "320px",
                duration: 1,
                ease: "power1.out"
            })

            .to(".container-black", {
                height: "18vh",
                duration: 1.3,
                ease: "power1.out"
            })
            .to(".container-black div", {
                opacity: 0,
                duration: 0.3,
                ease: "power1.out",
                stagger: 0.1,
            }, "-=1.3")
            .to(".hero-image", {
                bottom: "0px",
                duration: 1.3,
                ease: "power1.out"
            }, "-=1.3")
            .to(".text-box", {
                transform: "translateY(0%)",
                opacity: 1,
                duration: 1.3,
                ease: "power2.out"
            }, "-=1.3")
            .to(".hero-image", {
                width: "588px",
                height: "566.5px",
                scale: 0.9,
                duration: 1.1,
                ease: "power2.inOut"
            })
            .to(".text-box", {
                scale: 1.2,
                duration: 1,
                ease: "power2.inOut"
            }, "-=1.1")
            .to(".icon-down", {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })

        let typeSplit = new SplitType('[animate]', {
            types: 'lines, words, chars',
            tagName: 'span'
        })

        gsap.from('[animate] .line', {
            y: '100%',
            opacity: 0,
            duration: 2,
            ease: 'power1.out',
            stagger: 0.1,

        })

        gsap.to("#main-logo", {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.5,
            stagger: 0.1

        })

        animation.play();
        let checkScroll100vh = false;
        console.log(checkScroll100vh);

        const mainSection = document.querySelector('#main-container-section');

        window.addEventListener("scroll", () => {
        
            
            if (window.scrollY >= mainSection.getBoundingClientRect().height) {
                
                checkScroll100vh = true;
            }

            if (checkScroll100vh && window.scrollY === 0) {
                animation.restart();
                checkScroll100vh = false; // Reset flag after restart
            }
        });









        fetch('svg.html')
            .then(response => {
                console.log(response.status);
                return response.text();
            })
            .then(data => {
                document.querySelector('#main-logo').innerHTML = data
                gsap.to(".main-logo-svg", {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: 1.2,
                    stagger: 0.1
                });
            })
            .catch(error => console.error('Error fetching svg.html:', error));

        fetch('navbar.html')
            .then(response => {
                fetch('navbar.html')
                    .then(response => {
                        console.log(response.status);
                        return response.text();
                    })
                    .then(data => {
                        document.querySelector('.main-header-2').innerHTML = data;

                        // Run GSAP after navbar is loaded
                        gsap.to(".navlinks a", {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            delay: 1.2,
                            stagger: 0.1
                        });

                        gsap.to(".login-box", {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            delay: 2,
                            stagger: 0.1

                        })
                        gsap.to(".line-str", {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            delay: 2,
                            stagger: 0.1

                        })
                    })
                    .catch(error => console.error('Error fetching navbar.html:', error));

                console.log(response.status);
                return response.text();
            })
            .then(data => document.querySelector('.main-header-2').innerHTML = data)
            .catch(error => console.error('Error fetching navbar.html:', error));

        fetch('svg2.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const logoElement = document.querySelector('.logo');
                if (logoElement) {
                    logoElement.innerHTML = data;
                } else {
                    console.error('Element with class ".logo" not found.');
                }
            })
            .catch(error => console.error('Error fetching svg.html:', error));