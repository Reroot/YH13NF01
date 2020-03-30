public String frequencySort(String s) {
    char[] arr = s.toCharArray();
    
    // bucket sort
    int[] count = new int[256];
    for(char c : arr) count[c]++;
    
    // count values and their corresponding letters
    Map<Integer, List<Character>> map = new HashMap<>();
    for(int i = 0; i < 256; i++){
        if(count[i] == 0) continue;
        int cnt = count[i];
        if(!map.containsKey(cnt)){
            map.put(cnt, new ArrayList<Character>());
        }
        map.get(cnt).add((char)i);
    }

    // loop throught possible count values
    StringBuilder sb = new StringBuilder();
    for(int cnt = arr.length; cnt > 0; cnt--){ 
        if(!map.containsKey(cnt)) continue;
        List<Character> list = map.get(cnt);
        for(Character c: list){
            for(int i = 0; i < cnt; i++){
                sb.append(c);
            }
        }
    }
    return sb.toString();
}
///
// And we have normal way using PriorityQueue as follows:
// according to user "orxanb", O(nlogm), m is the distinguish character, can be O(1) since only 26 letters. So the overall time complexity should be O(n), the same as the buck sort with less memory use.

public class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (char c : s.toCharArray())
            map.put(c, map.getOrDefault(c, 0) + 1);
						
        PriorityQueue<Map.Entry<Character, Integer>> pq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        pq.addAll(map.entrySet());
				
        StringBuilder sb = new StringBuilder();
        while (!pq.isEmpty()) {
            Map.Entry e = pq.poll();
            for (int i = 0; i < (int)e.getValue(); i++) 
                sb.append(e.getKey());
        }
        return sb.toString();
    }
}