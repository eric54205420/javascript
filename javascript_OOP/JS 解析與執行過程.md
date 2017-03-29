![1_全局預處理視頻教程-JavaScript面向對象編程-麥子學院](http://www.maiziedu.com/course/583-8416/)

* JS 解析與執行過程
	* 全局
		* 預處理階段
			* 在正式執行代碼前
				* 1. 創建辭法環境 LexicalEnvironment
				* 1. 處理數據綁定
					* 用 [color=blue] 聲明方式 創建的函數
					* 用 [color=blue] var 聲明的變量
					* 將上述兩者綁定到 全局 LexicalEnvironment 中
			* ie
			``` javascript
				var a = 5;
				var b;
				var g = function (){};	// 用 函數表達式 定義者 不綁定
							// 機制後述
				c = 5;			// 同樣不綁定
							// 但會成為全局對象的屬性 後述						
				function XXX(){
				
				}
				
				LexicalEnvironment 
				{
					a: 5
					b: undefined
					g: undefined
					XXX : XXX 函數的引用
				}
			```
			
		* 執行階段
	* 函數
