let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);

while(myString.search(',') != -1)
{
  
  myString= myString.replace(","," " );
  console.log(myString);
}