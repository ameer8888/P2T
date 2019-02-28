


/*
	
	options
	{
		langs : [], -> defult [eng]
		merge : true/false -> defult false 
		pick_best : true/false -> defult false
		threshold : 0 - 100 -> defult 0
		filter : true,false -> defult false
	}
	
	if(merge == true)
		pick_best not relevent
	
	threshold only relevnt for merge or if filter = true
	
*/
function load_tesseract(img,options,cb_s)
{
	if(options == undefined)
		options = {};
	
	if(options.langs == undefined)
		options.langs = ["eng"];
	
	if(options.merge == undefined)
		options.merge = false;
	
	if(options.pick_best == undefined)
		options.pick_best = false;
	
	if(options.threshold == undefined)
		options.threshold = 0;
	
	if(options.filter == undefined)
		options.filter = false;
	
	let data = {};
	var jc = 1;
	var jc_end = function()
	{
		jc--;
		if(jc == 0)
		{
			var keys = Object.keys(data);
			let text = data[keys[0]].text;
			if(options.merge)
			{
				text = merge_lines(data,options.threshold);
			}
			else if(options.pick_best)
			{
				var best = pick_best(data);
				text = data[best].text;
				if(options.filter)
					text = filter_lines(data[best].lines,options.threshold);
			}
			else if(options.filter && keys.length == 1)
				text = filter_lines(data[keys[0]].lines,options.threshold)
			cb_s(text,data);
		}
	}

	for(let lang in options.langs)
	{
		jc++;
		Tesseract.recognize(img,{lang : options.langs[lang]}).then(function(result)
		{
			data[options.langs[lang]] = result;
			jc_end();
		});
	}
	jc_end();
}

//confidence
function merge_lines(data,threshold)
{
	var text = "";
	var curr_line = 0;
	while(true)
	{
		let best_lang = null;
		for(let lang in data)
		{
			if(best_lang == null || data[best_lang].lines[curr_line].confidence < data[lang].lines[curr_line].confidence)
				best_lang = lang;
		}
		
		
		if(threshold < data[best_lang].lines[curr_line].confidence)
			text += data[best_lang].lines[curr_line].text + "\n";
		curr_line++;
		if(curr_line == data[best_lang].lines.length)
			break;
	}
	
	return text;
}

function pick_best(data)
{
	let best_lang = null;
	for(let lang in data)
	{
		if(best_lang == null || data[best_lang].confidence < data[lang].confidence)
			best_lang = lang;
	}
	
	return best_lang;
}

function filter_lines(lines,threshold)
{
	var text = "";
	for(var x in lines)
	{
		if(lines[x].confidence > threshold)
			text += lines[x].text + "\n";
	}
	
	return text;
}
