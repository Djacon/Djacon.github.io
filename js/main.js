(function($) {
"use strict";
    var body = $('body');

    function contentSlider() {
        $('.lm-content-slider').each(function() {
            var slider = $(this),
                mobile_mode_items = $(this).attr('data-mobile-items'),
                tablet_mode_items = $(this).attr('data-tablet-items'),
                items = $(this).attr('data-items'),
                loop = false,
                windowWidth = $(window).width(),
                autoplayTablet = '',
                autoplayValue = '',
                autoplayTime = '';
            if (slider.hasClass('autoplay-on')) {
                autoplayValue = true;
                autoplayTime = slider.attr('data-autotime');
                if (slider.hasClass('autoplay-mobile')) {
                    if (windowWidth > 768) {
                        autoplayValue = false;
                    } else {
                        autoplayValue = true;
                    }
                }
            } else {
                autoplayValue = false;
            }

            if (slider.hasClass('loop-on')) {
                loop = true;
            } else {
                loop = false;
            }

            slider.imagesLoaded(function () {
                    slider.owlCarousel({
                        nav: true,
                        dots: true,
                        items: 1,
                        loop: loop,
                        navText: false,
                        autoHeight: true,
                        autoplay: autoplayValue,
                        autoplayTimeout: autoplayTime,
                        margin: 10,
                        responsive : {
                            0 : {
                                items: mobile_mode_items,
                            },
                            768 : {
                                items: tablet_mode_items,
                            },
                            1200 : {
                                items: items,
                            }
                        }
                    });
            });
        });
    }

    // Contact form validator
    $(function () {
        $('.contact-form').each( function() {
            var contact_form_id = $(this).attr('id'),
                contact_form = $('#' + contact_form_id + '.contact-form');

            contact_form.validator();

            contact_form.on('submit', function (e) {
                if (!e.isDefaultPrevented()) {
                    $.ajax({
                        type: "POST",
                        url: ajaxurl,
                        data: $(this).serialize()+'&action=leven_contact_action',
                        success: function (data)
                        {   
                            var result = JSON.parse(data);
                            var messageAlert = 'alert-' + result.type;
                            var messageText = result.message;

                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                            if (messageAlert && messageText) {
                                contact_form.find('.messages').html(alertBox);
                                if (messageAlert == "alert-success") {
                                    $('.contact-form')[0].reset();
                                }
                            }
                        },
                    });
                    return false;
                }
            });
        });
    });
    // /Contact form validator

    // Portfolio subpage filters
    function portfolio_init() {
        $( '.portfolio-content' ).each( function() {
            var portfolio_grid_container = $(this),
                portfolio_grid_container_id = $(this).attr('id'),
                portfolio_grid = $('#' + portfolio_grid_container_id + ' .portfolio-grid'),
                portfolio_filter = $('#' + portfolio_grid_container_id + ' .portfolio-filters'),
                portfolio_filter_item = $('#' + portfolio_grid_container_id + ' .portfolio-filters .filter');

            if (portfolio_grid) {
                portfolio_grid.shuffle({
                    speed: 450,
                    itemSelector: 'figure'
                });

                $('.site-auto-menu').on("click", "a", function (e) {
                    portfolio_grid.shuffle('update');
                });

                portfolio_filter.on("click", ".filter", function (e) {
                    portfolio_grid.shuffle('update');
                    e.preventDefault();
                    portfolio_filter_item.parent().removeClass('active');
                    $(this).parent().addClass('active');
                    portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
                });

            }
        })
    }
    // /Portfolio subpage filters

    // Animate layout
    function animateLayout() {
        var windowWidth = $(window).width(),
            animatedContainer = '',
            animateType = $('#page_container').attr('data-animation')

        if (windowWidth > 991) {
            animatedContainer = $(".page-container");
        } else {
            // animatedContainer = $(".site-main");
            return;
        }

        animatedContainer.addClass("animated " + animateType);
    }
    // /Animate layout

    function scrollTop() {
        if ($(body).scrollTop() > 150) {
            $('.lmpixels-scroll-to-top').removeClass('hidden-btn');
        } else {
            $('.lmpixels-scroll-to-top').addClass('hidden-btn');
        }
    }

    //On Window load & Resize
    $(window)
        .on('load', function() { // Load
            // Animation on Page Loading
            $(".preloader").fadeOut(800, "linear");
            animateLayout();
        });


    // On Document Load
    $(document).on('ready', function() {
        $("body").scroll(function () {
            scrollTop();
        });

        // Initialize Portfolio grid
        $(".portfolio-grid").imagesLoaded(function () {
            portfolio_init(this);
        });

        contentSlider();

        // Mobile menu
        $('.menu-toggle').on("click", function () {
            $('.site-nav').addClass('animate');
            $('.site-nav').toggleClass('mobile-menu-hide');
        });

        $('.portfolio-page-wrapper .portfolio-grid').each(function() {
            $(this).magnificPopup({
                delegate: 'a.gallery-lightbox',
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });

        $('.form-control').val('');

        $(".form-control").on("focusin", function(){
            $(this).parent('.form-group').addClass('form-group-focus');
        });

        $(".form-control").on("focusout", function(){
            if($(this).val().length === 0) {
                $(this).parent('.form-group').removeClass('form-group-focus');
            }
        });

        $('.lmpixels-scroll-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

        scrollTop();


    });

})(jQuery);