Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+"  .InputText").css("width", "600px");
 	jQuery("#"+this.questionId+"  .InputText").css("height", "60px");
	//jQuery("#"+this.questionId+" td.ControlContainer").css("width", "10px");
	jQuery("#"+this.questionId+" td:not(.ControlContainer)").hide();
	
	//
	var qid = this.questionId;
	var placeholder1 = 'Please record source 1 in this box: \n Example: @[TWITTER HANDLE OF JOURNALIST]';
	var placeholder2 = 'Please record source 2 in this box: \n Example: [NAME OF NEWS BLOG]';
    var placeholder3 = 'Please record source 3 in this box: \n Example: [NAME OF MESSAGE BOARD]';
	jQuery('#' + qid + ' .InputText')[0].setAttribute('title',placeholder1);
	jQuery('#' + qid + ' .InputText')[1].setAttribute('title',placeholder2);
	jQuery('#' + qid + ' .InputText')[2].setAttribute('title',placeholder3);
	
	// Hide all elements in specified range
	for (i = 3; i <  20; i++){
	jQuery('#' + qid + ' .InputText')[i].hide()
	//jQuery("#"+ qid +" td:not(.ControlContainer)")[i].hide();
	}
	// Insert button after last .InputText
	jQuery("<input type='button' id='add' value='More Events' name='+' />").insertAfter("#"+this.questionId+" .InputText:last");
	// Add sequential click function
	var rowNum = 2;
	jQuery("#add").on('click', function(){
		rowNum++;
		jQuery("#"+ qid +" .InputText")[rowNum].show();
		//jQuery("#"+ qid +" td:not(.ControlContainer)")[rowNum].show();
    });

});