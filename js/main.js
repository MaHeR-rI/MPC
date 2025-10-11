setTimeout(function () {
    document.body.style.overflow = "scroll";
    document.querySelector('.main-loader').style.display = 'none';
    document.querySelector('.main-loader div').style.display = 'none';
    document.querySelector('.main-loader span').style.display = 'none';
    
}, 2500);
//sticky NAVBAR
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed-top")
    } else {
        navbar.classList.remove("fixed-top");
    }
}

// ********************
// ********************

// multi language 
var aLangKeys = new Array();
aLangKeys['en'] = new Array();
aLangKeys['ar'] = new Array();

aLangKeys['en']['home'] = 'Home';
aLangKeys['en']['about'] = 'About us';
aLangKeys['en']['blogs'] = 'Blogs';
aLangKeys['en']['products'] = 'Products';
aLangKeys['en']['partners'] = 'Partners';
aLangKeys['en']['contact'] = 'Contact us';
aLangKeys['en']['social'] = 'Follow us';
aLangKeys['en']['links'] = 'Links';
aLangKeys['en']['phones'] = 'Phones';
aLangKeys['en']['caption'] = 'Products';
aLangKeys['en']['company-breif'] = 'About company breif';
aLangKeys['en']['history'] = 'History';
aLangKeys['en']['mission'] = 'Mission';
aLangKeys['en']['vision'] = 'Vision';
aLangKeys['en']['locations'] = 'Locations';
aLangKeys['en']['send-msg'] = 'Send message';
aLangKeys['en']['address'] = 'Address :';
aLangKeys['en']['telephone'] = 'Telephone :';
aLangKeys['en']['email'] = 'E-mail :';
aLangKeys['en']['contact-social'] = 'Follow us :';
aLangKeys['en']['find-us'] = 'Find us';
aLangKeys['en']['ask-us'] = 'Ask us here';
aLangKeys['en']['loading'] = 'Loading ...';

aLangKeys['ar']['home'] = 'الرئيسة';
aLangKeys['ar']['about'] = 'حولنا';
aLangKeys['ar']['blogs'] = 'المدونات';
aLangKeys['ar']['products'] = 'المنتجات';
aLangKeys['ar']['partners'] = 'شركاء';
aLangKeys['ar']['contact'] = 'تواصل معنا';
aLangKeys['ar']['social'] = 'تابعنا';
aLangKeys['ar']['links'] = 'روابط';
aLangKeys['ar']['social'] = 'تابعنا';
aLangKeys['ar']['phones'] = 'الهاتف';
aLangKeys['ar']['caption'] = 'منتجات';
aLangKeys['ar']['company-breif'] = 'نبذة عن الشركة'
aLangKeys['ar']['our-products'] = 'منتجاتنا';
aLangKeys['ar']['history'] = 'التاريخ';
aLangKeys['ar']['mission'] = 'المهمة';
aLangKeys['ar']['vision'] = 'الرؤية';
aLangKeys['ar']['locations'] = 'المواقع';
aLangKeys['ar']['send-msg'] = 'أرسل';
aLangKeys['ar']['address'] = 'العنوان :';
aLangKeys['ar']['email'] = 'البريد الألكتروني :';
aLangKeys['ar']['telephone'] = 'الهاتف :';
aLangKeys['ar']['contact-social'] = 'تابعنا :';
aLangKeys['ar']['find-us'] = 'تجدنا';
aLangKeys['ar']['ask-us'] = 'اسألنا هنا';
aLangKeys['ar']['loading'] = 'جاري التحميل ...';

$(document).ready(function () {
    var locLang = localStorage.getItem('lang');
    if (locLang) {
        changeLang(locLang);
    } else {
        $('input:radio[name=lang][value=en]').prop('checked', true);
    }
    $('input[type=radio][name=lang]').change(function () {
        var lang = $(this).attr('id');
        localStorage.setItem("lang", lang);
        changeLang(lang);
        location.reload();
    });
});
function changeLang(lang) {
    $('.tr').each(function (i) {
        $(this).text(aLangKeys[lang][$(this).attr('key')]);
    });
    var $radios = $('input:radio[name=lang]');
    $radios.filter('[value=' + lang + ']').prop('checked', true);

    if ($('#ar').prop("checked")) {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        $('.style-url').attr('href', './css/style-rtl.css');

    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
        $('.style-url').attr('href', './css/style.css');
    }
}
// ********************************
// ********************************
// ********************************
const homeSlider = document.querySelector('.home-products-slider');
if (homeSlider) {
    let mainSliderSelector = ".main-slider",
        navSliderSelector = ".nav-slider",
        interleaveOffset = 0.5;

    // Main Slider
    let mainSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.el.classList.remove("loading");
                this.autoplay.start();
            },
            slideChangeTransitionEnd: function () {
                let swiper = this,
                    captions = swiper.el.querySelectorAll(".caption");
                for (let i = 0; i < captions.length; ++i) {
                    captions[i].classList.remove("show");
                }
                swiper.slides[swiper.activeIndex]
                    .querySelector(".caption")
                    .classList.add("show");
            },
            progress: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;

                    swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translateX(" + innerTranslate + "px)";
                }
            },
            touchStart: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function (speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                }
            }
        }
    };
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

    // Navigation Slider
    let navSliderOptions = {
        loop: true,
        loopAdditionalSlides: 10,
        speed: 1000,
        spaceBetween: 0,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: "vertical",
        on: {
            imagesReady: function () {
                this.el.classList.remove("loading");
            },
            click: function () {
                mainSlider.autoplay.stop();
            }
        }
    };
    let navSlider = new Swiper(navSliderSelector, navSliderOptions);

    // Matching sliders
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
}
// ****************************
// ****************************
// ****************************

//active link
window.onload = function () {
    if (window.location.pathname == "index.html") {
        $('.nav-item').removeClass('active');
        $('#homeLink').addClass('active');
    }else if(window.location.pathname == "about.html"){
        $('.nav-item').removeClass('active');
        $('#aboutLink').addClass('active');
    }else if(window.location.pathname == "blogs.html"){
        $('.nav-item').removeClass('active');
        $('#blogLink').addClass('active');
    }else if(window.location.pathname == "products.html"){
        $('.nav-item').removeClass('active');
        $('#productLink').addClass('active');
    }else if(window.location.pathname == "contact.html"){
        $('.nav-item').removeClass('active');
        $('#contactLink').addClass('active');
    }
}