function toggleTheme() {
    const root = document.documentElement;
    const isDarkTheme = root.classList.contains('dark-theme');
    const themeToggleButton = document.querySelector('.theme-toggle img');
    
    // svg titles
    const imageChanges = [
        {
            currentSrcIncludes: 'aboutme',
            darkSrc: 'assets/icons/aboutme.svg',
            lightSrc: 'assets/icons/aboutme2.svg'
        },
        {
            currentSrcIncludes: 'skill',
            darkSrc: 'assets/icons/skill-w.svg',
            lightSrc: 'assets/icons/skill-b.svg'
        },
        {
            currentSrcIncludes: 'experience',
            darkSrc: 'assets/icons/experience.svg',
            lightSrc: 'assets/icons/experience2.svg'
        },
        {
            currentSrcIncludes: 'services',
            darkSrc: 'assets/icons/services.svg',
            lightSrc: 'assets/icons/services2.svg'
        },
        {
            currentSrcIncludes: 'portfolio',
            darkSrc: 'assets/icons/portfolio.svg',
            lightSrc: 'assets/icons/portfolio2.svg'
        },
       {
            currentSrcIncludes: 'contacts',
            darkSrc: 'assets/icons/contacts.svg',
            lightSrc: 'assets/icons/contacts2.svg'
        }
           
    ];

    if (isDarkTheme) {
        root.style.setProperty('--cursor-black','#fd532f');
        root.style.setProperty('--blend-mode','difference');
        root.style.setProperty('--cursor-black-in','#fd532f');
        root.style.setProperty('--dark-bg', '#0f0f0f');
        root.style.setProperty('--light-bg', '#e9e9e9');
        root.style.setProperty('--text-white', '#fff');
        root.style.setProperty('--text-black', '#000');
        root.style.setProperty('--progress-bg-light', '#0f0f0fd8');
        root.style.setProperty('--black', '#000');
        root.style.setProperty('--white', '#fff');
        root.style.setProperty('--navbar-dark', '#000000cb');
        root.style.setProperty('--main-color-cursor', '#000');
        
        // Change all images to dark theme versions
        document.querySelectorAll('.svg-title').forEach(img => {
            const matchingImage = imageChanges.find(change => 
                img.src.includes(change.currentSrcIncludes)
            );
            if (matchingImage) {
                img.src = matchingImage.darkSrc;
            }
        });

        // Change toggle button icon to light mode icon
        themeToggleButton.src = 'assets/icons/toggle-for-light.svg';
    } else {
        root.style.setProperty('--cursor-black','#009DFF');
        root.style.setProperty('--blend-mode','normal');
        root.style.setProperty('--cursor-black-in','#000');
        root.style.setProperty('--dark-bg', '#e9e9e9');
        root.style.setProperty('--light-bg', '#0f0f0f');
        root.style.setProperty('--text-white', '#000');
        root.style.setProperty('--text-black', '#fff');
        root.style.setProperty('--progress-bg-light', '#d9d9d933');
        root.style.setProperty('--black', '#fff');
        root.style.setProperty('--white', '#000');
        root.style.setProperty('--navbar-dark', '#ffffffa1');
        root.style.setProperty('--main-color-cursor', '#fd532f');
        
        // Change all images to light theme versions
        document.querySelectorAll('.svg-title').forEach(img => {
            const matchingImage = imageChanges.find(change => 
                img.src.includes(change.currentSrcIncludes)
            );
            if (matchingImage) {
                img.src = matchingImage.lightSrc;
            }
        });

        // Change toggle button icon to dark mode icon
        themeToggleButton.src = 'assets/icons/toggle-for-dark.svg';
    }

    root.classList.toggle('dark-theme');
}