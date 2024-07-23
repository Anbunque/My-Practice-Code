
n=1
b=int(input("enter the range "))


def num(n):
    if n<b+1:
        print(n)
        return num(n+1)
        
        
num(n)
