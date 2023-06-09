
    var controller = new ScrollMagic.Controller();
  
    $(function () {
      var $block_list = $(".block-list"),
        $block_item = $block_list.find(".block-list__item"),
        block_list_width = $block_list.outerWidth(),
        block_item_width = $block_item.outerWidth(),
        total_width = block_item_width * $block_item.length,
        travel_distance = total_width - block_list_width + 20;
  
      var scene = new ScrollMagic.Scene({
        triggerElement: "#second",
        duration: "200%",
        triggerHook: 0,
      })
        .setPin(".block-list")
        .addTo(controller);
  
      scene.on("progress", function (e) {
        var progress = e.progress,
          move = -travel_distance * progress + "px";
        $block_list.css({
          transform: "translateX(" + move + ")",
        });
      });
    });
  
    // Set the background color of the ScrollMagic container
    $(".block-list").css("background-color", "#040404");
