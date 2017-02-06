// Credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue

	v = v.replace(/\bAn\b \borange\b/g, "A norange")
	v = v.replace(/\ban\b \borange\b/g, "a norange")
	v = v.replace(/\borange/g, "norange")
	v = v.replace(/\bOrange/g, "Norange")
	v = v.replace(/\bORANGE/g, "NORANGE")

	textNode.nodeValue = v;
}
