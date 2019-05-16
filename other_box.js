Qualtrics.SurveyEngine.addOnReady(function()
{
	// Append text entry box to list of answers
	var QID = this.questionId;
	var QIDOtherLabel = jQuery("#" + QID).find(".TextEntryBox").siblings().attr("id");
	jQuery("[id='" +QIDOtherLabel+"']").append(jQuery("#" + QID).find(".TextEntryBox"));
	jQuery("[id='" +QIDOtherLabel+"']").css("padding-top","30px");
	jQuery("[id='" +QIDOtherLabel+"']").css("padding-bottom","30px");
	jQuery("#" + QID).find(".TextEntryBox").css("float","none");
	// Set size of text entry box
	jQuery("#"+this.questionId+"  .TextEntryBox").css("width", "300px");
 	jQuery("#"+this.questionId+"  .TextEntryBox").css("height", "40px");

});