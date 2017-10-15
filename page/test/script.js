var questionstext=[
	['Текст первого вопроса',
	['первый вариант ответа0',"второй вариант ответа0","третий вариант ответа0","четвертый вариант ответа0"]],
	['Текст второго вопроса',
	['первый вариант ответа1',"второй вариант ответа1","третий вариант ответа1","четвертый вариант ответа1"]],
	['Текст третьего вопроса',
	['первый вариант ответа2',"второй вариант ответа2","третий вариант ответа2","четвертый вариант ответа2"]]
	];
	var qcount=questionstext.length;
	for(var i=0;i<qcount;i++){
		var noft=i+1;
		$(".ctc-c-content").append("<div data-count='"+noft+"' class='panel panel-default'></div>");
			$(".panel:nth-of-type("+noft+")").append("<div class='panel-heading'><h3>Вопрос №"+noft+"</h3></div>");
			$(".panel:nth-of-type("+noft+")").append("<div class='panel-body'><h4>"+questionstext[i][0]+"</h4><hr/><form class='form-group form-n-"+noft+"' onsubmit='return false;'></form></div>");
				var ansl=questionstext[i][1].length;
				for(var j=0;j<ansl;j++){
					$(".form-n-"+noft+"").append("<input type='radio' name='radioName' value='"+j+"'/>"+questionstext[i][1][j]+"<br/>");
				}
			$(".panel:nth-of-type("+noft+")").append("<div class='panel-footer'><button type='button' onclick='q.next("+noft+");' class='btn btn-success'>Далее<span class='glyphicon glyphicon-menu-right'></span></button></div>");

	}