def binary_search(arr, val, start=0, end=None):
  if end == None:
    end = len(arr) - 1

  mid = (start + end) // 2

  if (start <= end):
    if (val < arr[mid]):
      # value is to the left of mid
      return binary_search(arr, val, start, mid - 1)
    elif (val > arr[mid]):
      # value id to the right of mid
      return binary_search(arr, val, mid + 1, end)
    else:
      # on the money
      return mid
  else:
    return -1

my_list = [2, 4, 6, 8, 10, 12, 13]

index = binary_search(my_list, 12)
print(index)
