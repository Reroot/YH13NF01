/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while(curr != null) {
            ListNode temp = curr.next;
            curr.next = prev;//flip pointers
            prev = curr;//ready prev for next flip
            curr = temp;//orginal place iteration flow
        }
        return prev;
    } 
}

// initial:
// 1 -> 2 -> 3 -> 4 -> 5

// after reverseList(2):
// 1 -> 2 <- 3 <- 4 <- 5
//      |
//     null
	
// after operate on 1:
// null <- 1 <- 2 <- 3 <- 4 <- 5
// Code:

class Solution {
    public ListNode reverseList(ListNode head) {
        // base case
        if(head == null || head.next == null) return head;
        
        ListNode newHead = reverseList(head.next);
        
        head.next.next = head;
        head.next = null;

        return newHead;
    }
}
// time complexity: O(n)
// space complexity: O(n)