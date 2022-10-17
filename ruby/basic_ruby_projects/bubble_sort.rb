def bubble_sort(array)
    #grab size of array
    size = array.length
    #set code to iterate through array size-1 times
    i=0
    while i<size-1 do
      array.each_with_index do |num, index|
          unless array[index + 1] == nil
            if array[index] > array[index+1]
              array[index], array[index+1] = 
              array[index+1],  array[index]
            end
          end
      end
      i+=1
    end
    array 
  end 
  
  arr=[2,5,8,3,1,9,4]
  p bubble_sort(arr)