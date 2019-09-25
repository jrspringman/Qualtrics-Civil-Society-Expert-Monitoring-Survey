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
	var placeholder1f = 'Veuillez enregistrer la source 1 dans cet espace. \nPar exemple: @[COMPTE DE TWITTER DU JOURNALISTE]';
	var placeholder2f = 'Veuillez enregistrer la source 2 dans cet espace. \nPar exemple: [NOM DU BLOG DES NOUVELLES]';
	var placeholder3f = 'Veuillez enregistrer la source 3 dans cet espace. \nPar exemple: [NOM DU FORUM]';
	var placeholder1r = 'Пожалуйста, запишите источник 1 в квадрате. \nПример: @[твиттер журналиста]';
	var placeholder2r = 'Пожалуйста, запишите источник 2 в квадрате. \nПример: [название новостного блога]';
	var placeholder3r = 'Пожалуйста, запишите источник 3 в квадрате. \nПример: [название форума]';

	// when the language selector changes
    objLangSel.change(function() {
        // if english language selected then display english image, else display the spanish image
        if (objLangSel.val()=='EN'){
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3);
        }
        if (objLangSel.val()=='ES'){
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1s);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2s);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3s);
        }
        if (objLangSel.val()=='FR'){
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1f);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2f);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3f);
        }
        if (objLangSel.val()=='RU'){
            jQuery('#' + qid + ' .InputText')[0].setAttribute('placeholder',placeholder1r);
			jQuery('#' + qid + ' .InputText')[1].setAttribute('placeholder',placeholder2r);
			jQuery('#' + qid + ' .InputText')[2].setAttribute('placeholder',placeholder3r);
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
        if (objLangSel.val()=='ES') {
        	jQuery("<input type='button' id='add' value='Más Fuentes' name='+' />").insertAfter("#"+qid+" .InputText:last");
        		var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });
        }
        if (objLangSel.val()=='FR') {
        	jQuery("<input type='button' id='add' value= 'Plus d`événements' name='+' />").insertAfter("#"+qid+" .InputText:last");
        		var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });

        }
        if (objLangSel.val()=='RU') {
        	jQuery("<input type='button' id='add' value= 'Больше источников' name='+' />").insertAfter("#"+qid+" .InputText:last");
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