<html>
<head>

<script language="javascript">
var Scenes = ["Winter", "Mountains", "Meadow", "Forest", "City", "Beach", "Room"];
var Backgrounds = ["NightSky", "DaySky", "Sunset"];
var Elements =["Clouds", "Sun", "Moon", "Rainbow", "SnowFlakes", "Rain", "Volcano"];
var Objects = ["PalmTrees", "Butterflies", "Mushroom", "Tree1", "Tree2", "Rocks", "Walrus", "Bunnies"];
var ManMade = ["Mob", "SnowMan", "SandCastle", "Rocket", "Parasol", "SandToys", "Tombstone", "Pirates", "Car", "Treasure"];
var SpecialEffects = ["Fire", "Smoke", "FireWorks", "PinkElephant", "BlackMonolith", "UFO", "Hearts"];

var Prop = [Scenes,Backgrounds,Elements,Objects,ManMade,SpecialEffects];

var fileName = "/Ref.js";
function getCurrentDirectory(fileName)
{
var syspath = location.href; 
syspath = syspath.toLowerCase();      //��·������ת����Сд
myPosition = syspath.lastIndexOf("/");  // ��ȡ�ļ�·���е����һ��"/"

syspath = syspath.substring(0,parseInt(myPosition)+1); // ʹ��substring���� ��ȡ"/"֮ǰ���ַ������͵õ���ǰĿ¼��·�� 

syspath = syspath.replace("file:///","");   //����Ҫ��file:///�滻Ϊ�գ�����ᱨ��

syspath = syspath.replace(new RegExp("%20","gm")," ");   // ����ļ����к��пո���Ҫ��ԭ�ո��滻���е� %20 Ϊ " "

syspath = syspath + fileName; 

return syspath.toString();
}

function WriteJs() 
{ 
    var fso, tf; 
    fso = new ActiveXObject("Scripting.FileSystemObject"); 
	var	pathName = getCurrentDirectory(fileName);
    tf = fso.CreateTextFile(pathName, true); 
	for(var i=0; i<Prop.length; i++)
	{
		for(var j=0; j<Prop[i].length; j++)
		{
			tf.WriteLine("//!ref: Props/"+ Prop[i][j] +".txml");
		}
	}
    
    tf.Close();
	
     
} 
</script>
</head>

<body>
<input type="button" value="WriteJs" onclick="WriteJs()">
</body>
</html>

