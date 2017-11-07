# define algorithm here (you'll need lo and hi for the beginning/endpoints on the recursive call)
def quicksort(arr, lo, hi)
  if lo < hi
    new_pivot_index = partition(arr, lo, hi)
    quicksort(arr, lo, new_pivot_index - 1)
    quicksort(arr, new_pivot_index + 1, hi)
  end

  return arr
end

# partition function (selects a pivot, sorts into partitions, and returns the array index of the pivot)
def partition(arr, lo, hi)
  pivot = arr[hi]
  left = lo

  for element in (lo...hi)
    if arr[element] <= pivot
      arr[left], arr[element] = arr[element], arr[left]
      left += 1
    end
  end

  arr[left], arr[hi] = arr[hi], arr[left]
  return left
end


# testing quicksort
test = (1..10).to_a.shuffle
quicksort(test, 0, test.length-1)

if test == (1..10).to_a
  puts 'The sort worked!'
else
  puts 'Noooo, the sort failed!'
end
