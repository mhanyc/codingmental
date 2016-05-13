jQuery( ".view-taglist" ).click(function() {
    jQuery(this).parent().siblings().removeClass("active");
    jQuery(this).parent().addClass("active");
    if ($('#tag-all').is(':hidden')) {
        jQuery( "#tag-all" ).show(300);
        jQuery( "#tag-popular" ).hide(300);
    }
    jQuery( "#tag-all" ).removeClass( "tagcloud" );
});

jQuery( ".view-tagcloud" ).click(function() {
    jQuery(this).parent().siblings().removeClass("active");
    jQuery(this).parent().addClass("active");
    if ($('#tag-all').is(':hidden')) {
        jQuery( "#tag-all" ).show(300);
        jQuery( "#tag-popular" ).hide(300);
    }
    jQuery( "#tag-all" ).addClass( "tagcloud" );
});

jQuery( ".view-popular" ).click(function() {
    jQuery(this).parent().siblings().removeClass("active");
    jQuery(this).parent().addClass("active");
    jQuery( "#tag-popular" ).show(300);
    jQuery( "#tag-all" ).hide(300);
});