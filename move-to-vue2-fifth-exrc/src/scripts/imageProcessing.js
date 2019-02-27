
const color_size = 4;
const color_r = 0;
const color_g = 1;
const color_b = 2;
const color_a = 3;


function image_handller(file)
{
	
	let imgData;
	let imgDataContex;
	this.width;
	this.height;
	init = () => 
	{
		let reader = new FileReader();
		let canvas_elm = document.createElement("canvas");
		let ctx = canvas_elm.getContext("2d");
		let img_obj = new Image();
		  
		reader.onload = (event) =>
		{		  
			img_obj.src = event.target.result;
			img_obj.onload = () => 
			{
				ctx.drawImage(img_obj, 0, 0);
				this.width = img_obj.naturalWidth;
				this.height = img_obj.naturalHeight;
				imgDataContex = ctx.getImageData(0, 0, img_obj.naturalWidth, img_obj.naturalHeight);
				imgData = imgDataContex.data;
				this.on_load();
			}
			
		};

		reader.readAsDataURL(file);
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
	
	this.to_canvas = () =>
	{
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		ctx.putImageData(imgDataContex,0,0);
		console.log(imgDataContex);
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
















