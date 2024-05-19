document.addEventListener("DOMContentLoaded", function() {
    function initializeTableauViz(containerId, vizUrl) {
        const container = document.getElementById(containerId);
        const options = {
            width: container.offsetWidth,
            height: container.offsetHeight,
            hideTabs: true,
            hideToolbar: true
        };
        new tableau.Viz(container, vizUrl, options);
    }

    initializeTableauViz('tableau-quantity-profits', 'https://public.tableau.com/views/CustomerPurchasingHabits_17160728080810/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link');
    
});
