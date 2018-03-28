var data=`{{get(header)}}
<form action="post" id="test">
    <input type="text" name="txt" id="txt">
    <input type="submit" value="Submit">
</form>
{{get(footer)}}`;

var exp = /{{get\(\w+\)}}/

console.log(data.fin(/{{get\(\w+\)}}/));