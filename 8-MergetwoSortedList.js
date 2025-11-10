var mergeTwoLists = function(list1, list2) {
    // Base cases: if one of the lists is empty, return the other list
    if (!list1) return list2
    if (!list2) return list1

    // Compare the values of the two lists and recursively merge
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}