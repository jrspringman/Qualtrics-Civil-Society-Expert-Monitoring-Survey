Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	// Modify Language Selector 
	jQuery("div.LanguageSelectorContainer").css('width', '20%');
	jQuery("div.LanguageSelectorContainer").prepend("<div>SELECT LANGUAGE</div>");
	jQuery("select").css('background-color', '#f7f12d');
});