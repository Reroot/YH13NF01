// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



class strStr {
    public int strStr(String haystack, String needle) {
        len1 = haystack.length();
        len2 = needle.length();
        if(len1 < len2) {
            return -1;
        }

        int thres = (len1 - len2);

        for(int i = 0;i< thres;i++) {
            for(int j = 0;j<len2;j++) {
                //start off on our current i, 
                if(haystack.charAt(i+j) != needle.charAt(j)) break;
                //else conutine with j
                if(j==len2) return i;
            }
        }
        return -1;
    }
}