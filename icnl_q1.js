Qualtrics.SurveyEngine.addOnload(function()
{
	// Set constant height/width for form fields
	jQuery("#"+this.questionId+" .Essay.InputText").css("height", "30px")
 	jQuery("#"+this.questionId+" .Essay.InputText").css("width", "400px");
	jQuery("#"+this.questionId+" .Short.InputText").css("height", "30px")
 	jQuery("#"+this.questionId+" .Short.InputText").css("width", "50px");
	jQuery("#"+this.questionId+" .Long.InputText").css("height", "30px")
 	jQuery("#"+this.questionId+" .Long.InputText").css("width", "100px");
	
	// Add default text to Input Text fields (used to show examples)
	var qid = this.questionId;
	var placeholder1 = "Initiative 1";
	var placeholder2 = "Initiative 2";
	var placeholder3 = "Initiative 3";
	jQuery("#" + qid + " .InputText")[1].setAttribute("placeholder",placeholder1);
	jQuery("#" + qid + " .InputText")[5].setAttribute("placeholder",placeholder2);
	jQuery("#" + qid + " .InputText")[9].setAttribute("placeholder",placeholder3);

	// Hide labels column
	jQuery("#"+this.questionId+" .c1").hide();
	// Hide labels vertical bar
	jQuery("#"+this.questionId+" .c2").hide();
	// Hide secondary column headings
	jQuery("#"+this.questionId+" .SubQuestionText").hide()
	// Hide rows after 3
	jQuery("#"+this.questionId+" tr.Choice:not(:lt(3))").hide();
	// Insert button after the question table
	jQuery("<input type='button' id='add' value='More Events' name='+' />").
	insertAfter("#"+this.questionId+" table");
	// Increment through values to reveal one Choice row at a time
	var rowNum = 2;
	jQuery("#add").on("click", function(){
		rowNum++;
	jQuery("#"+ qid +" .Choice")[rowNum].show();	
	
    });
	
});