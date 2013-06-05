#!/usr/bin/perl
while (<STDIN>) {
$p=$_;
$p=~/^(.*)::(.*)$/; $p="<i>$1</i>::$2";

$p=~s/'/\\'/g;
$str.="'$p',\n";
}
print "const toki = [\n$str\n];\n";
