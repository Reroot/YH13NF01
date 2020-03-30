import apple.laf.JRSUIUtils.Tree;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
//both are O(n) time and O(h) space h- height of tree if balanced h = logn
public class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    //constructor
    TreeNode(int x) {
        int data = x;
    }
}

class Solution {
    public int maxDepth(TreeNode root) {
        //counting the root as 1
        if(root == null) return 0;

        return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
        
    }
}

//BFS
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        Queue<TreeNode> que = new LinkedList<TreeNode>();
        que.offer(root);
        int count = 0;
        while(!que.isEmpty()) {
            int Qsize = que.size();
            count++;
            while(Qsize-- > 0) {
                TreeNode node = que.poll();

                if(node.left != null) {
                    que.offer(node.left);
                }
                if(node.right != null) {
                    que.offer(node.right);
                }
            }
            
        }
        return count;
    }
}