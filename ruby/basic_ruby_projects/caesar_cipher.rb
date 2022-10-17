def caesar_cipher(str, n_shift)
    str_to_num = str.chars.map { |c| c.ord } #turn str into an array and convert letter elements into numbers
    shift_char = str_to_num.map { |c| c + n_shift } #shift every element in array
    shift_char.map { |c| c.chr }.join #join array 
  end
  
  puts caesar_cipher('Hello', 3)