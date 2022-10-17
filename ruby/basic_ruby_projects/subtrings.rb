
def substrings(str, dictionary)
    #make dictionary
    substring_hash = {}
  
    #iterate through dictionary and find matches
    dictionary.each do |word|
      substring_hash[word] = 
      str.downcase.scan(word).count if str.include?(word) #add key/value
    end
    substring_hash
  end