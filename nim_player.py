class NimPlayer:
    def __init__(self):
        pass

    def play(self, board):
        # Find the first non-empty row and take one stick from it
        for i in range(len(board)):
            if board[i] > 0:
                board[i] -= 1
                break
        return board
