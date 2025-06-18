(function () {
    function setSequentialFavicons() {
        const favicons = [
            'favicon1.svg',
            'favicon2.svg',
            'favicon3.svg',
            'favicon4.svg',
            'favicon5.svg',
            'favicon6.svg',
            'favicon7.svg',
            'favicon8.svg',
            'favicon9.svg',
            'favicon10.svg',
            'favicon11.svg',
            'favicon12.svg'
        ];
        let currentIndex = 0;

        function updateFavicon() {
            const faviconLink = document.getElementById('dynamic');
            if (faviconLink) {
                faviconLink.href = 'favicons/' + favicons[currentIndex];
                currentIndex = (currentIndex + 1) % favicons.length;
            }
        }
        updateFavicon();
        setInterval(updateFavicon, 2000);
    }

    document.addEventListener('DOMContentLoaded', setSequentialFavicons);
})();