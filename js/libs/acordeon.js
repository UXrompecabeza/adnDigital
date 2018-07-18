
//ACORDEON

var AccordionModule = (function () {
    function getParent(expandCollapseButton) {
        var parent;
        if (expandCollapseButton.closest(".list").length > 0) {
            parent = expandCollapseButton.closest(".list").find(".accordion");
        } else {
            parent = expandCollapseButton.closest(".accordion");
        }
        return parent;
    }

    function expandSingle(item, transition) {
        var title = item;
        var content = item.siblings(".accordion__content");
        if (!content.is(':visible')) {
            if (transition == "slow") {
                content.slideDown('slow').scrollTop(0);
            } else {
                content.show();
            }
            title.find('.icon-plus').hide();
            title.find('.icon-minus').show();
        }
    }

    function expandAll(parent, transition) {
        parent.find(".expandAll").hide();
        parent.find(".collapseAll").show();
        parent.find(".accordion__title").each(function () {
            expandSingle($(this), transition);
        });
    }

    function collapseSingle(item, transition) {
        var title = item;
        var content = item.siblings(".accordion__content");
        if (content.is(':visible')) {
            if (transition == "slow") {
                content.slideUp('slow').scrollTop(0);
            } else {
                content.hide();
            }
            title.find('.icon-plus').show();
            title.find('.icon-minus').hide();
        }
    }

    function collapseAll(parent, transition) {
        parent.find(".expandAll").show();
        parent.find(".collapseAll").hide();
        parent.find(".accordion__title").each(function () {
            collapseSingle($(this), transition);
        });
    }

    return {
        init: function () {
            // Expand All Accordions
            $(".accordion .expandAll").on("click", function () {
                var parent = getParent($(this));
                expandAll(parent, "slow");
            });

            // Collapse All Accordions
            $(".accordion .collapseAll").on("click", function () {
                var parent = getParent($(this));
                collapseAll(parent, "slow");
            });

            // Expand/Collapse Each Accordion
            $(".accordion .accordion__title").on("click", function () {
                var parent = getParent($(this));

                // Close others upon new open
                if (!$(this).siblings(".accordion__content").is(':visible')) {
                    collapseAll(parent, "slow");
                    expandSingle($(this), "slow");
                } else {
                    parent.find(".expandAll").show();
                    parent.find(".collapseAll").hide();
                    collapseSingle($(this), "slow");
                }
            });
        },
        collapseAll: collapseAll
    };
})();
AccordionModule.init();