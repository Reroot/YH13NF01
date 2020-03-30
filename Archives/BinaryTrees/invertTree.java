import java.util.Queue;

https://leetcode.com/problems/invert-binary-tree/discuss/62707/Straightforward-DFS-recursive-iterative-BFS-solutions
class TreeNode {
    int data;
    TreeNode left = null;
    TreeNode right = null;
    TreeNode(int x) {
        data = x;
    }
}
class invertTree {
    public TreeNode invertTree(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode prev = null;
        TreeNode cur = root;
        while (cur != null || !stack.isEmpty()) {
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
            if (stack.peek().right == null || stack.peek().right == prev) {
  			    // visit
                prev = stack.pop();
                TreeNode t = prev.left;
                prev.left = prev.right;
                prev.right = t;
            } else {
                cur = stack.peek().right;
            }
        }
        return root;
    }
}