/*!
 * MultByteStringSlice v0.1
 * 
 * Copyright (c) 2014 Renowan
 * This software is released under the MIT License, see README.md.
 */

$(function(){

	// 元の文字列
	var strArr = [
		'マーq君ＶＳ侍ジqャパン　今秋d凱2旋3で実現へ月に８年り34野5球1fwfggg',
		'Yankeesのオープ合前23セレモニーで、松井2秀喜氏が「レジェンド」とし321て紹介2され2され2され1た。3',
		'結構盛り上がってたんじゃな2いで3すか3ねwと思fいまfwqすよ',
		'コンディションだけ、周囲を取り巻くさまざまな3要素も実31戦へ3向け33動き4始5めていeる。',
		'高ま1る1期待をよ3そに、22田中3は淡3々と、3そして着実1進34めてdfqいる3。'
	];






	/* multByteStringSlice メイン部分
	--------------------------------------------------------- */
	function strLength( strSrc ){
		len = 0;
		strSrc = escape(strSrc);
		for(i = 0; i < strSrc.length; i++, len++){
			if(strSrc.charAt(i) == "%"){
				if(strSrc.charAt(++i) == "u"){
					i += 3;
					len++;
				}
				i++;
			}
		}
		return len;
	}

	function multByteStringSlice( str , strLimit ){
		
		var isSlice = false;

		while( strLength(str) > strLimit ){
			str = str.slice(0, str.length-1);
			isSlice = true;
		}

		if( isSlice ){
			str += '...';
		}

		return str;
	}
	/* multByteStringSlice メイン部分
	--------------------------------------------------------- */






	function setString(_arr){
		var _html = '';
		for (var i = 0; i < _arr.length; i++) {
			_html += '<li>'+_arr[i]+'</li>';
		};
		return _html;
	}

	function multByteStringSliceExe( _arr , strLimit ){
		for (var i = 0; i < _arr.length; i++) {
			_arr[i] = multByteStringSlice( _arr[i] , strLimit );
		};
		return _arr;
	}

	function onClickHandle(){
		var strLimit = 60;
		if( $('#limitInput').val() ){
			strLimit = $('#limitInput').val();
		}
		console.log('strLimit',strLimit);
		var _arr = multByteStringSliceExe( strArr , strLimit );
		console.log(_arr);
		var html = setString(_arr);
		$('#output3').html( html );
	}


	/* str1
	--------------------------------------------------------- */
	var _html1 = setString(strArr);
	$('#output1').html( _html1 );

	/* str2
	--------------------------------------------------------- */
	var strArr2 = _.clone(strArr);
	for (var i = 0; i < strArr2.length; i++) {
		strArr2[i] = strArr2[i].slice(0, 34);
	};
	var _html2 = setString(strArr2);
	$('#output2').html( _html2 );



	/* str3
	--------------------------------------------------------- */
	onClickHandle();

	$('#btn-slice').on('click',function(){
		onClickHandle();
	});

});
