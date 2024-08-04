
import java.util.Scanner;


class calc{

public static void main(String a[]){


Scanner s=new Scanner(System.in);

System.out.println("Enter the 1st operend ");
int x=s.nextInt();

System.out.println("Enter the 2nd operend ");
int y=s.nextInt();
s.nextLine();
 
System.out.println("Enter the Operend to perform the operation" + "\n" + " for ADD press + " + "\n" + " for SUB press - " + "\n" + " MUL press * " + "\n" + " DIV press / " + "\n" );
String z=s.nextLine();


switch (z) {

case "+":
System.out.printf("The ADD of %d and %d is %d",x,y,x+y);
break;

case "-":
System.out.printf("The SUB of %d and %d is %d",x,y,x-y);
break;

case "*":
System.out.printf("The MUL of %d and %d is %d",x,y,x*y);
break;

case "/":
System.out.printf("The DIV of %d and %d is %d",x,y,x/y);
break;

default:
System.out.println("Invalid operator");
break;
}



}

}