$items = Get-ChildItem -Path $PSScriptRoot -Include *.jpg, *.png -Recurse
$t = "      "
@"
${t}const images = [
${t}    '$($items.Name -join "',`n$t    '")',
${t}];
"@
