string1=input("Enter the string : ")
string=string1.lower()

a=[]
for i in range(0,len(string)):
    a.append(string[i])

for i in range(0,len(string)):
    for j in range(0,i):
        

        if(a[i]==a[j]):
            
            print(a[i])
                    
    
