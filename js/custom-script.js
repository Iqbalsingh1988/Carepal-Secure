// =====================================================================
//     Types of Knee Replacement Surgery in Mumbai section start
// =====================================================================

var swiper = new Swiper(".type_knee_surgery_slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
    
// =====================================================================
//     Types of Knee Replacement Surgery in Mumbai section end
// =====================================================================


// =====================================================================
//     Recovery & Post-Surgery Care section start
// =====================================================================

var swiper = new Swiper(".recovery_post_slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

// =====================================================================
//     Recovery & Post-Surgery Care section end
// =====================================================================


// =====================================================================
//     Factors Affecting Knee Replacement  Surgery Cost start
// =====================================================================

var swiper = new Swiper(".factors_affecting_knee_slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

// =====================================================================
//     Factors Affecting Knee Replacement  Surgery Cost end
// =====================================================================


// =====================================================================
//     Why Choose Carepal Replacement Surgery section start
// =====================================================================

var swiper = new Swiper(".why_choose_carepal_slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

// =====================================================================
//     Why Choose Carepal Replacement Surgery section end
// =====================================================================


// =====================================================================
//     Knee Replacement Surgery Recommended section start 
// =====================================================================

var swiper = new Swiper(".surgery_recommendation_slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

// =====================================================================
//    Knee Replacement Surgery Recommended section end 
// =====================================================================



  if ($('.faq_accordion').length) {
                $(".faq_accordion .accordion_title").on("click", function() {
                    $(this).siblings(".accordion_content").slideToggle(300);
                    $(this).parent().siblings().find(".accordion_content").slideUp(300);
                    $(this).parent().siblings().find(".accordion_title").removeClass("active");
                    $(this).parent().siblings().removeClass("active");
                    $(this).parent().toggleClass("active");
                    $(this).toggleClass("active");
                });
            }

$(document).ready(function(){
        $(".advisor_bills_footer .advisory_cross_icon a").click(function(e){
            e.preventDefault(); // link ke default action ko rokne ke liye
            $(".advisor_bills_footer").fadeOut(); // section ko hide ya fade out karne ke liye
        });
    });