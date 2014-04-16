#!/usr/bin/perl
$a=$ARGV[0];
while (<STDIN>) {
$p=$_;
$p=~/^(.*)::(.*)$/; $p="<i>$1</i>::$2";

$p=~s/'/\\'/g;
$str.="'$p',\n";
}
print "const toki_$a = [\n$str\n];\n";
