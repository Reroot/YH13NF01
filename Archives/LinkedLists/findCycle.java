/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> set = new HashSet<ListNode>();
        while(head != null) {
            if(set.contains(head)) {
                return true;
            } else {
                set.add(head);

            }
            head = head.next;
        }
        return false;
    }
}

public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(slow.next != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        
            if(slow == fast) {
                return true;
            } 

        }
        return false;
    }
}