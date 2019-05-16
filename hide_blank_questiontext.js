Qualtrics.SurveyEngine.addOnload(function()
{
	// Hide extra space created by leaving the question parent text blank
	jQuery("#"+this.questionId+" .QuestionText:first").parent().hide();

});