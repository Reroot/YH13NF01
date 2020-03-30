/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class LevelOrderBFS {
    public List<List<Integer>> levelOrder(TreeNode root) {
        Queue<TreeNode> que = new LinkedList<TreeNode>(); //first In first out, so we cann go level by level
        //linked lists can hold treenodes like this
        List<List<Integer>> res = new LinkedList<List<Integer>>();
        //make a sub list for this, to level through
        if(root == null) return res;
        que.offer(root);
        while(!que.isEmpty()) {
            List<Integer> subList = new LinkedList<Integer>();
            int queSize = que.size();//start at 1
            for(int i = 0;i<queSize;i++) {//starts at 1 iteration, thus adding the root and get's bigger within the
                //loop as big as th binary tree amount of leaf levels, should be 8 elements plus that are offered.
                //add the first root element to our sub list for the res list
                //add our first root. 
                
                //increase the loop to contuine
                if(que.peek().left != null) que.offer(que.peek().left);//add to que without popping
                if(que.peek().right != null) que.offer(que.peek().right);

                //add 2 more potentials to the que
                //now let's pop the the head, which was input as left, lasty
                subList.add(que.poll().val);
            }
            res.add(subList);
        }
        return res;
    }
}

//SOL WITH PROXY NODE
// Iterative Queue based Java program to do level order traversal 
// of Binary Tree 

// /* importing the inbuilt java classes required for the program */
// import java.util.Queue; 
// import java.util.LinkedList; 

// /* Class to represent Tree node */
// class Node { 
// 	int data; 
// 	Node left, right; 

// 	public Node(int item) { 
// 		data = item; 
// 		left = null; 
// 		right = null; 
// 	} 
// } 

// /* Class to print Level Order Traversal */
// class BinaryTree { 

// 	Node root; 

// 	/* Given a binary tree. Print its nodes in level order 
// 	using array for implementing queue */
// 	void printLevelOrder() 
// 	{ 
// 		Queue<Node> queue = new LinkedList<Node>(); 
// 		queue.add(root); 
// 		while (!queue.isEmpty()) 
// 		{ 

// 			/* poll() removes the present head. 
// 			For more information on poll() visit 
// 			http://www.tutorialspoint.com/java/util/linkedlist_poll.htm */
// 			Node tempNode = queue.poll(); 
// 			System.out.print(tempNode.data + " "); 

// 			/*Enqueue left child */
// 			if (tempNode.left != null) { 
// 				queue.add(tempNode.left); 
// 			} 

// 			/*Enqueue right child */
// 			if (tempNode.right != null) { 
// 				queue.add(tempNode.right); 
// 			} 
// 		} 
// 	} 

// 	public static void main(String args[]) 
// 	{ 
// 		/* creating a binary tree and entering 
// 		the nodes */
// 		BinaryTree tree_level = new BinaryTree(); 
// 		tree_level.root = new Node(1); 
// 		tree_level.root.left = new Node(2); 
// 		tree_level.root.right = new Node(3); 
// 		tree_level.root.left.left = new Node(4); 
// 		tree_level.root.left.right = new Node(5); 

// 		System.out.println("Level order traversal of binary tree is - "); 
// 		tree_level.printLevelOrder(); 
// 	} 
// } 
