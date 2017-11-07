def binary_search(array, value, min=0, max=nil)

  def element_at(a, n)
    a.fetch(n, -1)
  end

  if max == nil
    # max = array.count - 1
    # max = 0
    # while element_at(array, max) != -1
    #   max += 1
    # end

    ###############################

    max = array.index(array[-1])

  end

  mid = (min + max) / 2

  if value < element_at(array, mid) #array[mid]
    return binary_search(array, value, min, mid - 1)
  elsif value > element_at(array, mid) #array[mid]
    return binary_search(array, value, mid + 1, max)
  else
    return mid
  end
end

arr = (5..15).to_a

puts binary_search(arr, 6)
