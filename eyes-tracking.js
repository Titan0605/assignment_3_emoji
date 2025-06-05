document.addEventListener('DOMContentLoaded', function() {
    //  First we get the divs with the eyes and pupils
    const pupils = document.querySelectorAll('.pupil');
    const eyes = document.querySelectorAll('.eye');

    document.addEventListener('mousemove', function(e) {
        // Then we get the coordinates of the mouse
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        eyes.forEach((eye, index) => {
            // For each eye (2) we do the same calculus
            const pupil = pupils[index];
            
            const eyeRect = eye.getBoundingClientRect(); // This give us a bunch data of the div, for example left, right, top, etc
            const eyeCenterX = eyeRect.left + eyeRect.width / 2; // We calculate the coordiante X of the center
            const eyeCenterY = eyeRect.top + eyeRect.height / 2; // We calculate the coordiante Y of the center
            const eyeRadius = eyeRect.width / 2; // We calculate the radius of the eye

            const deltaX = mouseX - eyeCenterX; // This is the distance X between the center and the mouse
            const deltaY = mouseY - eyeCenterY; // This is the distance Y between the center and the mouse
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // With the Pythagorean theorem, having a (deltaX) and b (deltaY), we get c(the real distance between the center and the mouse).

            const maxPupilDistance = eyeRadius / 2; // This is the limit that the pupil can move without leave the eye

            let pupilX, pupilY;

            if (distance <= eyeRadius) {
                /* If the distance between the mouse and the center is less than or equal to the eye radius
                    it will follow the mouse position without leave the eye
                */
                const limitedDistance = Math.min(distance, maxPupilDistance); // This obtain the minimum between the real distance and the max distance established before
                const angle = Math.atan2(deltaY, deltaX); // We obtain the angle with the formula TAN-1 angle = CO (deltaY) / CA (deltaX)
                
                pupilX = Math.cos(angle) * limitedDistance; // We obtain the CA (pupilX) with the formula H (limitedDistance) * COS (angle) = CA
                pupilY = Math.sin(angle) * limitedDistance; // We obtain the CO (pupilY) with the formula H (limitedDistance) * SEN (angle) = CO
            } else {
                // This do the same as the previous code, but this doesn't take the real distance as an argument and directly use the maxPupilDistance
                const angle = Math.atan2(deltaY, deltaX);
                pupilX = Math.cos(angle) * maxPupilDistance;
                pupilY = Math.sin(angle) * maxPupilDistance;
            }

            // We give the pupils the position that was calculated previously
            pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
        });
    });

    // If the mouse leave the window it will center the pupils
    document.addEventListener('mouseleave', function() {
        pupils.forEach(pupil => {
            pupil.style.transform = 'translate(-50%, -50%)';
        });
    });
});