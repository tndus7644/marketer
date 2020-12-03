// window.addEventListener('DOMContentLoaded', function(){
//
// })

$(function (){
    /**
     *  UI SCRIPT
     */
    scriptExam.init();
})

const scriptExam = {
    init: function () {
        scriptExam.tab();
    },

    tab: function () {
        const clickHandler = function (){
            const index = $(this).index();
            const content = $('.script-tab .content').eq(index);

            content.addClass('is-active').siblings().removeClass('is-active');
            // content.show().siblings().hide();
        }

        $('.script-tab nav .nav-item').on('click', clickHandler).eq(0).trigger('click');

    }
}