var yr, tem;
function fun()
{
  yr = parseInt(document.getElementById("year").value);
  if(yr)
  {
    tem=document.getElementById("result");
    tem.style.display = "block";
    if(yr%4==0 && yr%100!=0)
    {
      document.getElementById("ans").innerHTML = "a Leap";
    }
    else if(yr%400==0)
    {
      document.getElementById("ans").innerHTML = "a Leap";
    }
    else
    {
      document.getElementById("ans").innerHTML = "not a Leap";
    }
  }
}