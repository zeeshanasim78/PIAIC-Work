

def add_numbers(n1, n2) -> int:
    return n1+n2


def sub_numbers(n1, n2) -> int:
    return n1-n2


def divide_numbers(n1, n2) -> int:
    return n1/n2


def mul_numbers(n1, n2) -> int:
    return n1*n2


--print("Welcome to Python Calculator..")
var1: int = input("Please enter first number :  ")
var2: int = input("Please enter 2nd number : ")
oper: str = input("Enter the Operator + , - , * , / :   ")
result = 0
if (oper == '+'):
    result = add_numbers(int(var1), int(var2))
elif (oper == '-'):
    result = sub_numbers(int(var1), int(var2))
elif(oper == '*'):
    result = mul_numbers(int(var1), int(var2))
elif(oper == '/'):
    result = divide_numbers(int(var1), int(var2))

print("Answer of  = " + str(result))
