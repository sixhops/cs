class MergeSortAlgorithm
  # Break's the array down into two numbers (number A and number B) and sorts them.
  def merge_sort(numbers)
    if numbers.size <= 1
      return numbers
    end

    array_size = numbers.size
    half_of_size = (array_size / 2).round

    left_array = numbers.take(half_of_size)
    right_array = numbers.drop(half_of_size)

    sorted_left_array = merge_sort(left_array)
    sorted_right_array = merge_sort(right_array)

    merge(sorted_left_array, sorted_right_array)
  end

  # This then creates a new array, loops through the left/right arrays and places the lowest number into the array.
  def merge(left_array, right_array)
    if right_array.empty?
      return left_array # We have nothing to compare. Left wins.
    end

    if left_array.empty?
      return right_array # We have nothing to compare. Right wins.
    end

    if left_array.first <= right_array.first
      smallest_number = left_array.shift
    else
      smallest_number = right_array.shift
    end

    # We keep doing it until the left or right array is empty.
    recursive = merge(left_array, right_array)

    # Okay, either left or right array are empty at this point. So we have a result.
    [smallest_number].concat(recursive)
  end
end

# Let's give this a spin?
msa = MergeSortAlgorithm.new
puts msa.merge_sort([4, 92, 1, 39, 19, 93, 49, 10].shuffle) # => [1, 4, 10, 19, 39, 49, 92, 93]
