
const color_size = 4;
const color_r = 0;
const color_g = 1;
const color_b = 2;
const color_a = 3;


function image_handller(file,w_scale,h_scale)
{
	if(w_scale == undefined)
	{
		w_scale = 1;
	}

	if(h_scale == undefined)
	{
		h_scale = 1;
	}
	
	let imgData;
	let imgDataContex;
	this.width;
	this.height;
	let img_obj = new Image();
	init = () => 
	{
		let reader = new FileReader();
		reader.onload = (event) =>
		{		  
			img_obj.src = event.target.result;
			img_obj.onload = () => 
			{
				this.scale(w_scale,h_scale);
				this.on_load();
			}
			
		};

		reader.readAsDataURL(file);
	}
	
	this.scale = (w_scale,h_scale) =>
	{
		let canvas_elm = document.createElement("canvas");
		let ctx = canvas_elm.getContext("2d");
		canvas_elm.width = img_obj.naturalWidth*w_scale;
		canvas_elm.height = img_obj.naturalHeight*h_scale;
		ctx.drawImage(img_obj, 0, 0,img_obj.naturalWidth,img_obj.naturalHeight,0,0,canvas_elm.width,canvas_elm.height);
		this.width = canvas_elm.width;
		this.height = canvas_elm.height;
		imgDataContex = ctx.getImageData(0, 0, canvas_elm.width, canvas_elm.height);
		imgData = imgDataContex.data;
	}

	this.on_load = () => 
	{
		
	}

	this.to_gray = (r_weight,g_weight,b_weight) => 
	{
		if(r_weight == undefined)
			r_weight = 0.3;
		if(g_weight == undefined)
			g_weight = 0.59;
		if(b_weight == undefined)
			b_weight = 0.12;
		
		var sum = r_weight + g_weight + b_weight;
		
		for(var row = 0;row < this.height;row++)
		{
			for(var col = 0;col < this.width;col++)
			{
				var curr_pixsel = this.pixel(row,col);
				var grayValue = (r_weight/sum) * curr_pixsel.r + (g_weight/sum) * curr_pixsel.g + (b_weight/sum) * curr_pixsel.b;
				grayValue = parseInt(grayValue);
				this.pixel(row,col,{r : grayValue,g: grayValue, b : grayValue,a : curr_pixsel.a});
			}
		}
		
	}
	
	this.to_bw = (threshold,r_weight,g_weight,b_weight) =>
	{
		if(threshold == undefined)
			threshold = 170;
		this.to_gray(r_weight,g_weight,b_weight);
		
		for(var row = 0;row < this.height;row++)
		{
			for(var col = 0;col < this.width;col++)
			{
				var curr_pixsel = this.pixel(row,col);
				var value = 0;
				if(curr_pixsel.r > threshold)
					value = 255;
				this.pixel(row,col,{r : value,g: value, b : value,a : curr_pixsel.a});
			}
		}
	}
	
	this.foreach = (func) => 
	{
		for(var row = 0;row < this.height;row++)
		{
			for(var col = 0;col < this.width;col++)
			{
				let curr_pixsel = this.pixel(row,col);
				func(row,col,curr_pixsel);
			}
		}
	}

	this.stats = () => 
	{
		let greatest = 0;
		let smallest = 1000;
		let tempSum = 0
		var stat_obj = {};
		stat_obj.sum_r = 0;
		stat_obj.ultimateAvg = 0
		stat_obj.sum_g = 0;
		stat_obj.sum_b = 0;
		//let grayScale = [];
		this.foreach((row,col,pixel) =>
		{
			tempSum = 0;
			tempSum += pixel.r;
			tempSum += pixel.g;
			tempSum += pixel.b;
			tempSum /= 3;
			stat_obj.sum_r += pixel.r;
			stat_obj.sum_g += pixel.g;
			stat_obj.sum_b += pixel.b;
			//grayScale.push(pixel.r);
			if (tempSum > greatest) {
				greatest = tempSum;
			}
			if (tempSum < smallest) {
				smallest = tempSum;
			}
		});
		
		stat_obj.ultimateAvg = (greatest + smallest) / 2;
		//grayScale.sort();

		//stat_obj.center = grayScale[grayScale.length/2];

		stat_obj.avg_r = stat_obj.sum_r/(this.width * this.height)
		stat_obj.avg_g = stat_obj.sum_g/(this.width * this.height)
		stat_obj.avg_b = stat_obj.sum_b/(this.width * this.height)

		return stat_obj;

	}

	this.to_canvas = () =>
	{
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.putImageData(imgDataContex,0,0);
		return canvas;
	}
	
	this.pixel = (row_num,col_num,value) => 
	{
		var ind = (this.width*row_num + col_num)*color_size;
		if(value == undefined)
			return {r : imgData[ind + color_r],g : imgData[ind + color_g],b : imgData[ind + color_b],a : imgData[ind + color_a]}
		else
		{
			imgData[ind + color_r] = value.r;
			imgData[ind + color_g] = value.g;
			imgData[ind + color_b] = value.b;
			imgData[ind + color_a] = value.a;
		}
	}
	
	init();
}




/*
function onFileSelected()
{
	var file = document.getElementById("aaa").files[0];
	let handller = new image_handller(file);
	handller.on_load = function()
	{
		handller.to_gray();
		document.getElementById("test").src = handller.to_canvas().toDataURL();

	}
}




*/















