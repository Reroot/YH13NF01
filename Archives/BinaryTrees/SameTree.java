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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Equal nullity denotes that this branch is the same (local equality)
        // This is a base case, but also handles being given two empty trees
        if (p == null && q == null) return true;

        // Unequal nullity denotes that the trees aren't the same
        // Note that we've already ruled out equal nullity above
        else if (p == null || q == null) return false;

        // Both nodes have values; descend iff those values are equal
        // "&&" here allows for any difference to overrule a local equality
        if (p.val == q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

        // If we're here, both nodes have values, and they're unequal, so the trees aren't the same
        return false;
    }
}

public boolean isSameTree(TreeNode p, TreeNode q) {        
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(p);
    queue.add(q);
    while(!queue.isEmpty()){
        TreeNode f = queue.poll();
        TreeNode s = queue.poll();
        if(f == null && s == null){
            continue;
        }else if(f == null || s == null || f.val != s.val){
            return false;
        }
        queue.add(f.left);
        queue.add(s.left);
        queue.add(f.right);
        queue.add(s.right);
    }
    return true;
}

public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    Stack<TreeNode> stackP = new Stack<>();
    Stack<TreeNode> stackQ = new Stack<>();
    stackP.push(p);
    stackQ.push(q);
    while (!stackP.empty() && !stackQ.empty()) {
        TreeNode np = stackP.pop();
        TreeNode nq = stackQ.pop();
        if (np.val != nq.val) return false;
        if (np.left != null && nq.left != null) {
            stackP.push(np.left);
            stackQ.push(nq.left);
        } else if (np.left != null || nq.left != null) {
            return false;
        }
        if (np.right != null && nq.right != null) {
            stackP.push(np.right);
            stackQ.push(nq.right);
        } else if (np.right != null || nq.right != null) {
            return false;
        }
    }
    return true;
}