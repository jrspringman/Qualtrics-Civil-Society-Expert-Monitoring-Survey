Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+"  .InputText").css("width", "600px");
 	jQuery("#"+this.questionId+"  .InputText").css("height", "100px");
	//jQuery("#"+this.questionId+" td.LabelWrapper").css("width", "10px");
	jQuery("#"+this.questionId+" td:not(.ControlContainer)").hide();
	// language selection
	var objLangSel = jQuery("select[id='Q_lang']"); 
	
	//Fill in placeholder text
	var qid = this.questionId;
	var placeholder1 = 'Please describe actor 1 in this box. \n \nExample: Human Action Conference, civil society organization working on legal protections for migrants';
	var placeholder2 = 'Please describe actor 2 in this box. \n \nExample: [NAME], newly elected leader of the main opposition party';
	var placeholder3 = 'Please describe actor 3 in this box. \n \nExample: [NAME], celebrity that has started advocating for an important social cause ';
	var placeholder1s = 'Por favor describa al actor 1 en la siguiente caja de texto. \n \n Ejemplo: Conferencia para la Acción Humana, una organization de la sociedad civil que trabaja en la protección legal de migrantes';
	var placeholder2s = 'Por favor describa al actor 2 en la siguiente caja de texto. \n \n Ejemplo: [NOMBRE], nuevo líder electo del partido de la oposición';
	var placeholder3s = 'Por favor describa al actor 3 en la siguiente caja de texto. \n \n Ejemplo: [NOMBRE], personaje de la farándula nacional que ha empezado a abogar por una causa social importante';

	
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
	jQuery("<input type='button' id='add' value='More Actors' name='+' />").insertAfter("#"+this.questionId+" .InputText:last");
	// Add sequential click function
	var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
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