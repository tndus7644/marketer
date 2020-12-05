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
        $('.main-menu-btn').on('click', function (){
            $('.main-menu').toggleClass('tab-menu');
        });

    }
}