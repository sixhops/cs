def binary_search(array, value, min=0, max=nil)

  if max == nil
    max = array.count - 1
  end

  mid = (min + max) / 2

  if value < array[mid]
    return binary_search(array, value, min, mid - 1)
  elsif value > array[mid]
    return binary_search(array, value, mid + 1, max)
  else
    return mid
  end
end

arr = (5..15).to_a

puts binary_search(arr, 9)
