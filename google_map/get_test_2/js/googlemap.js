    //這是初始化方法，用來繪製google地圖 
    function init() { 
    console.log("entering the init() method"); 
    //首先必須判斷瀏覽器是否有geolocation屬性，因為HTML5 才新增了這個屬性，不是所有瀏覽器都支持 
    if (navigator.geolocation) { 
    //如果瀏覽器支持geolocation，則使用geolocation的getCurrentLocation方法來取得用戶當前的地理位置， 
    //並且在成功取得之後調用show_map()回調函數 
    console.log(' Browser support geolocation '); 
    navigator.geolocation.getCurrentPosition(show_map,handle_error ,null); 
    } else { 
    console.log(' Browser doesnt support geolocation '); 
    } 
     
    } 
     
     
    //這是一個回調函數，用於當geolocation成功取得用戶瀏覽器所在的地理位置時候的響應，它吧所有的位置信息封裝在position中 
    //所以我們就需要解析position來取得用戶的詳細信息 
    function show_map(position) { 
     
    // 取得當前的地理位置 
    var coords = position.coords; 
      
    //Part 1; 顯示用戶的精確位置信息 
    //取得頁面上用於顯示精確位置信息的組件 
    var positionInfo=document.getElementById("positionInfo"); 
    var positionString="經度: "+coords.longitude+"<br>"; 
    positionString+="維度: "+coords.latitude+"<br>"; 
    var altitude=coords.altitude; 
    if( altitude!=null){ 
    positionString+="海拔高度"+coords.altitude+"<br>"; 
    } 
    positionString+="經緯度精確到："+coords.accuracy+"米"+"<br>"; 
    positionInfo.innerHTML=positionString;

	
    //Part 2; 在google地圖上顯示瀏覽器的當前位置 
    // 設定地圖參數，將用戶的當前位置的維度和精度都設定為地圖的中心點 
    var latlng = new google.maps.LatLng(coords.latitude, coords.longitude); 
    var myOptions = { 
    // 設定放大倍數 
    zoom : 14, 
    // 將地圖的中心點設定為指定的坐標點 
    center : latlng, 
    // 指定地圖的類型，這裡選擇的是街道地圖 
    mapTypeId : google.maps.MapTypeId.ROADMAP 
    }; 
    // 創建地圖並在"map"div中顯示，吧這個地圖叫做map1 
    var map1; 
    map1 = new google.maps.Map(document.getElementById("map"), myOptions); 
    // 在地圖上創建標記 
    var marker = new google.maps.Marker({ 
    //標註剛才創建的標註點，因為標註點是由當前的經緯度設定的，所以表示了當前位置 
    position : latlng, 
    //標註在哪張地圖上，我們創建了map1作為google map，所以標註在map1上 
    map : map1 
    }); 
    // 設定標註窗口，並且指定該窗口的註釋文字 
    var infowindow = new google.maps.InfoWindow({ 
    content : "這是Charles的瀏覽器的當前位置!" 
    }); 
    // 打開標註窗口 
    infoWindow.open(map1, marker); 
     
    } 
     
     
     
    //這是第二個回調函數，用於當geolocation獲取用戶瀏覽器所在的地理位置失敗時候的響應 
    //error對象封裝了所有的可能出現的無法獲得地理位置的錯誤信息，並且HTML5為其預留了錯誤碼，可以取值{1,2,3} 
    function handle_error(error){ 
    var errorTypes={ 
    1:'位置服務被拒絕', 
    2:'獲取不到位置信息', 
    3:'獲取信息超時' 
    }; 
    console.log(errorTypes[error.code] + ":,不能確定你的當前地理位置"); 
    } 
