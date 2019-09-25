Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
    jQuery("#"+this.questionId+"  .InputText").css("width", "600px");
    jQuery("#"+this.questionId+"  .InputText").css("height", "125px");
	//jQuery("#"+this.questionId+" td.ControlContainer").css("width", "10px");
	jQuery("#"+this.questionId+" td:not(.ControlContainer)").hide();
	// language selection
	var objLangSel = jQuery("select[id='Q_lang']"); 

	
	//Fill in placeholder text
	var qid = this.questionId;
	var placeholder1 = 'Please describe event 1 in this box. \n \nExample: In July, several hundred people in [name of city or location] attended a rally organized by civil society groups to advocate for changes to government environmental policies.';
    var placeholder2 = 'Please describe event 2 in this box. \n \nExample: In August, a newspaper called [name of newspaper] was shut-down by the government after being accused of failing to pay taxes.';
    var placeholder3 = 'Please describe event 3 in this box. \n \nExample: The government has enacted a new law that makes it easier for NGOs and civil society groups to receive foreign funding.';
    var placeholder1s = 'Por favor describa el evento 1 en la siguiente caja de texto. \n \nEjemplo: En Julio, unos cientos de personas en [nombre del luegar] participaron en una manifestación pacífica organizada por grupos de la sociedad civil para abogar por cambios en las políticas medioambientales del gobierno.';
    var placeholder2s = 'Por favor describa el evento 2 en la siguiente caja de texto. \n \nEjemplo: En agosto, un periódico llamado [nombre del periódico] fue cerrado por el gobierno tras ser acusado de no pagar impuestos.';
    var placeholder3s = 'Por favor describa el evento 3 en la siguiente caja de texto. \n \nEjemplo: El gobierno ha aprovado una ley que hace que las ONGs y los grupos de la sociedad civil reciban resursos internacionales con mayor facilidad.';
    var placeholder1f = "Veuillez décrire l'événement 1 dans cet espace. \n \nPar exemple: En juillet, plusieurs centaines de personnes à [VILLE] ont assisté à un rassemblement organisé par des groupes de la société civile pour préconiser des changements dans les politiques environnementales du gouvernement.";
    var placeholder2f = "Veuillez décrire l'événement 2 dans cet espace. \n \nPar exemple: En août, un journal appelé [JOURNAL] a été fermé par le gouvernement après avoir été accusé d'avoir omis de payer des impôts.";
    var placeholder3f = "Veuillez décrire l'événement 3 dans cet espace. \n \nPar exemple: Le gouvernement a promulgué une nouvelle loi qui permet aux ONGs et aux groupes de la société civile de recevoir plus facilement des fonds étrangers.";
    var placeholder1r = "Пожалуйста, опишите событие 1 в квадрате. \n \nПример: В июле несколько сотен людей в [название города или места] приняли участие в массовой акции, организованной представителями гражданского сообщества, за изменение государственной политики в отношении окружающей среды.";
    var placeholder2r = "Пожалуйста, опишите событие 2 в квадрате. \n \nПример: В августе газета [название газеты] была закрыта государственными органами вследствие обвинения в неуплате налогов.";
    var placeholder3r = "Пожалуйста, опишите событие 3 в квадрате. \n \nПример: Правительство приняло новый закон, упрощающий получение иностранного финансирования для НКО и гражданского общества";

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
        	jQuery("<input type='button' id='add' value='More Events' name='+' />").insertAfter("#"+qid+" .InputText:last");
        		var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });
        }
        if (objLangSel.val()=='ES') {
        	jQuery("<input type='button' id='add' value='Más Eventos' name='+' />").insertAfter("#"+qid+" .InputText:last");
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
        	jQuery("<input type='button' id='add' value= 'Больше событий' name='+' />").insertAfter("#"+qid+" .InputText:last");
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