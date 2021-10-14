(function (window, document) {
    'use strict'; // use stirct 범위안에 코드는 엄격한 자바스크립트 문법으로 작성한다고 선언

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)