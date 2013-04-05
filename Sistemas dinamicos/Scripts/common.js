$(function() {
	$(".nav").each(function(){
		var self = $(this);
		var val;
		self.wrap("<div style='text-align: center; display: none;' />").parent();
		if (val = self.attr("help")) self.prepend("<div class='tooltip'>" + val + "</div>");
		if (val = self.attr("prev")) self.append("<a class='prev' href=" + val + " title='Clic para regresar' />");
		if (val = self.attr("current")) self.append("<span>" + self.attr("current") + " de " +  self.attr("total") + "</span>");
		if (val = self.attr("next")) self.append("<a class='next' href=" + val + " title='Clic para ir avanzar' />");
		self.parent().before("<div class='hr'></div>").show("fold", {}, 1000, function() { });
	});
});