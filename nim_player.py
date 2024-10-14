class NimPlayer:
    boardState = []
    turn = None
    def __init__(self):
        pass
    def __init__(self, boardState):
        self.boardState = boardState
    def play(self, board):
        if sum(board) == sum([1,3,5,7]):
            turn = 0
        for i in range(len(board)):
            if board[i] > 0:
                board[i] -= 1
                break
        return board
    def calculateNimSum(board):
        nimsum = board[0]
        for i in range(1, 4):
            nimsum = nimsum ^ board[i]
        return nimsum