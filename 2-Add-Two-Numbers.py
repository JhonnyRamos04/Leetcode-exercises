def addTwoNumbers(l1, l2):
    """
    :type l1: Optional[ListNode]
    :type l2: Optional[ListNode]
    :rtype: Optional[ListNode]
    """
    
    l3 = []
    firstNumber = 0
    secondNumber = 0
    totaL= 0

    for i in range(0, len(l1)):
        for j in range(0, len(l2)):
            if i == j:
                firstNumber += l1[i] * (10 ** i)
                secondNumber += l2[j] * (10 ** j)
                totaL = firstNumber + secondNumber
    l3 = [int(x) for x in str(totaL)]
    
    for k in range(0, len(l3)//2):
        l3[k], l3[len(l3)-1-k] = l3[len(l3)-1-k], l3[k]
    return l3


print(addTwoNumbers([2,4,3], [5,6,4]))

        



       