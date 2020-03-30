
class combosum {
    
    private ArrayList<ArrayList<Integer>> printCombinationSum(int[] a, int sumRemaining)
    {
        Arrays.sort(a);
        ArrayList<ArrayList<Integer>> combinationSum = new ArrayList<ArrayList<Integer>>();
        getCombinationSum(combinationSum, new ArrayList<Integer>(), a, sumRemaining, 0);
        return combinationSum;
    }
    
    private void getCombinationSum(List<ArrayList<Integer>> combinationSum, List<Integer> sumList, int[] a, int sumRemaining, int index)
    {
       if(sumRemaining > 0)
       {
           for(int i = index; i < a.length && sumRemaining >= a[i]; i++)
           {
               if(i > index && a[i - 1] == a[i]) //if the last number was the same?
               {
                   continue;
               }
               sumList.add(a[i]);
               getCombinationSum(combinationSum, sumList, a, sumRemaining - a[i], i + 1);
               //ok didn't work remove and contuine recusrion, IE the Backtrack
               sumList.remove(sumList.size() - 1);
           }
       }
       else if(sumRemaining == 0)
       {
           combinationSum.add(new ArrayList<Integer> (sumList));
           return;
       }
    }
    
	public static void main (String[] args) {
		//code
		GFG gfg = new GFG();
		Scanner sc = new Scanner(System.in);
		int testCases, n, a[], sumRemaining;
		ArrayList<ArrayList<Integer>> result;
		ArrayList<Integer> sumList;
		
		testCases = sc.nextInt();
		
		for(int i = 0; i < testCases; i++)
		{
		    n = sc.nextInt();
		    a = new int[n];
		    
		    for(int j = 0; j < n; j++)
		    {
		        a[j] = sc.nextInt();
		    }
		    
		    sumRemaining = sc.nextInt();
		    
		    result = gfg.printCombinationSum(a, sumRemaining);
		    
		    
		    for(int j = 0; j < result.size(); j++)
		    {
		        System.out.print("(");
		        sumList = result.get(j);
		        
		        for(int k = 0; k < sumList.size(); k++)
		        {
		            System.out.print(sumList.get(k));
		            if(k != sumList.size() - 1)
		            {
		               System.out.print(" "); 
		            }
		        }
		        System.out.print(")");
		    }
		    
		    if(result.size() == 0)
		    {
		        System.out.print("Empty"); 
		    }
		    System.out.println("");
		}
	}
}


// Given an array of integers A and a sum B, find all unique combinations in A where the sum is equal to B.

// ach number in A may only be used once in the combination.

// Note:
//    All numbers will be positive integers.
//    Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
//    The combinations themselves must be sorted in ascending order.
//    If there is no combination possible the print "Empty" (without qoutes).
// Example,
// Given A = 10,1,2,7,6,1,5 and B(sum) 8,

// A solution set is:

// [1, 7]
// [1, 2, 5]
// [2, 6]
// [1, 1, 6]

// Input:
// First is T , no of test cases. 1<=T<=500
// Every test case has three lines.
// First line is N, size of array. 1<=N<=12
// Second line contains N space seperated integers(x). 1<=x<=9.
// Third line is the sum B. 1<=B<=30.
 
// Output:
// One line per test case, every subset enclosed in () and in every set intergers should be space seperated.(See example)

// Example:
// Input:
// 2
// 7
// 10 1 2 7 6 1 5
// 8
// 5
// 8 1 8 6 8
// 12

// Output:
// (1 1 6)(1 2 5)(1 7)(2 6)
// Empty

// ** For More Input/Output Examples Use 'Expected Output' option **