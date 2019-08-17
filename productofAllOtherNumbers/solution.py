# Naive solution with O(n^2) time complexity

def productOfAllOtherNumbers(arr):
    new_arr = []
    starting_num = 1

    for i in range(len(arr)):
        for num in arr:
            if num != arr[i]:
                starting_num *= num
        new_arr.append(starting_num)
        starting_num = 1
    return new_arr
    

arr1 = [1, 7, 3, 4]
arr2 = [1, 2, 3, 4, 5]

print(productOfAllOtherNumbers(arr1))
print(productOfAllOtherNumbers(arr2))
