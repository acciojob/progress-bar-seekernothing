document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const circles = document.querySelectorAll('.circle');
    const activeLine = document.querySelector('.active-line');

    function updateProgress() {
        // Update circle states
        circles.forEach((circle, idx) => {
            circle.classList.toggle('active', idx + 1 <= currentStep);
        });

        // Update progress line
        const progressPercentage = ((currentStep - 1) / (circles.length - 1)) * 100;
        activeLine.style.width = `${progressPercentage}%`;

        // Update button states
        prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === circles.length;
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < circles.length) {
            currentStep++;
            updateProgress();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateProgress();
        }
    });
});