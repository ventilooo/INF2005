$(document).ready(function() {
	$('tree').eq(0).jstree();
});

$('#tree').jstree({
	'core' : {
		'data' : {
			'url' : function (node) {
				return node.id === '#' ?
				'ajax_roots.json' :
				'ajax_children.json';
				},
				'data' : function (node) {
					return { 'id' : node.id };
				}
		}
	}
});