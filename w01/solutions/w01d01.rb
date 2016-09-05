# this solution is using chaining method. you can also use for loop too!
# pay attention to .chunk! its super cool

class String
  def compress
    self.chars.chunk{|e|e}.map{|e,a|[e,a.size]}.join
  end
end

=begin
"aaabbcccccca".compress
=> "a3b2c6a1"
"aaabbcccccca".chars
=> ["a", "a", "a", "b", "b", "c", "c", "c", "c", "c", "c", "a"]
"aaabbcccccca".chars.chunk{|e|e}.to_a
=> [["a", ["a", "a", "a"]], ["b", ["b", "b"]], ["c", ["c", "c", "c", "c", "c", "c"]], ["a", ["a"]]]
"aaabbcccccca".chars.chunk{|e|e}.map{|e,a|[e,a.size]}
=> [["a", 3], ["b", 2], ["c", 6], ["a", 1]]
"aaabbcccccca".chars.chunk{|e|e}.map{|e,a|[e,a.size]}.join
=> "a3b2c6a1"
=end
