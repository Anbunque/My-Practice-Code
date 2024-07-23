a=int(input("Enter the line of stars"))
for i in range(2,a+2):
    print(" "*(a-i+2),end=" ")
    print("* "*(i-1))
