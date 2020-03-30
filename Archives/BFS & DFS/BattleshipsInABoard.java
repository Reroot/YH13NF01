// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?


// - Solution #1: Traverse the matrix looking for 'X's. Once you find an X, increment your count and call a recursive function to "sink" the entire battleships by constantly visiting its 4 neighboring cells (up, down, left, and right). This will prevent you from counting the same battleship multiple times. Once you have traversed the entire matrix, simply return your count. 
// - Solution #2: Traverse the matrix using the same logic as the first solution however, only count the first 'X' you find in any battleship. This can be done by realizing how we are traversing the matrix (top to bottom and left to right) and understanding that battleships strictly exist horizontally or vertically. Therefore we ensure only counting the first 'X' of any battleship by checking the cell above us and the cell to the left of us to see if either of them are 'X's. Once we finish traversing the matrix we return our count again.


public int BattleshipsInABoard(char[][] board) {
    int n = 0;
    for(int i = 0;i<board.length;i++) {
        for(int j = 0;j<board[i].length;j++) {
            if(board[i][j] == 'X') {
                n++;
                //columb shifting
                dfs(board, i, j);
            }
        }
    }
    return n;
}

public void sink(char[][] board,int i,int j) {
    if(i < 0 || i >= board.length || j < 0 || j >= board[i].length
    board[i][j] != 'X') {
        return;
    }

    board[i, j] = '.';//up

    dfs(board, i-1, j);//up
    dfs(board, i+1, j);//down
    dfs(board, i, j-1);//left
    dfs(board, i, j+1);//right
    }
}


public int countBattleships(char[][] board) {
    int m = board.length;
    if (m==0) return 0;
    int n = board[0].length;
    
    int count=0;
    
    for (int i=0; i<m; i++) {
        for (int j=0; j<n; j++) {
            if (board[i][j] == '.') continue;
            if (i > 0 && board[i-1][j] == 'X') continue;
            if (j > 0 && board[i][j-1] == 'X') continue;
            count++;
        }
    }
    
    return count;
}