$(function (){
    /**
     *  UI SCRIPT
     */
    scriptExam.init();
})

const scriptExam = {
    init: function () {
        scriptExam.tabMenu();
    },

    tabMenu: function () {
        const tab = function (){
            const menu = $('.main-menu');
            menu.toggleClass('tab-menu');
        }

        $('.main-menu-btn').on('click', tab);

    }
}