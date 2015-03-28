// Variables pertaining to number of events visible at any time

var eventsarray=[];
var slicestart=0;
var sliceend=slicestart+3;

// Timer for promoteFeatureEvent()

var promotefeatureeventtimer=5000;

// Media coverage entries visible at any time

var visiblemediacoverageentries=[];

function sortEventsOnPageLoad(){
    $(".eventscontainer").each(function(){
        eventsarray.push($(this).attr("id").toString());
    });

    eventsarrayshow=eventsarray.slice(slicestart,sliceend);
    eventsarrayhide=eventsarray.slice(sliceend,eventsarray.length);

    for(x in eventsarrayshow){
        $("#"+eventsarrayshow[x]+"").show();
    }
    for(x in eventsarrayhide){
        $("#"+eventsarrayhide[x]+"").hide();
    }
    if(eventsarray.length>=3){
        $("#"+eventsarrayshow[eventsarrayshow.length-3]+",#"+eventsarrayshow[eventsarrayshow.length-2]+",#"+eventsarrayshow[eventsarrayshow.length-1]+"").wrapAll("<p class='eventscontainersholders' style='display:table-row;'></p>");
        $("#previouseventsspan").show();

        if((eventsarrayshow.length+eventsarrayhide.length)<=3){
                $("#newereventspaginationdiv,#previouseventspaginationdiv").hide();
        }
        else if((eventsarrayshow.length+eventsarrayhide.length)>3){
                $("#newereventspaginationdiv").hide();
                $("#previouseventspaginationdiv").show();
        }

        $("#previouseventspaginationdiv").on("click",function(){
        $("#previouseventsspan").hide();
        $("#previouseventsspinner").show(2000,function(){

            eventsarrayshow.push(eventsarrayhide[0],eventsarrayhide[1],eventsarrayhide[2]);
        $("#"+eventsarrayshow[eventsarrayshow.length-3]+",#"+eventsarrayshow[eventsarrayshow.length-2]+",#"+eventsarrayshow[eventsarrayshow.length-1]+"").wrapAll("<p class='eventscontainersholders' style='display:table-row;'></p>");

        for(x in eventsarrayshow){
        $("#"+eventsarrayshow[x]+"").show();
        }
            for(i=0;i<3;i++){
                eventsarrayhide.shift();
            }
            window.scrollTo(0,$(".eventscontainersholders:last").offset().top-100);
        $("#previouseventsspinner").hide();
        $("#previouseventsspan").show();

        var oldesttopteneventnumber = (parseInt($(".eventscontainersholders:first").children().first().attr("id").slice(15))-9);

         if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==1) && ($(".eventscontainersholders").length==1)){
            $("#newereventspaginationdiv,#previouseventspaginationdiv").hide();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==0) && ($(".eventscontainersholders").length==1)){
            $("#previouseventspaginationdiv").show();
            $("#newereventspaginationdiv").hide();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==0)&&($(".eventscontainersholders").length>1)){
            $("#previouseventspaginationdiv,#newereventspaginationdiv").show();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==1)&&($(".eventscontainersholders").length>1)){
            $("#previouseventspaginationdiv").hide();
            $("#newereventspaginationdiv").show();
            $("#archiveopenclick").show();
        }

        });
        });

        $("#newereventsspan").show();
        $("#newereventspaginationdiv").on("click",function(){
        $("#newereventsspan").hide();
        $("#newereventsspinner").show(2000,function(){

            eventsarrayhide.unshift(eventsarrayshow[eventsarrayshow.length-3],eventsarrayshow[eventsarrayshow.length-2],eventsarrayshow[eventsarrayshow.length-1]);
            for(i=0;i<3;i++) {
                eventsarrayshow.pop();
            }

            $(".eventscontainersholders:last").children().hide().unwrap();

            window.scrollTo(0,$(".eventscontainersholders:last").offset().top-100);
        $("#newereventsspinner").hide();
        $("#newereventsspan").show();


        var oldesttopteneventnumber = (parseInt($(".eventscontainersholders:first").children().first().attr("id").slice(15))-9);

        if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==1) && ($(".eventscontainersholders").length==1)){
            $("#newereventspaginationdiv,#previouseventspaginationdiv").hide();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==0) && ($(".eventscontainersholders").length==1)){
            $("#previouseventspaginationdiv").show();
            $("#newereventspaginationdiv").hide();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==0)&&($(".eventscontainersholders").length>1)){
            $("#previouseventspaginationdiv,#newereventspaginationdiv").show();
            $("#archiveopenclick").hide();
        }
        else if(($(".eventscontainersholders:last").find("#eventscontainer"+oldesttopteneventnumber+"").length==1)&&($(".eventscontainersholders").length>1)){
            $("#previouseventspaginationdiv").hide();
            $("#newereventspaginationdiv").show();
            $("#archiveopenclick").show();
        }


        });
        });
    }
setTimeout(function(){
showEventSearchOptions();
    },3000);
}


function eventsSummaryShrinkOnLoad(){
$(".eventssummaryfullstring").hide();
$(".eventssummarypartialstring").show();
}

function eventsSummaryExpand(){
   $(".showmorespan").on("click",function(){
   $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
   $(this).parents(".eventscontainer").clone().appendTo("#showdetailsdiv");
   $("#showdetailsdiv").find(".eventssummaryfullstring").show();
   $("#showdetailsdiv").find(".eventssummarypartialstring").hide();
   });
}

function eventsSummaryExpandNoSession(){
    $(".showmorespan").on("click",function(){
        $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
            $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
        }
        $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
            $("#customalertboxbackgrounddiv,#customalertbox").remove();
        });
    });
}

function eventsSummaryShrink(){
    $("#showdetailsbackgrounddiv,#showdetailsdiv,#closebuttondetailsdiv").remove();
}

function searchEventsByDate(){
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var endspan = "</span>";
      $("#selectdateform").on("submit", function () {
          $(".eventscontainer").each(function () {
              var datetoparse = Number(Date.parse($(this).find("#eventsdate").html().slice($(this).find("#eventsdate").html().indexOf(endspan) + 9)));
              var startdate = Number(Date.parse($("#startdate").val()));
              var enddate = Number(Date.parse($("#enddate").val()));

              if ((datetoparse >= startdate) && ((datetoparse <= enddate))) {
                  if ($("#showdetailsdiv").length == 0) {
                      $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                  }
                  $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                  $("#showdetailsdiv").find(".eventssummaryfullstring").show();
                  $("#showdetailsdiv").find(".eventssummarypartialstring").hide();
              }

          });
          if ($("#showdetailsdiv").length == 0) {
             $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events within this date range.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
             }
             $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
             });
          }
          return false;
      });
  }
  else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var endspan = "</span>";
      $("#selectdateform").on("submit", function () {
          $(".eventscontainer").each(function () {
              var datetoparse = Number(Date.parse($(this).find("#eventsdate").html().slice($(this).find("#eventsdate").html().indexOf(endspan) + 9)));
              var startdate = Number(Date.parse($("#startdate").val()));
              var enddate = Number(Date.parse($("#enddate").val()));

              if ((datetoparse >= startdate) && ((datetoparse <= enddate))) {
                  if ($("#showdetailsdiv").length == 0) {
                      $("#sorteventsbydate").removeAttr("style");
                      $("#sorteventsbydate").insertAfter("#sorteventsbydatecover");
                      $("body").append("<div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                  }
                  $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                  $("#showdetailsdiv").find(".eventssummaryfullstring").show();
                  $("#showdetailsdiv").find(".eventssummarypartialstring").hide();
              }

          });
          if ($("#showdetailsdiv").length == 0) {
             $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events within this date range.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
             }
             $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
             });
          }
          return false;
      });
  }
}

function searchEventsByDateNoSession(){
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var endspan = "</span>";
      $("#selectdateform").on("submit", function () {
          $(".eventscontainer").each(function () {
              var datetoparse = Number(Date.parse($(this).find("#eventsdate").html().slice($(this).find("#eventsdate").html().indexOf(endspan) + 9)));
              var startdate = Number(Date.parse($("#startdate").val()));
              var enddate = Number(Date.parse($("#enddate").val()));

              if ((datetoparse >= startdate) && ((datetoparse <= enddate))) {
                  if ($("#showdetailsdiv").length == 0) {
                      $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                  }
                  $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                  $("#showdetailsdiv").find(".eventssummaryfullstring").hide();
                  $("#showdetailsdiv").find(".eventssummarypartialstring").show();
              }

          });
          $(".showmorespan").on("click",function(){
              $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });

          });
          if ($("#showdetailsdiv").length == 0) {
              $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events within this date range.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
          }
          return false;
      });
  }
  else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var endspan = "</span>";
      $("#selectdateform").on("submit", function () {
          $(".eventscontainer").each(function () {
              var datetoparse = Number(Date.parse($(this).find("#eventsdate").html().slice($(this).find("#eventsdate").html().indexOf(endspan) + 9)));
              var startdate = Number(Date.parse($("#startdate").val()));
              var enddate = Number(Date.parse($("#enddate").val()));

              if ((datetoparse >= startdate) && ((datetoparse <= enddate))) {
                  if ($("#showdetailsdiv").length == 0) {
                      $("#sorteventsbydate").removeAttr("style");
                      $("#sorteventsbydate").insertAfter("#sorteventsbydatecover");
                      $("body").append("<div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                  }
                  $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                  $("#showdetailsdiv").find(".eventssummaryfullstring").hide();
                  $("#showdetailsdiv").find(".eventssummarypartialstring").show();
              }

          });
          $(".showmorespan").on("click",function(){
              $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
          });
          if ($("#showdetailsdiv").length == 0) {
              $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events within this date range.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
          }
          return false;
      });
  }
}

function searchEventsByCategory(){
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#selectcategoryform").on("submit", function () {
        var selectcategory = document.getElementById('selectcategory');
        var selectedoptionvalue = selectcategory.options[selectcategory.selectedIndex].value;
        if (selectedoptionvalue != "default") {
            if ($("." + selectedoptionvalue + "").length > 0) {
                $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                $("." + selectedoptionvalue + "").each(function () {
                    $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                    $("#showdetailsdiv").find(".eventssummaryfullstring").show();
                    $("#showdetailsdiv").find(".eventssummarypartialstring").hide();
                });
            }
            else if ($("." + selectedoptionvalue + "").length == 0) {
              $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events in that category yet.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
            }
        }
        if (selectedoptionvalue == "default") {
            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease select an event category.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
        }
        return false;
    });
}
else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   $("#selectcategoryform").on("submit", function () {
        var selectcategory = document.getElementById('selectcategory');
        var selectedoptionvalue = selectcategory.options[selectcategory.selectedIndex].value;
        if (selectedoptionvalue != "default") {
            if ($("." + selectedoptionvalue + "").length > 0) {
             $("#sorteventsbycategory").removeAttr("style");
             $("#sorteventsbycategory").insertAfter("#sorteventsbycategorycover");
                $("body").append("<div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                $("." + selectedoptionvalue + "").each(function () {
                    $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                    $("#showdetailsdiv").find(".eventssummaryfullstring").show();
                    $("#showdetailsdiv").find(".eventssummarypartialstring").hide();
                });
            }
            else if ($("." + selectedoptionvalue + "").length == 0) {
                $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events in that category yet.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
            }
        }
        if (selectedoptionvalue == "default") {
            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease select an event category.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
        }
        return false;
    });
}
}

function searchEventsByCategoryNoSession(){
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#selectcategoryform").on("submit", function () {
        var selectcategory = document.getElementById('selectcategory');
        var selectedoptionvalue = selectcategory.options[selectcategory.selectedIndex].value;
        if (selectedoptionvalue != "default") {
            if ($("." + selectedoptionvalue + "").length > 0) {
                $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                $("." + selectedoptionvalue + "").each(function () {
                    $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                    $("#showdetailsdiv").find(".eventssummaryfullstring").hide();
                    $("#showdetailsdiv").find(".eventssummarypartialstring").show();
                });
                $(".showmorespan").on("click",function(){
                    $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
                });
            }
            else if ($("." + selectedoptionvalue + "").length == 0) {
                $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events in that category yet.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
            }
        }
        if (selectedoptionvalue == "default") {
            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease select an event category.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
        }
        return false;
    });
}
else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   $("#selectcategoryform").on("submit", function () {
        var selectcategory = document.getElementById('selectcategory');
        var selectedoptionvalue = selectcategory.options[selectcategory.selectedIndex].value;
        if (selectedoptionvalue != "default") {
            if ($("." + selectedoptionvalue + "").length > 0) {
             $("#sorteventsbycategory").removeAttr("style");
             $("#sorteventsbycategory").insertAfter("#sorteventsbycategorycover");
                $("body").append("<div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");
                $("." + selectedoptionvalue + "").each(function () {
                    $("#showdetailsdiv").append($(this).clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                    $("#showdetailsdiv").find(".eventssummaryfullstring").hide();
                    $("#showdetailsdiv").find(".eventssummarypartialstring").show();
                });
                $(".showmorespan").on("click",function(){
                    $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
                });
            }
            else if ($("." + selectedoptionvalue + "").length == 0) {
                $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no events in that category yet.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
            }
        }
        if (selectedoptionvalue == "default") {
            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease select an event category.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
        }
        return false;
    });
}
}

function searchEventsByDateUncover(){
  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $("#sorteventsbydatecover").on("click", function () {
          $(this).slideUp(function () {
              $("#eventsearchoptions").css("max-width", "100%");
              $("#sorteventsbydate").slideDown(function () {
                  if ($("input[type='date']").length == 0) {
                      $("#startdate,#enddate").attr("type", "text");
                  }
              });
          });
      });
  }
   else if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#sorteventsbydatecover").on("click", function () {
           $("body").append("<div id='showdetailsbackgrounddiv'></div>");
           $("#sorteventsbydate").insertBefore("#eventsearchoptions");
           $("#sorteventsbydate").css({"position":"fixed","left":"5%","width":"85%","top":"5%","z-index":"17","border-left":"#99CCFF 6px solid","line-height":"0.5"});
           $("#sorteventsbydate").slideDown();
        });
    }
}


function searchEventsByCategoryUncover() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#sorteventsbycategorycover").on("click", function () {
            $(this).slideUp(function () {
                $("#eventsearchoptions").css("max-width", "100%");
                $("#sorteventsbycategory").slideDown() ;
            });
        });
    }
    else if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#sorteventsbycategorycover").on("click", function () {
           $("body").append("<div id='showdetailsbackgrounddiv'></div>");
           $("#sorteventsbycategory").insertBefore("#eventsearchoptions");
           $("#sorteventsbycategory").css({"position":"fixed","left":"20%","width":"60%","top":"20%","z-index":"17","border-left":"#99CCFF 6px solid"});
           $("#sorteventsbycategory").slideDown();
        });
    }

}

function searchEventsByDateClose(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#sorteventsbydateclosebutton").on("click", function () {
            $("#sorteventsbydate").slideUp(function () {
                $("#eventsearchoptions").css("max-width", "19%");
                $("#sorteventsbydatecover").slideDown();
            });
        });
    }
    else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#sorteventsbydateclosebutton").on("click", function () {
             $("#showdetailsbackgrounddiv,#showdetailsdiv").remove();
             $("#sorteventsbydate").removeAttr("style");
             $("#sorteventsbydate").insertAfter("#sorteventsbydatecover");
        });
    }
}

function searchEventsByCategoryClose(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#sorteventsbycategoryclosebutton").on("click", function () {
            $("#sorteventsbycategory").slideUp(function () {
                $("#eventsearchoptions").css("max-width", "19%");
                $("#sorteventsbycategorycover").slideDown();
            });
        });
    }
    else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#sorteventsbycategoryclosebutton").on("click", function () {
             $("#showdetailsbackgrounddiv,#showdetailsdiv").remove();
             $("#sorteventsbycategory").removeAttr("style");
             $("#sorteventsbycategory").insertAfter("#sorteventsbycategorycover");
        });
    }
}

function showEventSearchOptions(){

var topofeventsdiv=$("#eventsdiv").offset().top;
if($("#eventarchivesdiv").css("display")=="none") {
    var upcomingeventdivtop = $("#upcomingeventdiv").offset().top;
}
else if($("#eventarchivesdiv").css("display")=="block") {
    var upcomingeventdivtop = $("#eventarchivesdiv").offset().top;
}
var headerdivheight=parseFloat($("#headerdiv").css("height"));
var windowpageyoffsetandwindowinnerheight=((window.pageYOffset+window.innerHeight)-headerdivheight);

        if ((windowpageyoffsetandwindowinnerheight)<topofeventsdiv) {
            $("#eventsearchoptions").hide();
            $("#paginationsection").hide();
            $("#archiveopenclick").hide();
        }
        else if(((windowpageyoffsetandwindowinnerheight)>=topofeventsdiv)&&((windowpageyoffsetandwindowinnerheight)<=upcomingeventdivtop)){
            $("#eventsearchoptions").show();
            $("#paginationsection").show();
            if($("#previouseventspaginationdiv").css("display")=="none"){
                $("#archiveopenclick").show();
            }
            else if($("#previouseventspaginationdiv").css("display")=="block"){
                $("#archiveopenclick").hide();
            }
        }
        else if ((windowpageyoffsetandwindowinnerheight)>upcomingeventdivtop) {
            $("#eventsearchoptions").hide();
            $("#paginationsection").hide();
            $("#archiveopenclick").hide();
        }
    $(window).on("scroll",function() {
        var topofeventsdiv=$("#eventsdiv").offset().top;
        if($("#eventarchivesdiv").css("display")=="none") {
            var upcomingeventdivtop = $("#upcomingeventdiv").offset().top;
        }
        else if($("#eventarchivesdiv").css("display")=="block") {
            var upcomingeventdivtop = $("#eventarchivesdiv").offset().top;
        }
        var headerdivheight=parseFloat($("#headerdiv").css("height"));
        var windowpageyoffsetandwindowinnerheight=((window.pageYOffset+window.innerHeight)-headerdivheight);

        if ((windowpageyoffsetandwindowinnerheight)<topofeventsdiv) {
            $("#eventsearchoptions").hide();
            $("#paginationsection").hide();
            $("#archiveopenclick").hide();
        }
        else if(((windowpageyoffsetandwindowinnerheight)>=topofeventsdiv)&&((windowpageyoffsetandwindowinnerheight)<=upcomingeventdivtop)){
            $("#eventsearchoptions").show();
            $("#paginationsection").show();
            if($("#previouseventspaginationdiv").css("display")=="none"){
                $("#archiveopenclick").show();
            }
            else if($("#previouseventspaginationdiv").css("display")=="block"){
                $("#archiveopenclick").hide();
            }
        }
        else if ((windowpageyoffsetandwindowinnerheight)>upcomingeventdivtop) {
            $("#eventsearchoptions").hide();
            $("#paginationsection").hide();
            $("#archiveopenclick").hide();
        }
    });
}

function showShortenedUpcomingEventSummary(){
      $("#upcomingeventpartialsummary").show();
      $("#upcomingeventfullsummary").hide();
      $("#showmoreupcomingeventsummary").on("click",function(){
         $("#upcomingeventpartialsummary").hide();
         $("#upcomingeventfullsummary").show();
      });
    $("#showlessupcomingeventsummary").on("click",function(){
         $("#upcomingeventpartialsummary").show();
         window.scrollTo(0,($("#showmoreupcomingeventsummary").offset().top-(parseFloat($("#headerdiv").css("height"))+100)));
         $("#upcomingeventfullsummary").hide();
      });
}

function showMoreUpcomingEventSummaryNoSession(){
    $("#showmoreupcomingeventsummarynosession").on("click",function(){
        $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view the details for this feature event.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
    });
}

function mobileAdjustments() {
    if (/Android/i.test(navigator.userAgent)) {
        $("#startdate,#enddate").attr("type", "text");
    }
}

function contactFormLoad() {
        $("#contactformholderdiv").load("/thanks/ form",function(){
            $("#contactform").find("label").before("<br /><br />");
            $("#contactformholderdiv").find("#contactformsubmit").after("<span id='contactformresponsehomepage'></span>");
            contactFormSubmit();
        });
}

function contactFormSubmit(){
    $("#contactformsubmit").on("click",function() {
        var responsemessage;
        $.post("/thanks/",{
            csrfmiddlewaretoken:$("input[name='csrfmiddlewaretoken']").val(),
            first_name:$("#id_first_name").val(),
            last_name:$("#id_last_name").val(),
            subject:$("#id_subject").val(),
            message:$("#id_message").val(),
            sender:$("#id_sender").val(),
            cc_myself:$("#id_cc_myself").val()
        },function(data){
            responsemessage=data.slice(data.indexOf("<span id='responsespan'>")+24).replace("</span>","");
            $("#contactformresponsehomepage").html(responsemessage);
        });
    });
}

function scrollToSection(){
        $(".sectionclick").on("click",function(){
            $(".sectionclick").css("color","#FFFFFF");
            $(this).not(".firstblackletter_upcomingevent").css("color","#FFFFFF");
            $(this).not(".firstblackletter_upcomingevent").css("color","#000000");
            var sectiontoscrollto=$(this).attr("id").replace("click","div");
            window.scrollTo(0, ($("#" + sectiontoscrollto + "").offset().top - (parseFloat($("#headerdiv").css("height")) + 25)));
            //var postbackurl=sectiontoscrollto.slice(0,sectiontoscrollto.indexOf("div"));
            //window.location = postbackurl;
            $("#headerdiv").show();
        });
        $(".sectionsplashclick").on("click",function(){
            $(".sectionsplashclick").css("color","#FFFFFF");
            $(this).css("color","#FFFFFF");
            $(this).css("color","#000000");
            var sectiontoscrollto=$(this).attr("id").replace("splash","");
            sectiontoscrollto=sectiontoscrollto.replace("click","div");
            window.scrollTo(0, ($("#" + sectiontoscrollto + "").offset().top - (parseFloat($("#headerdiv").css("height")) + 25)));
            //var postbackurl=sectiontoscrollto.slice(0,sectiontoscrollto.indexOf("div"));
            //window.location = postbackurl;
            $("#headerdiv").show();
            $(this).css("color","#FFFFFF");
        });
}

function socialMediaDropDown(){
    if($("#socialmediadiv").css("display","none")) {
        $("#socialmediaclick").on("click", function () {
            $("#socialmediadiv").show(function () {
                $("#socialmediadiv").css({"top": "" + (parseFloat($("#headerdiv").css("height")) + 70) + "px", "left": $("#socialmediaclick").css("left")});
                if($("#socialmediadiv").css("display","block")) {
                    $("#socialmediadivclosebutton,#socialmediaclick").on("click", function () {
                        $("#socialmediadiv").hide();
                    });
                }
            });
        });
    }
}



function screenRotationTasks() {
    if (window.matchMedia('(orientation: portrait)').matches == false) {
        $("#upcomingeventclick,#mediacoverageclick").insertAfter("#contactclick");
        $("#upcomingeventclick,#logo,#mediacoverageclick").removeAttr("style");
        $("#mediacoverageclick").css("left",($("#socialmediaclick").offset().left+60)+"px");
    }
    if (window.matchMedia('(orientation: portrait)').matches == true) {
        $("#upcomingeventclick").insertAfter("#logo");
        $("#mediacoverageclick").insertBefore("#logo");
        $("#upcomingeventclick,#logo,#mediacoverageclick").removeAttr("style");
    }
    window.onresize = function () {
        if (window.matchMedia('(orientation: portrait)').matches == false) {
            $("#upcomingeventclick,#mediacoverageclick").insertAfter("#contactclick");
            $("#upcomingeventclick,#logo,#mediacoverageclick").removeAttr("style");
            $("#mediacoverageclick").css("left",($("#socialmediaclick").offset().left+60)+"px");
        }
        if (window.matchMedia('(orientation: portrait)').matches == true) {
            $("#upcomingeventclick").insertAfter("#logo");
            $("#mediacoverageclick").insertBefore("#logo");
            $("#upcomingeventclick,#logo,#mediacoverageclick").removeAttr("style");
        }

    }
}

function extrasDivHandle(){
     if($("#socialmediadiv").children().length<3){
          $("#socialmediaclick").hide();
     }
     else if($("#socialmediadiv").children().length>=3){
          $("#socialmediaclick").show();
     }
}

function signOut(){
    var csrfmiddlewaretokenholder=$("input[name='csrfmiddlewaretoken']").val();
    $("#signoutbutton").on("click",function(){
        $.post("/endsession/",{csrfmiddlewaretoken:csrfmiddlewaretokenholder},function(data){
            if(data.indexOf("Session has ended successfully")>=0){
                $("body").append("<div id='signinbackgrounddiv'></div><div id='signindiv'><span id='signoutthankyouspan' class='acceptorrejectspan textalignlastright'><span class='firstblueletter'>Y</span>ou are now signed out of IvyOasisNYC!<br /><br />Please sign in again soon to stay up to date with our newest events!</span><br /><span id='logoutcontinue' class='signinbuttons cursorpointer'>Sign out</span></div><span id='closelogoutdiv' class='cursorpointer'>x</span>");
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $("#signindiv").css({"left":"5%","top":"10%","width":"90%"});
                    $("#closelogoutdiv").css({"left":"90%","top":"17%"});
                }
                $("#closelogoutdiv,#logoutcontinue").on("click", function () {
                     window.location.reload();
                });
            }
            else if(data.indexOf("Session has not ended successfully")>=0){
                window.alert(data);
            }
        });
    });
}

function linkToFeatureEvent(){
    if(window.location.href.indexOf("ivyoasisnyc.com/#featureevent")>=0){
        window.scrollTo(0,($("#upcomingeventdiv").offset().top-(parseFloat($("#headerdiv").css("height"))+40)))
    }
}

function promoteFeatureEvent(){
    if(window.location.href!="http://felicebaker.webfactional.com/#featureevent") {
        if (window.matchMedia('(orientation: portrait)').matches == true) {
            $("#upcomingeventclick").removeAttr("style");
        }
        setTimeout(function () {
            if (window.matchMedia('(orientation: portrait)').matches == false) {
                $("#upcomingeventclick").css({"border-left": "6px #CCCCCC solid", "border-right": "6px #CCCCCC solid", "color": "#000000"});
                $("#upcomingeventclick").animate({"left": "60%", "font-size": "100%", "padding-left": "1%", "padding-right": "1%"}, 1000, function () {
                    $("#upcomingeventclick").animate({"left": "66%", "font-size": "80%", "padding-left": "0%", "padding-right": "0%", "border-left-width": "0px"}, function () {
                        $("#upcomingeventclick").css({"border-left": "0px #CCCCCC solid", "border-right": "0px #CCCCCC solid", "color": "#FFFFFF"});
                        promotefeatureeventtimer = 20000;
                        promoteFeatureEvent();
                    });
                });
            }
            else if (window.matchMedia('(orientation: portrait)').matches == true) {
                $("#upcomingeventclick").removeAttr("style");
                promoteFeatureEvent();
            }
        }, promotefeatureeventtimer);
    }
}

function photoDisclaimerClick(){
    $("#photodisclaimerclick").on("click",function(){
        $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease be advised that photographs will be taken at Ivy Oasis NYC events. By attending any of the listed events, you consent to Ivy Oasis NYC using your image and likeness without any compensation.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
    })
}

function logoAlternativeLink(){
    $("#logo,#splashpagelogo").on("click",function(){
        window.location="http://www.ivyoasisnyc.com";
    });
}

function showFirstBlueLetter(){
    $(".firstblueletter").show();
}


function leftFixedFeatureEventsDivNoSession(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".aboutparas,.missionparas,.upcomingeventparas,.partnershipsparas,.biosparas,.contactparas,#aboutphoto2,#aboutphoto4,#missionphoto2,#missionphoto4,.partnershipsphotos,#eventarchivestableholder").css("margin-left","21%");
        $("#eventarchivestableholder").css("width","69%");
        var eventidattribute;
        var eventnumber;
        $("#leftfixedfeatureeventsdiv").css("top", "" + (parseFloat($("#headerdiv").css("height")) + 70) + "px");
        var eventsdivtop = $("#eventsdiv").offset().top;
        var leftfixedfeatureeventsdivtop = $("#leftfixedfeatureeventsdiv").offset().top;
        var leftfixedfeatureeventsdivtopandheight = (leftfixedfeatureeventsdivtop + parseFloat($("#leftfixedfeatureeventsdiv").css("height")));
        var eventsdivtopandheight = (eventsdivtop + parseFloat($("#eventsdiv").css("height")));
        var contactdivtop = $("#contactdiv").offset().top;
        if (leftfixedfeatureeventsdivtopandheight < eventsdivtop) {
            $("#leftfixedfeatureeventsdiv").show();
        }
        else if ((leftfixedfeatureeventsdivtopandheight >= eventsdivtop) && (leftfixedfeatureeventsdivtop < eventsdivtopandheight)) {
            $("#leftfixedfeatureeventsdiv").hide();
        }
        else if ((leftfixedfeatureeventsdivtop >= eventsdivtopandheight) && ((leftfixedfeatureeventsdivtopandheight < contactdivtop))) {
            $("#leftfixedfeatureeventsdiv").show();
        }
        else if (leftfixedfeatureeventsdivtopandheight >= contactdivtop){
            $("#leftfixedfeatureeventsdiv").hide();
        }
        $(".top3featureeventsdiv").each(function () {
            $(this).on("click", function () {
                eventidattribute = $(this).attr("id");
                eventnumber = eventidattribute.slice(eventidattribute.lastIndexOf("v") + 1);
                $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");

                $("#showdetailsdiv").append($("#eventscontainer" + eventnumber + "").clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                $("#showdetailsdiv").find(".eventssummaryfullstring").hide();
                $("#showdetailsdiv").find(".eventssummarypartialstring").show();

                $(".showmorespan").on("click", function () {
                    $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>P</span>lease sign in in order to view event details.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        $("#customalertbox").css({"left": "5%", "top": "10%", "width": "90%"});
                        $("#closebuttoncustomalertbox").css({"left": "90%", "top": "17%"});
                    }
                    $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click", function () {
                        $("#customalertboxbackgrounddiv,#customalertbox").remove();
                    });
                });
            })
        })
    }
}

function leftFixedFeatureEventsDivSession(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".aboutparas,.missionparas,.upcomingeventparas,.partnershipsparas,.biosparas,.contactparas,#aboutphoto2,#aboutphoto4,#missionphoto2,#missionphoto4,.partnershipsphotos,#eventarchivestableholder").css("margin-left","21%");
        $("#eventarchivestableholder").css("width","69%");
        var eventidattribute;
        var eventnumber;
        $("#leftfixedfeatureeventsdiv").css("top", "" + (parseFloat($("#headerdiv").css("height")) + 70) + "px");
        var eventsdivtop = $("#eventsdiv").offset().top;
        var leftfixedfeatureeventsdivtop = $("#leftfixedfeatureeventsdiv").offset().top;
        var leftfixedfeatureeventsdivtopandheight = (leftfixedfeatureeventsdivtop + parseFloat($("#leftfixedfeatureeventsdiv").css("height")));
        var eventsdivtopandheight = (eventsdivtop + parseFloat($("#eventsdiv").css("height")));
        var contactdivtop = $("#contactdiv").offset().top;
        if (leftfixedfeatureeventsdivtopandheight < eventsdivtop) {
            $("#leftfixedfeatureeventsdiv").show();
        }
        else if ((leftfixedfeatureeventsdivtopandheight >= eventsdivtop) && (leftfixedfeatureeventsdivtop < eventsdivtopandheight)) {
            $("#leftfixedfeatureeventsdiv").hide();
        }
        else if ((leftfixedfeatureeventsdivtop >= eventsdivtopandheight) && ((leftfixedfeatureeventsdivtopandheight < contactdivtop))) {
            $("#leftfixedfeatureeventsdiv").show();
        }
        else if (leftfixedfeatureeventsdivtopandheight >= contactdivtop){
            $("#leftfixedfeatureeventsdiv").hide();
        }
        $(".top3featureeventsdiv").each(function () {
            $(this).on("click", function () {
                eventidattribute = $(this).attr("id");
                eventnumber = eventidattribute.slice(eventidattribute.lastIndexOf("v") + 1);
                $("body").append("<div id='showdetailsbackgrounddiv'></div><div id='showdetailsdiv'></div><span id='closebuttondetailsdiv' class='cursorpointer' onclick='eventsSummaryShrink()'>x</span>");

                $("#showdetailsdiv").append($("#eventscontainer" + eventnumber + "").clone().show().css({"position": "relative", "padding-bottom": "2%"}));
                $("#showdetailsdiv").find(".eventssummaryfullstring").show();
                $("#showdetailsdiv").find(".eventssummarypartialstring").hide();


            })
        })
    }
}

function leftFixedFeatureEventsDivWhileScrollDown(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.onscroll = function () {
                var eventsdivtop = $("#eventsdiv").offset().top;
                var leftfixedfeatureeventsdivtop = $("#leftfixedfeatureeventsdiv").offset().top;
                var leftfixedfeatureeventsdivtopandheight = (leftfixedfeatureeventsdivtop + parseFloat($("#leftfixedfeatureeventsdiv").css("height")));
                var eventsdivtopandheight = (eventsdivtop + parseFloat($("#eventsdiv").css("height")));
                var contactdivtop = $("#contactdiv").offset().top;
                var splashpagedivtopandheight=(($("#splashpagediv").offset().top)+(parseFloat($("#splashpagediv").css("height"))));
                var headerdivtop = $("#headerdiv").offset().top;


                if((splashpagedivtopandheight>=headerdivtop)){
                    $("#leftfixedfeatureeventsdiv,#headerdiv").hide();
                }
                else if ((leftfixedfeatureeventsdivtopandheight < eventsdivtop)&&(splashpagedivtopandheight<headerdivtop)) {
                    $("#leftfixedfeatureeventsdiv,#headerdiv").show();
                }
                else if ((leftfixedfeatureeventsdivtopandheight >= eventsdivtop) && (leftfixedfeatureeventsdivtop < eventsdivtopandheight)) {
                    $("#leftfixedfeatureeventsdiv").hide();
                }
                else if ((leftfixedfeatureeventsdivtop >= eventsdivtopandheight) && ((leftfixedfeatureeventsdivtopandheight < contactdivtop))) {
                    $("#leftfixedfeatureeventsdiv").show();
                }
                else if (leftfixedfeatureeventsdivtopandheight >= contactdivtop) {
                    $("#leftfixedfeatureeventsdiv").hide();
                }
        }
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.onscroll = function () {
            var splashpagedivtopandheight = (($("#splashpagediv").offset().top) + (parseFloat($("#splashpagediv").css("height"))));
            var headerdivtop = $("#headerdiv").offset().top;
            var headerdivheight = parseFloat($("#headerdiv").css("height"));
            if(window.matchMedia('(orientation: landscape)').matches) {
                if (splashpagedivtopandheight >= headerdivtop) {
                    $("#headerdiv").hide();
                }
                else if (splashpagedivtopandheight < headerdivtop) {
                    $("#headerdiv").show();
                }
            }
            if(window.matchMedia('(orientation: portrait)').matches) {
                if (splashpagedivtopandheight >= (headerdivtop)) {
                    $("#headerdiv").hide();
                }
                else if (splashpagedivtopandheight < (headerdivtop)) {
                    $("#headerdiv").show();
                }
            }
        }
    }
}

function archiveOpenClick(){
    $("#numofrowsholder").load("/eventarchives/ #numofrows",function(){
    var numofeventrows=$("#numofrows").html();
    $("#archiveopenclick").on("click",function(){
                        if(numofeventrows<=10){
                            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no archives to show at this time.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
                             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                                  $("#customalertbox").css({"left": "5%", "top": "10%", "width": "90%"});
                                  $("#closebuttoncustomalertbox").css({"left": "90%", "top": "17%"});
                             }
                             $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click", function () {
                             $("#customalertboxbackgrounddiv,#customalertbox").remove();
                             });
                        }
                        else if(numofeventrows>10) {
                            $("#eventarchivesdiv").show(function(){
                            window.scrollTo(0, ($("#eventarchivesdiv").offset().top - (parseFloat($("#headerdiv").css("height")) + 40)));
                            $("#eventarchivestableholder").load("/eventarchives/ table");
                            $("#sortarchivesbycategoryclick").on("click", function () {
                                $("#sortarchivesbydateclick").css({"border": "none"});
                                $("#sortarchivesbycategoryclick").css({"border-top": "6px #99CCFF solid", "border-left": "6px #99CCFF solid", "border-right": "6px #99CCFF solid", "border-bottom": "none"});
                                $("#eventarchivestableholder").load("/eventarchivesbycategory/ table");
                            });
                            $("#sortarchivesbydateclick").on("click", function () {
                                $("#sortarchivesbycategoryclick").css({"border": "none"});
                                $("#sortarchivesbydateclick").css({"border-top": "6px #99CCFF solid", "border-left": "6px #99CCFF solid", "border-right": "6px #99CCFF solid", "border-bottom": "none"});
                                $("#eventarchivestableholder").load("/eventarchives/ table");
                            });
                            $("#closearchivesspan").on("click", function () {
                                var lasteventrowtop = ($(".eventscontainersholders:last").offset().top - (parseFloat($("#headerdiv").css("height")) + 100));
                                $("#eventarchivesdiv").slideUp();
                                window.scrollTo(0, lasteventrowtop);
                            });
                        });
                    }
    });
    });
}

function pdfFileOpen(){
    $(".pdffile").on("click",function(){
        var newwindowtoopen=$(this).parent().find("[type='hidden']").val();
        window.open(newwindowtoopen);
    })
}

function youTubeIframesResponsive(){
    $("[src*='youtube']").removeAttr("width");
    $("[src*='youtube']").removeAttr("height");
    $("[src*='youtube']").css({"max-width":"100%"});
}

function flickrImagesResponsive() {
    $("[src*='flickr']").removeAttr("width");
    $("[src*='flickr']").removeAttr("height");
    $("[src*='flickr']").unwrap();

    $(".beforeimages").each(function(){
    $(this).nextUntil(".afterimages").wrapAll("<div class='mediacoveragephotos mediacoveragephotouploads' style='margin-top:55px;'></div>");
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("[src*='flickr']").css({"margin-left": "2%", "width": "60%", "margin-top": "0px", "margin-bottom": "0px"});
    }
    else if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("[src*='flickr']").css({"margin-left": "2%", "width": "70%", "margin-top": "0px", "margin-bottom": "0px"});
    }
    $(".mediacoveragephotouploads").each(function(){
    var thismediacoveragephotouploads=$(this);
        thismediacoveragephotouploads.prepend("<span class='mediacoverageleftarrow blueletters boldfont cursorpointer'><span class='grayletters'><<</span><</span>");
        thismediacoveragephotouploads.append("<span class='mediacoveragerightarrow blueletters boldfont cursorpointer'>><span class='blackletters'>>></span></span>");
        thismediacoveragephotouploads.children().css({"display":"inline-block","vertical-align":"middle"});
        thismediacoveragephotouploads.css("text-align","center");
        thismediacoveragephotouploads.find(".mediacoverageleftarrow").css({"margin-left": "2%", "margin-top": "0px", "font-size": "120%", "z-index": "2", "position": "relative"});
        thismediacoveragephotouploads.find(".mediacoveragerightarrow").css({"margin-left": "2%", "margin-top": "0px", "font-size": "120%", "z-index": "2", "position": "relative"});
        thismediacoveragephotouploads.find("[src*='flickr']").not("[src*='flickr']:first").hide(function(){
        thismediacoveragephotouploads.find("[src*='flickr']:first").show();
        });



 if(thismediacoveragephotouploads.find("img").length>1) {
     thismediacoveragephotouploads.find(".mediacoveragerightarrow").on("click", function () {
         if (thismediacoveragephotouploads.find(".mediacoveragerightarrow").find("span").attr("class") == "blackletters") {
             if (thismediacoveragephotouploads.find("[src*='flickr']:visible").next().attr("src") != thismediacoveragephotouploads.find("[src*='flickr']").last().attr("src")) {
                 thismediacoveragephotouploads.find(".mediacoverageleftarrow").find("span").attr("class", "blackletters");
                 thismediacoveragephotouploads.find("[src*='flickr']:visible").next().show(function () {
                     $(this).prev().hide();
                     $(this).parent().next(".counter").find(".firstindex").html($(this).index());
                     $(this).parent().next(".counter").find(".lastindex").html(thismediacoveragephotouploads.find("[src*='flickr']").length);
                 });
             }
             else if (thismediacoveragephotouploads.find("[src*='flickr']:visible").next().attr("src") == thismediacoveragephotouploads.find("[src*='flickr']").last().attr("src")) {
                 thismediacoveragephotouploads.find(".mediacoverageleftarrow").find("span").attr("class", "blackletters");
                 thismediacoveragephotouploads.find("[src*='flickr']:visible").next().show(function () {
                     $(this).prev().hide();
                     $(this).parent().next(".counter").find(".firstindex").html($(this).index());
                     $(this).parent().next(".counter").find(".lastindex").html(thismediacoveragephotouploads.find("[src*='flickr']").length);
                 });
                 thismediacoveragephotouploads.find(".mediacoveragerightarrow").find("span").removeClass("blackletters").addClass("grayletters");
             }
         }
     });


     thismediacoveragephotouploads.find(".mediacoverageleftarrow").on("click", function () {
         if (thismediacoveragephotouploads.find(".mediacoverageleftarrow").find("span").attr("class") == "blackletters") {
             if (thismediacoveragephotouploads.find("[src*='flickr']:visible").prev().attr("src") != thismediacoveragephotouploads.find("[src*='flickr']").first().attr("src")) {
                 thismediacoveragephotouploads.find(".mediacoveragerightarrow").find("span").attr("class", "blackletters");
                 thismediacoveragephotouploads.find("[src*='flickr']:visible").prev().show(function () {
                     $(this).next().hide();
                     $(this).parent().next(".counter").find(".firstindex").html($(this).index());
                     $(this).parent().next(".counter").find(".lastindex").html(thismediacoveragephotouploads.find("[src*='flickr']").length);
                 });
             }
             else if (thismediacoveragephotouploads.find("[src*='flickr']:visible").prev().attr("src") == thismediacoveragephotouploads.find("[src*='flickr']").first().attr("src")) {
                 thismediacoveragephotouploads.find(".mediacoveragerightarrow").find("span").attr("class", "blackletters");
                 thismediacoveragephotouploads.find("[src*='flickr']:visible").prev().show(function () {
                     $(this).next().hide();
                     $(this).parent().next(".counter").find(".firstindex").html($(this).index());
                     $(this).parent().next(".counter").find(".lastindex").html(thismediacoveragephotouploads.find("[src*='flickr']").length);
                 });
                 thismediacoveragephotouploads.find(".mediacoverageleftarrow").find("span").removeClass("blackletters").addClass("grayletters");
             }
         }
     });
     thismediacoveragephotouploads.find("[src*='flickr']").css({"border-right":"solid #CCCCCC 6px","border-left":"solid #CCCCCC 6px"});
 }
 else if(thismediacoveragephotouploads.find("img").length==1){
     thismediacoveragephotouploads.find(".mediacoveragerightarrow,.mediacoverageleftarrow").remove();
     thismediacoveragephotouploads.find("[src*='flickr']").css({"margin-left": "0%","width": "100%", "margin-top":"0px","margin-bottom": "0px","padding":"0%"});
 }
    });
}

function mediaCoverageLoadEntries(){
    $("#mediacoverageholder").load("/mediacoverage/",function(){
        coverageEntryDisplay();
        pdfFileOpen();
        youTubeIframesResponsive();
        flickrImagesResponsive();
        $(".mediacoverageparas").css({"margin-left":"21%","max-width":"58%"});
        $(".mediacoveragephotos").css({"margin-left":"21%","max-width":"35%"});
        $(".mediacoveragephotouploads").each(function() {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if ($(this).find("[src*='flickr']").length == 1) {
                    $(this).css({"margin-left": "21%", "max-width": "30%"});
                }
                else if ($(this).find("[src*='flickr']").length > 1) {
                    $(this).css({"margin-left": "21%", "max-width": "45%"});
                    $(this).after("<p class='mediacoverageparas counter'><span class='firstindex blueletters boldfont'>1</span> of <span class='lastindex blueletters boldfont'>"+$(this).find("[src*='flickr']").length+"</span> photos</p>");
                }
            }
            else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if ($(this).find("[src*='flickr']").length == 1) {
                    $(this).css({"margin-left": "21%", "max-width": "40%"});
                }
                else if ($(this).find("[src*='flickr']").length > 1) {
                    $(this).css({"margin-left": "21%", "max-width": "55%"});
                    $(this).after("<p class='mediacoverageparas counter'><span class='firstindex blueletters boldfont'>1</span> of <span class='lastindex blueletters boldfont'>"+$(this).find("[src*='flickr']").length+"</span> photos</p>");
                }
            }
        });
        $(".counter").css({"margin-left": "21%", "max-width": "58%"});
    });
}

function coverageEntryDisplay(){
    var nextnumtoshow;
    $(".coverageentry").not("#coverageentry1").hide();
    visiblemediacoverageentries.push($("#coverageentry1").attr("id"));
    $("#showmoremediacoverageclick").on("click",function(){
        nextnumtoshow = parseInt($("#"+visiblemediacoverageentries[visiblemediacoverageentries.length-1]+"").attr("id").slice(13));
        nextnumtoshow++;
        if($("#coverageentry"+nextnumtoshow+"").index()>=0) {
            $("#coverageentry" + nextnumtoshow + "").show(function () {
                visiblemediacoverageentries.push($(this).attr("id"));
            });
        }
        else if($("#coverageentry"+nextnumtoshow+"").index()==-1){
            $("body").append("<div id='customalertboxbackgrounddiv'></div><div id='customalertbox'><span class='messagespan'><span class='firstblueletter'>T</span>here are no more media coverage entries at this time.</span><br /><span id='customalertboxcontinue' class='signinbuttons cursorpointer'> OK </span></div><span id='closebuttoncustomalertbox' class='cursorpointer'>x</span>");
              if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                 $("#customalertbox").css({"left":"5%","top":"10%","width":"90%"});
                 $("#closebuttoncustomalertbox").css({"left":"90%","top":"17%"});
              }
              $("#customalertboxcontinue,#closebuttoncustomalertbox").on("click",function(){
                 $("#customalertboxbackgrounddiv,#customalertbox").remove();
              });
        }
    });
}

function splashPageDivHeight(){
  if(window.matchMedia('(orientation: landscape)').matches) {
      var windowinnerwidth=window.innerWidth;
      var windowinnerheight=window.innerHeight;
      var splashpagelogoheight;
      var headerdivsplashheight=parseFloat($("#headerdivsplash").css("height"));
      $("#splashpagediv").css("height", "" + windowinnerheight + "px");
      $("#headerdivsplash").css({"bottom": "0px", "height": "" + (windowinnerheight * .1) + "px"});
      $("#splashveildiv").css("height", "" + (windowinnerheight * .9) + "px");
      $("#splashpagelogo").css({"bottom": "" + (windowinnerheight * .1) + "px", "left": "" + 40 + "%", "width": "" + 20 + "%"});
      splashpagelogoheight = parseFloat($("#splashpagelogo").css("height"));
      $(".splashpagephotos").css({"top": "0px", "width": "" + windowinnerwidth + "px", "left": "0px"});
      $("#splashstatement").removeAttr("style");
      $("#splashstatement").css("bottom", "" + (windowinnerheight-($("#splashpagelogo").offset().top+20)) + "px");

  }
  if(window.matchMedia('(orientation: portrait)').matches){
      var windowinnerwidth=window.innerWidth;
      var windowinnerheight=(window.innerHeight *.75);
      var splashpagelogoheight;
      var headerdivsplashheight=parseFloat($("#headerdivsplash").css("height"));
      $("#splashpagediv").css("height", "" + windowinnerheight + "px");
      $("#headerdivsplash").css({"bottom": "0px", "height": "" + (windowinnerheight * .5) + "px"});
      $("#splashveildiv").css("height", "" + (windowinnerheight * .5) + "px");
      $("#splashpagelogo").css({"bottom": "" + (windowinnerheight * .5) + "px", "left": "" + 30 + "%", "width": "" + 40 + "%"});
      splashpagelogoheight = parseFloat($("#splashpagelogo").css("height"));
      $(".splashpagephotos").css({"top": "0px", "width": "" + windowinnerwidth + "px", "left": "0px"});
      $("#splashstatement").removeAttr("style");
      $("#splashstatement").css({"font-size": "80%", "bottom": "" + (windowinnerheight-($("#splashpagelogo").offset().top+20)) + "px"});
  }
  $(window).on("resize",function(){
      if(window.matchMedia('(orientation: landscape)').matches) {
      var windowinnerwidth=window.innerWidth;
      var windowinnerheight=window.innerHeight;
      var splashpagelogoheight;
      var headerdivsplashheight=parseFloat($("#headerdivsplash").css("height"));
      $("#splashpagediv").css("height", "" + windowinnerheight + "px");
      $("#headerdivsplash").css({"bottom": "0px", "height": "" + (windowinnerheight * .1) + "px"});
      $("#splashveildiv").css("height", "" + (windowinnerheight * .9) + "px");
      $("#splashpagelogo").css({"bottom": "" + (windowinnerheight * .1) + "px", "left": "" + 40 + "%", "width": "" + 20 + "%"});
      splashpagelogoheight = parseFloat($("#splashpagelogo").css("height"));
      $(".splashpagephotos").css({"top": "0px", "width": "" + windowinnerwidth + "px", "left": "0px"});
      $("#splashstatement").removeAttr("style");
      $("#splashstatement").css("bottom", "" + (windowinnerheight-($("#splashpagelogo").offset().top+20)) + "px");
      }
      if(window.matchMedia('(orientation: portrait)').matches){
      var windowinnerwidth=window.innerWidth;
      var windowinnerheight=(window.innerHeight *.75);
      var splashpagelogoheight;
      var headerdivsplashheight=parseFloat($("#headerdivsplash").css("height"));
      $("#splashpagediv").css("height", "" + windowinnerheight + "px");
      $("#headerdivsplash").css({"bottom": "0px", "height": "" + (windowinnerheight * .5) + "px"});
      $("#splashveildiv").css("height", "" + (windowinnerheight * .5) + "px");
      $("#splashpagelogo").css({"bottom": "" + (windowinnerheight * .5) + "px", "left": "" + 30 + "%", "width": "" + 40 + "%"});
      splashpagelogoheight = parseFloat($("#splashpagelogo").css("height"));
      $(".splashpagephotos").css({"top": "0px", "width": "" + windowinnerwidth + "px", "left": "0px"});
      $("#splashstatement").removeAttr("style");
      $("#splashstatement").css({"font-size": "80%", "bottom": "" + (windowinnerheight-($("#splashpagelogo").offset().top+20)) + "px"});
      }
  });
}

function bodyShow(){
    $("body").css("visibility","visible");
    splashPageAnimate();
}

function splashPageAnimate(){
        $(".splashpagephotos").hide();
        $("#splashpagephoto1").fadeIn(3000);
        $("#splashpagephoto1").delay(8000).fadeOut(3000,function(){
            $("#splashpagephoto2").fadeIn(3000);
            $("#splashpagephoto2").delay(8000).fadeOut(3000,function(){
                $("#splashpagephoto3").fadeIn(3000);
                $("#splashpagephoto3").delay(8000).fadeOut(3000,function(){
                    splashPageAnimate();
                });
            });
        });

}
