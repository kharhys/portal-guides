<template>
    <div>    
        <div class="mail-wrapper" style="display:none">    
            <div class="mail-top shadow">    
                <div class="mail-subject">
                    <span class="fs" style="font-weight: bold"> Kenya Dairy Board </span>
                    <span> &nbsp; - &nbsp; </span>
                    <span class="sn"> Quality milk for health </span>  
                </div>    
                <div class="mail-action"></div>    
            </div>    
            <div class="mail-body ">    
                <div class="image">    
                    <img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_k_56.png">    
                </div>    
                <div class="someClass">    
                    <div class="sender">    
                        <strong>Kenya Dairy Board</strong> is a statutory body established in 1958 through an  Act of Parliament, 
                        The Dairy Industry Act, Cap 336 of the Laws of Kenya Mandated to <strong>regulate</strong>, 
                        <strong>develop</strong> and <strong>promote</strong> the Dairy Industry in Kenya.  
                    </div>    
                    <div class="message">  
                        <strong>Functions of the Board</strong> 
                        <ul style="margin: .5rem;">
                            <li> Organize, regulate and develop the efficient production marketing, distribution and supply of dairy produce </li>
                            <li> To improve the quality of dairy produce </li>
                            <li> Secure reasonable and stable prices to producers of dairy produce. </li>
                            <li> To promote market research in relation to dairy produce </li>
                            <li> To permit the greatest possible degree of private enterprise in the production, processing and sale of dairy produce </li>
                            <li> To ensure, either by itself or in association with any government department or local authority the adoption of measures and practices designed to 
                                 promote greater efficiency in the dairy industry </li>
                        </ul> 
                    </div>    
                </div>    
            </div>    
            <div class="mail-footer shadow">    
                <div class="image">       
                </div>    
                <div class="replybox">    
                    <div class="draft" > 
                        <v-btn light primary>More</v-btn>
                    </div>     
                        
                </div>    
            </div>    
        </div>    
        <div class="content-wrapper">    
            <div class="image">    
                <img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_k_56.png">    
            </div>    
            <div class="name"><span>KDB</span></div>    
            <div class="subject">    
                <div class="actions">    
                    <a href="#" class="pinned-msg"><i class="fa fa-thumb-tack"></i></a>    
                    <ul>    
                        <li><a href="#"><i class="fa fa-thumb-tack"></i></a></li>    
                        <li><a href="#"><i class="fa fa-clock-o"></i></a></li>    
                        <li><a href="#"><i class="fa fa-check"></i></a></li>    
                        <li><a href="#"><i class="fa fa-ellipsis-v"></i></a></li>    
                    </ul>    
                </div>    
                <div class="content">    
                    <span class="fs"> Kenya Dairy Board </span>
                    <span> &nbsp; - &nbsp; </span>
                    <span class="sn"> Quality milk for health </span>    
                </div>    
            </div>    
        </div>    
    </div>
</template>


<style>

.wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    transition: .2s;
}

.wrapper .header {
    padding-bottom: .6rem;
    margin-top: 1.2rem;
    position: relative;
    padding-left: 0;
    color: #757575;
    font-size: 14px;
}


.wrapper .mail-wrapper { 
    margin: -1%;
    transition: all .1s ease-in-out;
    background: white;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);
}

.wrapper .mail-wrapper .mail-top {
    cursor: pointer;
    padding: 20px;
}
.wrapper .shadow {
    box-shadow: 0 -1px 1px #e5e5e5, 0 2px 1px rgba(0, 0, 0, 0.12);
}
.image {
    float: left;
    padding: 12px 24px;
}
.wrapper .mail-wrapper img {
    width: 36px;
}
.wrapper .mail-wrapper .mail-body .someClass {
    margin: 0 20px 0 16px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: nowrap;
}
.wrapper .mail-wrapper .mail-body .someClass .sender {
    margin-top: 1rem;
}
.wrapper .mail-wrapper .mail-body .someClass .sender > :first-child {
    font-weight: bold;
}
.wrapper .mail-wrapper .mail-body .someClass .message {
    padding: 30px 40px 20px 0;
}
.wrapper .mail-wrapper .mail-footer {
    background: rgba(117, 117, 117, 0.07);
}
.wrapper .shadow {
    box-shadow: 0 -1px 1px #e5e5e5, 0 2px 1px rgba(0, 0, 0, 0.12);
}
.image {
    float: left;
    padding: 12px 24px;
}
.wrapper .mail-wrapper img {
    width: 36px;
}
.image > img {
    width: 24px;
    border-radius: 50%;
}
.wrapper .mail-wrapper .mail-footer .replybox .draft {
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
}
.wrapper .mail-wrapper .mail-footer .replybox div {
    margin-bottom: 10px;
}
.wrapper .mail-wrapper .mail-footer .replybox .draft span {
    cursor: pointer;
}

.wrapper .mail-wrapper .mail-footer .replybox .draft i, 
.wrapper .mail-wrapper .mail-footer .replybox .draft span:nth-child(2) {
    color: #999;
    font-weight: bold;
}
.wrapper .mail-wrapper .mail-footer .replybox .draft span {
    cursor: pointer;
}
.wrapper .mail-wrapper .mail-footer .replybox div {
    margin-bottom: 10px;
}
.left {
    float: left;
}
.wrapper .mail-wrapper .mail-footer .replybox a.send-btn {
    cursor: pointer;
    background: #4285f4;
    text-decoration: none;
    position: relative;
    padding: 8px;
    font-size: 13px;
    border-radius: 2px;
    color: white;
    font-weight: normal;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.14), 0 4px 6px rgba(0, 0, 0, 0.24);
}
.wrapper .mail-wrapper .mail-footer .replybox a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    display: inline-block;
    font-size: 20px;
}
.wrapper .mail-wrapper .mail-footer .replybox a:nth-child(2) {
    transform: rotate(-45deg);
}

.wrapper .content-wrapper {
    transition: all .2s ease-in-out;
    margin: 0;
    position: relative;
    overflow: hidden;
    background: #fff;
    cursor: pointer;
    box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
}
.image {
    float: left;
    padding: 12px 24px;
}
.image > img {
    width: 24px;
    border-radius: 50%;
}
.wrapper .content-wrapper .name {
    float: left;
    width: 184px;
    overflow: hidden;
    text-overflow: elipsis;
    word-wrap: noword;
}
.wrapper .content-wrapper .name span {
    display: inline-block;
    padding-top: 16px;
}
.wrapper .content-wrapper .subject {
    position: relative;
    display: block;
    margin: 0 20px 0 8px;
    min-width: 150px;
    text-overflow: elipsis;
    overflow: hidden;
}
.wrapper .content-wrapper .subject .actions {
    float: right;
    width: 50px;
    font-size: 16px;
}
.wrapper .content-wrapper .pinned-msg {
    position: absolute;
    display: none;
    top: 16px;
    right: 5px;
    color: #4285f4;
}
.wrapper .content-wrapper .subject .actions ul {
    overflow: hidden;
    list-style: none;
    position: absolute;
    top: 16px;
    right: 5px;
    display: none;
    background: white;
}
.wrapper .content-wrapper .subject .actions ul li {
    display: inline-block;
    margin: 0 5px;
}
.wrapper .content-wrapper .subject .actions ul li a {
    text-decoration: none;
    padding: 5px;
    color: black;
    opacity: .5;
}
.wrapper .content-wrapper .subject .content {
    float: left;
    overflow: hidden;
}
.wrapper .content-wrapper .subject .content .fs {
    font-weight: bold;
    padding-right: 5px;
}
.wrapper .content-wrapper .subject .content span {
    display: inline-block;
    padding-top: 16px;
}
.wrapper .content-wrapper .subject .content span {
    display: inline-block;
    padding-top: 16px;
}
.wrapper .content-wrapper .subject .content .sn {
    display: inline-block;
    color: #757575;
    padding-right: 5px;
    font-style: italic;
}
.wrapper .content-wrapper .subject .content span {
    display: inline-block;
    padding-top: 16px;
}


.wrapper .content-wrapper:hover > .subject > .actions ul {
  display: block;
}
.wrapper .content-wrapper:hover > .subject > .actions ul a {
  padding: 1px;
}

.wrapper .content-wrapper .subject .actions ul li a:hover {
  opacity: .8;
}
.wrapper .content-wrapper .subject .actions ul li a.pinned {
  opacity: 1;
  color: #4285f4;
}

.wrapper .content-wrapper:hover > .subject > .actions ul a {
    padding: 1px;
}
.wrapper .content-wrapper .subject .actions ul li a {
    text-decoration: none; 
    color: black;
    opacity: .5;
}

.wrapper .content-wrapper .subject .actions ul li {
    display: inline-block;
    margin: 0 5px;
}
.wrapper .content-wrapper:hover > .subject > .actions ul {
    display: block;
}
.wrapper .content-wrapper .subject .actions ul {
    overflow: hidden;
    list-style: none;
    position: absolute;
    top: 16px;
    right: 5px;
    display: none;
    background: white;
}
.wrapper .content-wrapper .pinned-msg {
    position: absolute;
    display: none;
    top: 16px;
    right: 5px;
    color: #4285f4;
}
.wrapper .content-wrapper .subject .actions {
}
.wrapper .content-wrapper .subject .actions {
    float: right;
    width: 50px;
    font-size: 16px;
    font-size: .9rem;
}
.wrapper .content-wrapper .subject {
    position: relative;
    display: block;
    margin: 0 20px 0 8px;
    min-width: 150px;
    text-overflow: elipsis;
    overflow: hidden;
}
.sn {
    font-style: italic;
}

dt, dd {
  width: 49.5%;
  margin: 0px auto 10px auto;
}

dt {
  margin-right: 0.5%;
  float: left;
    
  font-weight : 700;
  text-align: right;
}

dd {
  margin-left: 0.5%;
  float: right;
  
  text-align: left;
}

dd:after {
  content: "\00a0";
}

.message ul li {
    list-style-type: circle;
}

</style>


<script> 
import $ from 'jquery'

export default { 
  data () {
    return {
      showsidenav: false,
      pinned: false 
    }
  },
  mounted () {
    var vm = this
    console.log('this', $)
    
    $(function() {	  
        $(".actions a").click(function(e) {
            e.stopPropagation();
        });
    
        $("a.dialog-action").click(function() {
            $(".dialog-overlay").hide();
        });
    
        $("button.invite-action").click(function(e) {    	
            $(".dialog-overlay").show();
        });

        $(".actions>ul>li:first-child>a").click(function(e) {
            e.stopPropagation();
            var $this = $(this);
            $this.toggleClass('pinned');
            var pin = $this.parents('.actions');    
            $('.pinned-msg',$(pin)).toggle();
        });

    $(".content-wrapper").click(function() {
        var $ele = $(this);
        $ele.hide();
        $ele.prev().show();
    });

    $(".sidebar a").click(function() {
        var className = $(this).attr('class') || 'other';
        $(".menu-wrapper").attr('class', 'menu-wrapper ' + className);
    });

    $(".mail-wrapper>.mail-top").click(function() {
        var $ele = $(this).parent();
        $ele.next().show();
        //$ele.append("<h1>New message</h1>");
        $ele.hide();
        
    });

    $(".menu-toggle-icon input").click(function() {
        $(".menu-wrapper nav").toggleClass("active");
    });

    $('.menu-toggle-icon>input[type=checkbox]').change(function() {
        $(".sidebar").toggleClass("hide").toggleClass("show");
    });

    $('.chk-pin input[type=checkbox]').change(function() {
        if ($(this).is(":checked")) {
        $(".logo").text("Pinned");
        } else {
        $(".logo").text("Inbox");
        }
    });

    $(".link-image").click(function() {
        $(".dropdown").toggle();
    });

    $(".arrow").click(function() {
        $(".collapse", $(this).parents('.msg-recipients')).toggle();
    });

    $(".close").click(function() {
        $(this).parent().toggle();
    });

    $(".floating-btn button:not(.invite-action)").click(function() {
        var $parent = $("#msg-box");
        var $clone = $(".template>.cell").clone(true, true);
        var $items = $("#msg-box .cell");
        var index = $items.length + 1;

        if (index === 1) {
        $clone = $clone.css({
            "padding-left": "480px"
        });
        }
        $clone.find('.wrap').css({
        "z-index": index
        });
        $parent.prepend($clone);
    });

    $("#msg-box").on("click", ".close", function(e) {
        e.stopPropagation();
        $(this).parents(".cell").remove();
    });

    $("#msg-box").on("click", ".minimize", function(e) {
        e.stopPropagation();
        var $ele = $(this);
        if ($ele.hasClass('minimized')) {
        $ele.removeClass('minimized');
        $ele.parents(".msg-title-bar").siblings().css({
            "display": "block"
        });
        $ele.parents(".msg-compose").css({
            height: '500px',
            width: '480px'
        });
        $ele.parents(".cell").css({
            width: '480px'
        });
        } else {
        $ele.addClass('minimized');
        $ele.parents(".msg-title-bar").siblings().css({
            "display": "none"
        });
        $ele.parents(".msg-compose").css({
            height: '40px',
            width: '240px'
        });
        $ele.parents(".cell").css({
            width: '240px'
        });
        }
    });

    $(".search-box input[type='text']").click(function() {
        $(".wrapper").hide(50);
        $(".menu-wrapper").addClass("search");
        $(".search-result").removeClass("search-hide");
        $(".logo").text("Back");
        $(".sidebar").addClass("hide");
    });

    $(".back, .logo").on("click", toggleFunc);

    $('#msg-box').on("click", '.msg-title-bar', updateZIndex);

    function toggleFunc() {
        $(".menu-wrapper").removeClass("search");
        $(".search-result").addClass("search-hide");
        $(".search-box input[type='text']").val('');
        $(".wrapper").show();

        if ($(".chk-pin input[type='checkbox']").is(":checked")) {
        $(".logo").text("Pinned");
        } else {
        $(".logo").text("Inbox");
        }
    }

    
    function updateZIndex() {
        var highestIndex = 0;
        var items = $(".msg-wrapper .cell");
        var child = $(this).parents('.cell');
        var index = $(".cell").index(child);

        if (items.length < 1) return;

        items.each(function() {
        var currentIndex = parseInt($(this).find('.wrap').css("zIndex"), 10);
        if (currentIndex > highestIndex) {
            highestIndex = currentIndex;
        }
        });

        changeIndex(items, index, highestIndex);

    }

    function changeIndex(items, fromIndex, highestIndex) {
        for (var i = fromIndex; i >= 0; i--, highestIndex--) {
        var current = $(items[i]).find('.wrap');
        current.css('zIndex', highestIndex);
        }

        for (var i = fromIndex + 1; i < items.length; i++, highestIndex--) {
        var current = $(items[i]).find('.wrap');
        current.css('zIndex', highestIndex);
        }
    }
    
    
    $(".send-btn-stop").click(function(e){
            var rippler = $(this);

            if(rippler.find(".ink").length == 0) {
                rippler.append("<span class='ink'></span>");
            }

            var ink = rippler.find(".ink");

            ink.removeClass("animate");

            if(!ink.height() && !ink.width())
            {
                var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
                ink.css({height: d, width: d});
            }

            var x = e.pageX - rippler.offset().left - ink.width()/2;
            var y = e.pageY - rippler.offset().top - ink.height()/2;

            ink.css({
            top: y+'px',
            left:x+'px'
            }).addClass("animate");
        });

    });
  }

}
</script>