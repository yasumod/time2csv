console.log('day,in,rest,out');
console.log('===============================================');

var str = "";
for (i=1; i<32; i++) {
	if (jQuery("#"+i+"_out_hour").length < 1) {
		break;
	}
	
	str += i + "," +
		$("#" + i + "_in_hour").val() + ":" + $("#" + i + "_in_minits").val() + "," +
		$("#" + i + "_ref_hour").val() + ":" + $("#" + i + "_ref_minits").val() + "," +
		$("#" + i + "_out_hour").val() + ":" + $("#" + i + "_out_minits").val() + "\n"
	;
	
}

console.log(str);