document.addEventListener('DOMContentLoaded',function(){
	window.cB = new ContentBuilder();
	cB.set(cB.content);
	content = null;
});

function ContentBuilder(){
	var api = {
		set:set,
		content:content || {}
	};
	return api;
	function set(setter){
		for(key in setter){
			cB.content[key] = setter[key];
			setVal(key,setter[key]);
		};
	};
	function setVal(key,val,exclude){
		var selector = "[isbind="+key+"]";
		var elements = document.querySelectorAll(selector);
		if(elements.length){
			for(i=0;i<elements.length;i++){
				var el = elements[i];
				if(el.nodeName==='INPUT'||el.nodeName==='TEXTAREA'){
					el.value = val;
					el.oninput = update;
				}else{
					el.innerHTML = val;
				}
			};
		};
	};
	function update(e){
		var updater = {},
		pos = e.target.selectionStart;
		updater[e.target.attributes.isbind.value] = e.target.value;
		set(updater);
		e.target.selectionStart = pos;
		e.target.selectionEnd = pos;
	}
};