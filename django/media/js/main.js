$(function(){
    /* Callback from main message view when a message is picked in dropdown */
    $('#thread_select').change(function(e) {
	document.location.href = '/message-id/' + $(this).val();
    });


    /*
     * For flat message view, redirect to the anchor of the messageid we're watching,
     * unless we happen to be the first one.
     */
    $('#flatMsgSubject[data-isfirst=False]').each(function(i, e) {
	if (document.location.href.indexOf('#') < 0) {
	    document.location.href = document.location.href + '#' + $(e).data('msgid');
	    return;
	}
    });
});



/*
 * Google analytics
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1345454-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/*
*
Monthlist search function
*/

function monthlistSearch() {
    $('.panel-collapse.in')
        .collapse('hide');
    var input = document.getElementById("MonthlistSearch");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('panel-title');
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "block";
        } else {
            nodes[i].style.display = "none";
        }
    }
}


 /**
   * Copy message if to clipboard
   */
 function copyMessageID() {
    var copyText = document.getElementById("messageId-text");
    navigator.clipboard.writeText(copyText.innerHTML);
    
    var tooltip = document.getElementById("messageidTooltip");
    tooltip.innerHTML = "Copied!";
  }
  
 function outCopyMessageID() {
    var tooltip = document.getElementById("messageidTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


/**
 * Show email id on hover
 */

$(document).ready(function () {
    //init pop-ups
    $(".popup").attr("data-close", false);

    //click on pop-up opener.
    //pop-up is expected to be a child of opener
    $(".more_info").click(function () {
        var $title = $(this).find(".popup");
        //open if not marked for closing
        if ($title.attr("data-close") === "false") {
            $title.show();
        }
        //reset popup         
        $title.attr("data-close", false);
    });

    //mark pop-up for closing if clicked on
    //close is initiated by document.mouseup, 
    //marker will stop opener from re-opening it
    $(".popup").click(function () {
        $(this).attr("data-close",true);
    });

    //hide all pop-ups
    $(document).mouseup(function () {
        $(".popup").hide();
    });

    //show on rollover if mouse is used
    $(".more_info").mouseenter(function () {
        var $title = $(this).find(".popup");
        $title.show();
    });

    //hide on roll-out
    $(".more_info").mouseleave(function () {
        var $title = $(this).find(".popup");
        $title.hide();
    });  
});
