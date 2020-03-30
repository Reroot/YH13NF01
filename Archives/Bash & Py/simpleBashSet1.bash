#no user input, print odds for 1-99, ..2 and this end skips every 2 steps
for i in {1..99..2}
do
    echo $i
done

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#Write a Bash script which accepts  as input and displays a greeting: "Welcome (name)"
read name
echo Welcome $name

#Use for loops to display the natural numbers from  to .
#Input Format
#There is no input
for i in {1..50}
do
    echo $i
done
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#Given two integers,  and , find their sum, difference, product, and quotient.

#Input Format - Two lines containing one integer each ( and , respectively).
#Constraints -100 - 100
#Output Format
#Four lines containing the sum (), difference (), product (), and quotient (), respectively.
#(While computing the quotient, print only the integer part.)
read x
read y

echo $((x + y))
echo $((x - y))
echo $((x * y))
echo $((x / y))

#OR
read x
read y
for i in {+,-,"*",/}
do
    var=$(((x)$i(y)))
    echo $var
done
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#Exactly one of the following lines:
#- X is less than Y
#- X is greater than Y
#- X is equal to Y
#!/bin/bash
read x
read y
[[ $x -gt $y ]] && echo 'X is greater than Y'
[[ $x -eq $y ]] && echo 'X is equal to Y'
[[ $x -lt $y ]] && echo 'X is less than Y'
#or
read firstNumber
read secondNumber
if (($firstNumber > $secondNumber)); then
    echo X is greater than Y;
elif (($firstNumber < $secondNumber)); then
    echo X is less than Y;
else
    echo X is equal to Y;
fi
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#pipes
#sed sends its result to standard out, can we pipe sed to another sed? Yep!

$ echo "hello there" | sed "s/hello/hi/" | sed "s/there/robots/"
hi robots

Above, we’ve connected echo to sed, then connected that to another
 sed. Pipes are great for taking output of one command and transforming
  it using other commands like jq. They’re a key part of the Unix
   philosophy of “small sharp tools”: since commands can be chained
   ogether with pipes, each command only needs to do one thing and 
   then hand it off to another command.