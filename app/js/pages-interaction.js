// let aboutTarget = document.getElementsByClassName('js-about')[0];
// let humanlyTarget = document.getElementsByClassName('js-humanly')[0];
let audiencesTarget = document.getElementsByClassName('js-audiences')[0];
// let eveTarget = document.getElementsByClassName('js-eve')[0];
// let flowTarget = document.getElementsByClassName('js-flow')[0];
// let santeTarget = document.getElementsByClassName('js-sante')[0];
// let exquisiteTarget = document.getElementsByClassName('js-exquisite')[0];
let framesTarget = document.getElementsByClassName('js-frames')[0];
let dataTarget = document.getElementsByClassName('js-data')[0];
let body = document.querySelector('body');

const addTheme = (target, theme) => {
    target.addEventListener('mouseover', function() {
        body.classList.add(theme);
    });

    target.addEventListener('mouseout', function() {
        body.classList.remove(theme);
    }); 
};

// addTheme(aboutTarget, '--project-theme-about');
addTheme(audiencesTarget, '--project-theme-audiences');
// addTheme(eveTarget, '--project-theme-eve');
// addTheme(flowTarget, '--project-theme-flow');
// addTheme(humanlyTarget, '--project-theme-humanly');
addTheme(framesTarget, '--project-theme-frames');
addTheme(dataTarget, '--project-theme-data');
// addTheme(santeTarget, '--project-theme-sante');
// addTheme(exquisiteTarget, '--project-theme-exquisite');