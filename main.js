function setImgUrl(id, url) {
	const image = document.getElementById(id);
	image.src = url;
}
setImgUrl ('image-1' , "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1")
setImgUrl ('image-2' , 'https://inteng-storage.s3.amazonaws.com/img/iea/9lwjAVnM6E/sizes/ocde_resize_md.jpg')
setImgUrl ('image-3' , 'https://thumbs.dreamstime.com/z/writing-programming-code-laptop-abstract-computer-script-125850554.jpg')

function lineThru() {
	document.getElementById("arguments").firstElementChild.style.textDecoration = "line-through";
}

lineThru();

function removeNode() {
	document.getElementById("arguments").removeChild(document.getElementById("arguments").lastElementChild);
}

let li = document.createElement('li'); {
	li.appendChild(element);
	document.getElementById("arguments").appendChild(li);
}

const newImg = document.createElement('img');
newImg.src = "https://geekflare.com/wp-content/uploads/2019/11/code-review-tools-1200x385.jpg";
addToArgList(newImg);
newImg = document.getElementById("img").height = "30px";

function name(params) {
    
}






