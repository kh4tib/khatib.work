// contacts column changin style on hover 
// let emailLink = document.getElementsByClassName('js-email')[0];
let twitterLink = document.getElementsByClassName('js-twitter')[0];
let instagramLink = document.getElementsByClassName('js-instagram')[0];
let dribbbleLink = document.getElementsByClassName('js-dribbble')[0];
let linkedinLink = document.getElementsByClassName('js-linkedin')[0];

const contactHoverEffect = (item, newContent, oldContent, theme) => {
    item.addEventListener('mouseover', function(){
        item.innerHTML = newContent;
        body.classList.add(theme);
    });

    item.addEventListener('mouseout', function(){
        item.innerHTML = oldContent;
        body.classList.remove(theme);
    });
};

// contactHoverEffect(emailLink,'email','📥','--project-theme-email');
// contactHoverEffect(twitterLink,'twitter', '🐣', '--project-theme-twitter');
contactHoverEffect(instagramLink,'instagram', '🤳', '--project-theme-instagram');
contactHoverEffect(dribbbleLink,'dribbble', '🏀','--project-theme-dribbble');
contactHoverEffect(linkedinLink,'linkedin', '👔','--project-theme-linkedin');