class NimPlayer:
    def __init__(self, name):
        self.name = name

    def play(self, board):
        # Calculate the Nim-sum
        nim_sum = 0
        for count in board:
            nim_sum ^= count
        print(nim_sum, " <- nim_sum")
        # If Nim-sum is zero, make a safe move
        if nim_sum == 0:
            for i in range(len(board)):
                if board[i] > 0:
                    board[i] -= 1
                    break
        else:
            # Find a row to make the optimal move
            for i in range(len(board)):
                if board[i] ^ nim_sum < board[i]:
                    board[i] -= board[i] - (board[i] ^ nim_sum)
                    break

        return board

def play_nim_game():
    player1 = NimPlayer("Computer")
    player2 = "Human"
    board = [1, 3, 5, 7]
    current_player = player2

    while sum(board) > 0:
        print(f"{current_player}'s turn. Board state: {board}")
        if current_player == player2:
            # Human player's turn
            row = int(input("Enter the row number (0-3): "))
            while row < 0 or row >= len(board) or board[row] == 0:
                row = int(input("Invalid row. Enter the row number (0-3): "))
            sticks = int(input(f"Enter the number of sticks to take from row {row} (1-{board[row]}): "))
            while sticks < 1 or sticks > board[row]:
                sticks = int(input(f"Invalid number of sticks. Enter the number of sticks to take from row {row} (1-{board[row]}): "))
            board[row] -= sticks
        else:
            # Computer's turn
            board = player1.play(board)

        if sum(board) == 0:
            print(f"{current_player} has taken the last stick and loses!")
            break

        current_player = player1.name if current_player == player2 else player2

    print("Game over!")

# Run the game
play_nim_game()
