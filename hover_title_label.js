Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+"  .InputText").css("width", "500px");
 	jQuery("#"+this.questionId+"  .InputText").css("height", "80px");
	jQuery("#"+this.questionId+" td.ControlContainer").css("width", "0.5px");
	//jQuery("#"+this.questionId+" td:not(.ControlContainer)").hide();
	
	//Set labels with example attached to  control container
	var qid = this.questionId;
	var placeholder1 = 'Please describe actor 1 in this box: \n \nExample: Human Action Conference, civil society organization working on legal protections for migrants ';
	var placeholder2 = 'Please describe actor 2 in this box: \n \nExample: [NAME], newly elected leader of the main opposition party';
	var placeholder3 = 'Please describe actor 3 in this box: \n \nExample: [NAME], celebrity that has started advocating for an important social cause ';
	jQuery('#' + qid +" td:not(.ControlContainer")[0].setAttribute('title',placeholder1);
	jQuery('#' + qid +" td:not(.ControlContainer")[1].setAttribute('title',placeholder2);
	jQuery('#' + qid +" td:not(.ControlContainer")[2].setAttribute('title',placeholder3);
	
	
	// Hide all elements in specified range
	for (i = 3; i <  20; i++){
	jQuery('#' + qid + ' .InputText')[i].hide()
	jQuery("#"+ qid +" td:not(.ControlContainer)")[i].hide();
	}
	// Insert button after last .InputText
	jQuery("<input type='button' id='add' value='More Events' name='+' />").insertAfter("#"+this.questionId+" .InputText:last");
	// Add sequential click function
	var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });

});
