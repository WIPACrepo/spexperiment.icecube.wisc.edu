
(function($) {
  /**
   * @todo
   */
  Drupal.behaviors.octobanGalleryPage = {
    attach: function (context) {
      $('.block-latest-portfolio .views-field-field-portfolio-images, .view-list-portfolio .views-field-field-portfolio-images, .view-list-articles .views-field-field-image, .list-article-printerest .views-field-field-image, .view-list-members .views-field-field-member-image').hover(
        function () {
	      $('.field-more-link, .extra-content', this).show();
        },
        function () {
	      $('.field-more-link, .extra-content', this).hide();
        }
      );
    }
  };

  Drupal.behaviors.octobanHideLangText = {
    attach: function () {
        $('.language-switcher-locale-url a').each(function(){
            $(this).text($(this).attr('xml:lang'));
        });
        $('.language-switcher-locale-url li').each(function(){
            if ($(this).attr('class').indexOf('en') == 0 ){
                $(this).find('a').attr('href','/en');
            }else if ($(this).attr('class').indexOf('es') == 0 ) {
                $(this).find('a').attr('href','/es');                
            }else if ($(this).attr('class').indexOf('fr') == 0 ) {
                $(this).find('a').attr('href','/fr');                
            }else if ($(this).attr('class').indexOf('nl') == 0 ) {
                $(this).find('a').attr('href','/nl');                
            }
        });
        $('.language-switcher-locale-url li').hover(
            function () {
                $('a',this).css('color','#ae351d');
            },
            function () {
                if ($(this).attr('class').indexOf('active') < 0 ){
                    $('a',this).css('color','#2d5c88');
                }
            }
        );
    }
  };
  
  Drupal.behaviors.octobanAccordion = {
    attach: function () {
	   $('.block-accordion').accordion({
          heightStyle: 'content',
		   autoHeight: false
       });
    }
  };
  
  Drupal.behaviors.octobanTabs = {
    attach: function () {
	   $('.block-tabs').tabs();
    }
  };
  
  Drupal.behaviors.octobanToggle = {
    attach: function () {
        $('div.toggle_area').find('div.toggle_content').hide().end();
	  
	    $('div.toggle_label').click(function() {
          $(this).next().slideToggle();
	  	  if($(this).hasClass('active')) {
	        $(this).removeClass('active');
		  } else {
	        $(this).addClass('active');
		  }
        });
    }
  };
  
  Drupal.behaviors.octobanKnob = {
    attach: function () {
	  $('.input-knob-red').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#ae351d'
      });
      $('.input-knob-blue').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#2d5c88'
      });
      $('.input-knob-green').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#719430'
      });
      $('.input-knob-orange').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#c3512f'
      });
    }
  };
  
  Drupal.behaviors.octobanEqualHeights = {
    attach: function (context) {
      $('body', context).once('views-row-equalheights', function () {
        $(window).bind('load', function () {
          $($('.block-latest-portfolio .view-content').get().reverse()).each(function () {
            var elements = $(this).children('.views-row').css('height', '');
            
            if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
              var tallest = 0;

              elements.each(function () {    
                if ($(this).height() > tallest) {
                  tallest = $(this).height();
                }
              }).each(function() {
                if ($(this).height() < tallest) {
                  $(this).css('height', tallest);
                }
              });
            }
          });
        });
      });
    }
  };
  
  Drupal.behaviors.octobanThemeColors = {
    attach: function (context) {
      $('body', context).once('block-theme-colors-showhide', function () {													   
        jQuery('.block-theme-colors .close').click(function(e){
		  e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').hide();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .open').show();
		});
		jQuery('.block-theme-colors .open').click(function(e){
          e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').show();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .close').show();
		});  
      });
    }
  };
 
  Drupal.behaviors.showBasicSearchIcons = {
    attach: function (context) {

      if (context.URL.indexOf('/resources/') > -1 || context.URL.indexOf('/recursos/') > -1) {
        
        //make my icon to audience mapping
        var iconToAudienceEn = {"University":"University",
            "Early Childhood":"Early_childhood",
            "Elementary School":"Elementary",
            "Family":"Families",
            "Adults":"Adults",
            "High School":"High-School",
            "K-12":"k-12",
            "Middle School":"Middle_school",
            "Teachers":"Teachers",
        }
        var iconToAudienceSp = {"Universidad":"University",
            "Edad Preescolar":"Edad_Preescolar",
            "Escuela Primaria":"Elementary",
            "Familias":"Families",
            "Adultos":"Adults",
            "Escuela Preparatoria":"Preparatoria",
            "K-12":"k-12",
            "Escuela Intermedia":"Intermedia",
            "Maestros":"Maestros",
        }
        var iconToFormatOnlineEn = {"Article":"Article",
            "Blog":"blog",
            "Game":"game",
            "Lesson Plan":"lesson_plan",
            "Podcast":"podcast",
            "Video":"video",
            "Website":"website",
        }
        var iconToFormatOnlineSp = {"Artículo":"Article",
            "Blog":"blog",
            "Juego":"game",
            "Programación de aula":"lesson_plan",
            "Podcast":"podcast",
            "Video":"video",
            "Página Web":"website",
        }
        var iconToFormatOppEn = {"After School":"After_school",
            "Education":"Education",
            "Internship":"Internship",
            "Public Event":"Public_event",
            "Research":"Research-30",
            "Summer Program":"Summer_program",
            "Workshop":"workshop",
        }
        var iconToFormatOppSp = {"Acto Público":"Acto_publico",
            "Después de la escuela":"Despues_escuela",
            "Educación":"Education",
            "Investigación":"Investigacion",
            "Pasantía":"Pasantia",
            "Programa de Verano": "Programa_verano",
            "Workshop":"workshop",
        }
    
        //function to return the class name of the icon
        function getIcon(iconArr,myType){
            for (var x in iconArr){
                if (myType==x){return iconArr[x];}
           }
        }
        //put the icons next to the check boxes
        var audList = $('.form-item-field-audience-tid').find('.bef-checkboxes div');
        audList.each(function(){
            audType = $(this).find('label').text().trim();
            //determine which icon array to use (spanish vs english)
            if (context.URL.indexOf('/es/') > 0){
                var iconArr = iconToAudienceSp;
            }else{
                var iconArr = iconToAudienceEn;
            }
            var iconFileName = getIcon(iconArr,audType);
            if (iconFileName != undefined){
                var sel = '<img class="resource-icon-checkbox" src="/sites/all/themes/octoban/images/resource-icons/'.concat(iconFileName).concat('.svg"></img>');
                $( sel ).prependTo( $(this).find('label') );
            }
        })

        //put icons next to format
        var formatList = $('.form-item-field-format-for-online-tid').find('.bef-checkboxes div');
        formatList.each(function(){
            formatType = $(this).find('label').text().trim();
            //determine which icon array to use (spanish vs english)
            if (context.URL.indexOf('/es/') > 0){
                var iconArr = iconToFormatOnlineSp;
            }else{
                var iconArr = iconToFormatOnlineEn;
            }
            var iconFileName = getIcon(iconArr,formatType);
            if (iconFileName != undefined){
                var sel = '<img class="resource-icon-checkbox" src="/sites/all/themes/octoban/images/resource-icons/'.concat(iconFileName).concat('.svg"></img>');
                $( sel ).prependTo( $(this).find('label') );
            }
        })

        //put icons next to format for opportunities
        var formatList = $('.form-item-field-format-for-opportunities-tid').find('.bef-checkboxes div');
        formatList.each(function(){
            formatType = $(this).find('label').text().trim();
            //determine which icon array to use (spanish vs english)
            if (context.URL.indexOf('/es/') > 0){
                var iconArr = iconToFormatOppSp;
            }else{
                var iconArr = iconToFormatOppEn;
            }
            var iconFileName = getIcon(iconArr,formatType);
            if (iconFileName != undefined){
                var sel = '<img class="resource-icon-checkbox" src="/sites/all/themes/octoban/images/resource-icons/'.concat(iconFileName).concat('.svg"></img>');
                $( sel ).prependTo( $(this).find('label') );
            }
        })
        
        //iterate through results and assign icons
        var viewResults = $('.view-content div.views-row');
        viewResults.each(function(){
          //make images as links
          var resourceLink = $(this).find('.views-field-field-link a').clone();
          resourceLink.text('');
          $(this).find('.field-image-resource').prepend(resourceLink);
          $(this).find('.field-image-resource').find('a').html($(this).find('img'));
          //insert 
          var termArr = $(this).find('.term-hide').text();
          var termArr2 = $.parseJSON(termArr)
          for (var i = 0; i < termArr2.length; i++){
              var cook = $.cookie("var");
              var cookInt = parseInt(cook);
              var termInt = parseInt(termArr2[i]);
              if (cookInt==termInt){
                  var cookInd = i;
              }
          }
          //check to see if we're formating by a term to set bolding for cookie.
          //set up click events for tag list
          if (context.URL.indexOf('field_term_tid') > 0){
              $(this).find('.the-term').find('.item-list').find('ul').find('li').eq(cookInd).attr('style','font-weight:bold');
          }

          var formatType = $(this).find('.views-field-field-format').text().split(',')
          var audienceType = $(this).find('.views-field-field-audience').text().split(',')
          var audType = " ";
          var medType = " ";
          for (var i = 0; i < audienceType.length; i++){
            audType = audienceType[i].trim();
            if (context.URL.indexOf('/es/') > 0){
                var iconArr = iconToAudienceSp;
            }else{
                var iconArr = iconToAudienceEn;
            }
            var iconFileName = getIcon(iconArr,audType);
            if (iconFileName != undefined){
                var sel = '<img class="resource-icon" src="/sites/all/themes/octoban/images/resource-icons/'.concat(iconFileName).concat('.svg"></img>');
                $( sel ).appendTo( $(this).find('.views-field-title') );
            }
          }

          for (var i = 0; i < formatType.length; i++){
            fmtType = formatType[i].trim();
            if (context.URL.indexOf('/es/') > 0){
                if (context.URL.indexOf('/en-linea') > 0){
                    var iconArr = iconToFormatOnlineSp;
                }else{
                    var iconArr = iconToFormatOppSp;
                }
            }else{
                if (context.URL.indexOf('/online') > 0){
                    var iconArr = iconToFormatOnlineEn;
                }else{
                    var iconArr = iconToFormatOppEn;
                }
            }
            var iconFileName = getIcon(iconArr,fmtType);
            if (iconFileName != undefined){
                var sel = '<img class="resource-icon" src="/sites/all/themes/octoban/images/resource-icons/'.concat(iconFileName).concat('.svg"></img>');
                $( sel ).appendTo( $(this).find('.views-field-title') );
            }
          }

        //prepend tag icon 
        $(this).find('.the-term').find('.item-list').prepend('<i class="icon-tag"></i>');

        var eachList = $(this).find('.the-term').find('.item-list').find('ul').find('li');
        if (eachList.length < 1) {
          eachList = $(this).find('.the-term');
        }
        
        //logic for setting correct url to filter by tag
        eachList.each(function(){

        $(this).click(function (i) {
          String.prototype.replaceBetween = function(start, end, what) {
            return this.substring(0, start) + what + this.substring(end);
          };
          var ind = eachList.index(this);
          var term = $.parseJSON(termArr);
          var term = term[ind];
          //loop through list to match term 
          currURL = context.URL;
          if (currURL.charAt(currURL.length-1) == '?'){
            currURL =currURL.replaceBetween(currURL.length-1,currURL.length,'')
          }
            if (currURL.indexOf('field') > 0){
              paramT = '&'
              }else{
                paramT = '?'
              }

            var startTerm = 'field_term_tid%5B%5D=';
            //check to see that the term is not already in the URL before going to it..
            //TODO this check could be improved to look for more than 1 field_term_id
            //or go to it and just refresh...
            if (currURL.indexOf(startTerm) < 1 ) {
                //edit the path.
                var fullPath = currURL.concat(paramT.concat(startTerm.concat(term)));
            }else{
                var newURL = currURL.replaceBetween(currURL.indexOf(startTerm)+startTerm.length,currURL.indexOf(startTerm)+startTerm.length+2,term);
                currURL = newURL;
                var fullPath = currURL;
            }

            //save the index before refresh
            $.cookie("var",term);
            
            window.location.href = fullPath;

            })
          })


        });

    }

    }
  }; 
  
})(jQuery);

