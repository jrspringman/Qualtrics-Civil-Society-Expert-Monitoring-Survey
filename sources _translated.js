Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+"  .InputText").css("width", "600px");
 	jQuery("#"+this.questionId+"  .InputText").css("height", "60px");
	//jQuery("#"+this.questionId+" td.ControlContainer").css("width", "10px");
	jQuery("#"+this.questionId+" td:not(.ControlContainer)").hide();
	// language selection
	var objLangSel = jQuery("select[id='Q_lang']"); 

	
	//Fill in placeholder text
	var qid = this.questionId;
    var placeholder1 = 'Please record source 1 in this box. \nExample: @[TWITTER HANDLE OF JOURNALIST]';
    var placeholder2 = 'Please record source 2 in this box. \nExample: [NAME OF NEWS BLOG] ';
    var placeholder3 = 'Please record source 3 in this box. \nExample: [NAME OF MESSAGE BOARD]';
    var placeholder1s = 'Por favor describa la fuente 1 en la siguiente caja de texto. \nEjemplo: @[TWITTER HANDLE DE PERIODISTA]';
    var placeholder2s = 'Por favor describa la fuente 2 en la siguiente caja de texto. \nEjemplo: [NOMBRE DE BLOG DE NOTICIAS]';
    var placeholder3s = 'Por favor describa la fuente 3 en la siguiente caja de texto. \nExample: [NOMBRE DEL FORO]';

	// when the language selector changes
    objLangSel.change(function() {
        // if english language selected then display english image, else display the spanish image
        if (objLangSel.val()=='EN'){
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3);
        }
        else {
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1s);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2s);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3s);
        }

	// Hide placeholder text on mouseon; reveal on mouseoff
	jQuery("input,textarea").each(
            function(){
                jQuery(this).data('holder',jQuery(this).attr('placeholder'));
                jQuery(this).mouseover(function(){
                    jQuery(this).attr('placeholder','');
                });
                jQuery(this).mouseout(function(){
                    jQuery(this).attr('placeholder',jQuery(this).data('holder'));
                });
                
        });
   });
	
	// Hide all elements in specified range
	for (i = 3; i <  20; i++){
	jQuery('#' + qid + ' .InputText')[i].hide()
	//jQuery("#"+ qid +" td:not(.ControlContainer)")[i].hide();
	}
	// Insert button after last .InputText
    objLangSel.change(function() {
        // if english language selected then display english image, else display the spanish image
        if (objLangSel.val()=='EN'){
        	jQuery("<input type='button' id='add' value='More Sources' name='+' />").insertAfter("#"+qid+" .InputText:last");
        		var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });

        }
        else {
        	jQuery("<input type='button' id='add' value='Más Fuentes' name='+' />").insertAfter("#"+qid+" .InputText:last");
        		var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });

        }
    });

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});