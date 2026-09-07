<script>

/* =========================================================
   PAGE TRANSITION
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('a');

    links.forEach(function (link) {

        link.addEventListener('click', function (event) {

            const url = this.href;

            /*
             * Don't animate:
             * - #section links
             * - new tabs
             * - email links
             * - phone links
             */

            if (
                !url ||
                url.startsWith('#') ||
                this.target === '_blank' ||
                url.startsWith('mailto:') ||
                url.startsWith('tel:')
            ) {
                return;
            }


            /*
             * Prevent the browser from
             * immediately changing pages.
             */

            event.preventDefault();


            /*
             * Start fade-out animation.
             */

            document.body.classList.add('page-exit');


            /*
             * Wait for the animation,
             * then open the new page.
             */

            setTimeout(function () {

                window.location.href = url;

            }, 400);

        });

    });

});

</script>